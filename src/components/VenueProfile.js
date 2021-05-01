
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import AddVenueComment from './AddVenueComment.js'
import useLocalStorageState from 'use-local-storage-state'
import {
    Link,
    useParams,
    } from 'react-router-dom';
import Moment from 'react-moment'


function VenueProfile({ selectedVenue, token }) {
    const [venue, setVenue] = useState([])
    const [posts, setPosts] = useState([]) 
    const [followVenue, setFollowVenue] = useLocalStorageState(false)
    const [checkIn, setCheckIn] = useLocalStorageState('Check In', false)
    // const [comment, setComment] =useState(false)
    let { venueId } = useParams();

    useEffect(() => {
        axios.get(`https://tipsy-backend.herokuapp.com/venues/${venueId}/`).then((response) => {
            console.log('resp', response)
            setVenue(response.data)
            setPosts(response.data.posted_to_venue)
        
        })
            
        },[])

    const handlePost = (newPosts) => {
        setPosts([...posts, newPosts])
    }    
    
    const handleLikeClick = (post_id) => {
        if (post_id) {
            like(post_id)
        }
    }

    function like(post) {
        axios
        .put(`http://tipsy-backend.herokuapp.com/posts/${post}/`,
        {},
        {
            headers: { Authorization: `Token ${token}`},
        })
        .then((data) => {
            console.log('like endpoint', data)
            if (data.data.detail === 'Post Liked' || data.data.detail === 'Post Unliked') {
                // axios.get(
                //     `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
                //     {
                //         headers: { Authorization: `Token ${token}`}
                //     }).then((response) => {
                //     setAllPosts([...response.data.posts_by, ...response.data.posted_to_user])
                // })
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

    const handleCheckIn = (newCheckIn) => {
        const isCheckedIn = newCheckIn.detail === 'Checked In'
        setCheckIn(isCheckedIn)
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
    
    function checkInVenue(venueId) {
        axios
        .post(`https://tipsy-backend.herokuapp.com/checkins/`,
        {
            checkedin_venue: venueId
        },
        {
            headers: { Authorization: `Token ${token}`}
        }).then((data) => {
            console.log('data', data)
            handleCheckIn(data.data)
        })
        
    }
    

    return (
        
        <div>
            <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
            <br />
                <div className="max-w-auto py-2 px-8 grid grid-cols-2 rounded-r-md rounded-l-md shadow-2xl filter saturate-200 brightness-90 contrast-45" style={{ backgroundImage: `url(${venue.prof_pic})` }}>
                        
                        <div className='bg-brand-yellow bg-opacity-50 bg-gradient-to-r from-brand-yellow rounded-r-lg rounded-l-lg pl-20 py-2 text-white contrast-200 backdrop-blur-sm brightness-100'>
                                <h1 className='font-black text-7xl'>{venue.venue_name}</h1>
                                <div className='info'>

                                    {/* <h2 className='text-4xl'>{venue.followers_list.length}</h2> */}
                                    <h2 className='text-4xl'>{venue.hours_of_operation}</h2>
                                    <h2 className='text-2xl'>{venue.phone_num}</h2>
                                    <h2 className='text-2xl'>{venue.street_address}</h2>
                                    <h2 className='text-2xl'>{venue.city}, {venue.state}</h2> 
                                    
                                    <h4>{venue.venue_type}</h4>
                                    <h4>{venue.venue_added_by}</h4>
                                    
                                    <button
                                    onClick={() =>follow()}
                                    className="bg-brand-red border-black text-white rounded-md p-2 mt-3" 
                                    > {followVenue ? 'Unfollow' : 'Follow'}    
                                    </button>
                                    <br/>
                                    <button onClick={() =>checkInVenue(venue.venue_id)}className='bg-brand-beau-blue border-black text-white rounded-md p-2 mt-3 font-bebas-neue'>Check-In</button>
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
                            <span class="px-3 bg-white text-xl font-bebas-neue text-brand-dark-blue">
                            {venue.venue_name} 's Updates
                            </span>
                        </div>
                    </div>

                <div className='px-8 mx-6 max-w-auto sm:px-6 lg:px-8 mb-4 shadow-md rounded-r-md rounded-l-md'>
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
                </div>       
        </div>
        

     )     
                
}

export default VenueProfile
  

