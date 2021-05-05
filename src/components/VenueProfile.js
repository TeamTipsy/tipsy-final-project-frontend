
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddVenueComment from './AddVenueComment.js'
import useLocalStorageState from 'use-local-storage-state'
import { useParams } from 'react-router-dom';
import Moment from 'react-moment'
import CheckInVenue from './CheckIn.js'
import CheckInAlert from './CheckinAlert.js'

function VenueProfile({ selectedVenue, token }) {
    const [venue, setVenue] = useState([])
    const [posts, setPosts] = useState([]) 
    const [followVenue, setFollowVenue] = useLocalStorageState(false)
    const [checkIns, setCheckIns] = useState([])
    const [showAlert, setShowAlert] = useState(false)
    let { venueId } = useParams();

    useEffect(() => {
        axios.get(`https://tipsy-backend.herokuapp.com/venues/${venueId}/`).then((response) => {
            setVenue(response.data)
            setPosts(response.data.posted_to_venue)
            setCheckIns(response.data.checkedin_venue)
        })
            
        },[])

    const handlePost = (newPosts) => {
        setPosts([...posts, newPosts])
    }    
    const handleCheckIn = (newCheckIn) => {
        setShowAlert(true)
        setCheckIns([...checkIns, newCheckIn])

    }
    const handleLikeClick = (post_id) => {
        if (post_id) {
            like(post_id)
        }
    }

    function like(post) {
        axios
        .put(`https://tipsy-backend.herokuapp.com/posts/${post}/`,
        {},
        {
            headers: { Authorization: `Token ${token}`},
        })
        .then((data) => {
            if (data.data.detail === 'Post Liked' || data.data.detail === 'Post Unliked') {
                reRenderPosts()
            }
        })
    }

    const reRenderPosts = () => {
        axios.get(
            `https://tipsy-backend.herokuapp.com/venues/${venueId}/`, 
            {
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
                setPosts([...response.data.posted_to_venue])
            }
        )
    }


    const handleFollow = (newFollow) => {
        const isFollowing = newFollow.detail === 'Venue Followed'
        setFollowVenue(isFollowing)
    }

   


    function follow() {
        axios
        .put(`https://tipsy-backend.herokuapp.com/venues/${venue.venue_id}/`,
        {

        },
        {
            headers: { Authorization: `Token ${token}`},
        }).then((data) => {
            handleFollow(data.data)
        })
    }   
    
   
    return (
        
        <div>
            <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4 mb-28">
            <br />
                {showAlert && <CheckInAlert venue={venue.venue_name}setShowAlert={setShowAlert}/>}
                        
                        <div className='bg-brand-red bg-opacity-50 bg-gradient-to-r from-brand-red rounded-r-lg rounded-l-lg  text-white contrast-200 backdrop-blur-sm font-roboto px-px' style={{ backgroundImage: `url(${venue.v_prof_pic})`}}>
                            <div className='bg-gray-900 bg-opacity-80 rounded-r-lg rounded-l-lg'>
                                    <div className=' pl-4 py-2 info'>
                                    <h1 className='font-black text-7xl'>{venue.venue_name}</h1>
                                        {/* <h2 className='text-4xl'>{venue.followers_list.length}</h2> */}
                                        <h2 className='text-4xl'>{venue.hours_of_operation}</h2>
                                        <h2 className='text-2xl'>{venue.phone_num}</h2>
                                        <h2 className='text-2xl'>{venue.web_url}</h2>
                                        <h2 className='text-2xl'>{venue.street_address}</h2>
                                        <h2 className='text-2xl'>{venue.city}, {venue.state}</h2> 
                                        
                                        <h4>{venue.venue_type}</h4>
                                        <h4>{venue.venue_added_by}</h4>
                                        
                                        <button
                                        onClick={() =>follow()}
                                        className="bg-brand-yellow border-black text-white rounded-md p-2 mt-3  font-bebas-neue" 
                                        > {followVenue ? 'Unfollow' : 'Follow'}    
                                        </button>
                                        <br/>
                                        <CheckInVenue handleCheckIn={handleCheckIn} venueId={venue.venue_id} token={token} />
                                    </div> 
                            </div> 
                        </div>
                </div>   
            
                    <br />
                    <br />

                    
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-brand-yellow"></div>
                        </div>
                        <div class="relative flex justify-center">
                            <span class="px-3 bg-white text-xl font-bebas-neue text-brand-dark-blue"> What's Happening at {venue.venue_name} 
                            </span>
                        </div>
                    </div> 
                    {posts && posts.length === 0 && 
                    <div className='empty-message text-lg text-gray-400 font-roboto px-10 mx-6 max-w-auto sm:px-6 lg:px-8'><h1>Be the first to tell us what's happening at this venue!</h1>
                    </div>
                    }
                <div className='px-8 mx-6 max-w-auto sm:px-6 lg:px-8 mb-4 shadow-md rounded-r-md rounded-l-md' id='Posts'>
                    <ul className="divide-y divide-gray-200"> 
                
                    {posts.map((post) => ( 
                        <>
                        <li className="py-4">
                        <div className="flex max-w-5xl space-x-3">
                            <img className="h-16 w-16 rounded-full" src={post.post_author_pic} alt="" />
                            <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium">{post.post_author_username}</h3>
                                <p className="text-sm text-gray-500"><Moment fromNow>{post.post_date}</Moment></p>
                            </div>
                            <p className="text-sm text-gray-500">
                                {post.post_text}
                            </p> 
                            </div>
                        </div>
                        <div className="flex mt-2 mx-4 justify-end">
                                <a onClick={() => handleLikeClick(post.post_id)} className="hover:text-brand-dark-blue text-brand-beau-blue inline-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                </a> 
                                {post.post_likers && post.post_likers.length ? <div>{post.post_likers.length} </div> : <div></div>}
                                {/* <DeleteUserComment postId={post.post_id} reRenderPosts={reRenderPosts} token={token} user_id={user.user_id} /> */}
                            </div>
                        </li>
                        
                        </>
                        
                        
                    
                    ))}
                        <AddVenueComment token={token} handlePost={handlePost} venue_id={venue.venue_id}/>

                    </ul>
                    <br/>
                    <br/>
                </div>    
                <div class="relative">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-brand-yellow"></div>
                        </div>
                        <div class="relative flex justify-center">
                            <span class="px-3 bg-white text-xl font-bebas-neue text-brand-dark-blue">
                            {venue.venue_name} Check-Ins
                            </span>
                        </div>
                    </div> 
                    {checkIns && checkIns.length === 0 && 
                    <div className='empty-message text-lg text-gray-400 font-roboto px-10 mx-6 max-w-auto sm:px-6 lg:px-8'><h1>Be the first to check-in at this venue!</h1>
                    </div>
                    }
                <div className=" tabcontent flow-root px-8 mx-6 max-w-auto sm:px-6 lg:px-8 mb-20 shadow-md rounded-r-md rounded-l-md" id='Checkins'>
                <ul class="-mb-8">
                    {checkIns.map((checkin) =>(
                        <>
                    <li>
                    <div class="relative pb-8">
                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        <div class="relative flex space-x-3">
                        <div>
                            <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <div>
                            <p class="text-sm text-gray-500">{checkin.checkin_username} checked in</p>
                            </div>
                            <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <p class="text-sm text-gray-500"><Moment fromNow>{checkin.checkin_time}</Moment></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </li>

                    </>

                    ))}
                    
                </ul>
                </div> 
                </div>       
       
        

    )     
                
}

export default VenueProfile


