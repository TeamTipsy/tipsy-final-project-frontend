
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
    const tabs = [
        { name: 'My Account', href: '#', current: false },
        { name: 'Company', href: '#', current: false },
        { name: 'Team Members', href: '#', current: true },
        { name: 'Billing', href: '#', current: false },
      ]

    return (
        
        <div>
            <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
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
                                </div> 
                        </div>
                </div>   
            </div>  
                    <br />
                    <br />
                <div className='px-8 mx-auto max-w-auto sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md'>
                <div key={venue.venue_id} className='text-brand-dark-blue font-black px-4 py-5 sm:px-6'>{venue.venue_name}'s Board</div>
                    <ul className="divide-y divide-gray-200"> 
                    {posts.map((post) => ( 
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
                        
                        </li>
                        
                    
                    ))}
                        <AddVenueComment token={token} handlePost={handlePost} venue_id={venue.venue_id}/>

                    </ul>
                    <br/>
                    <br/>
                    
                </div>    
                
        </div>
        

     )     
                
}

export default VenueProfile
  

