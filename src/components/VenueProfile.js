
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    } from 'react-router-dom';
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid'



function VenueProfile() {
    const [venue, setVenue] = useState([])
    const [posts, setPosts] = useState([]) 
  

     useEffect(() => {
         axios.get(`https://tipsy-backend.herokuapp.com/venues/654cf189-e39b-468a-a5d8-70614593e817/`).then((response) => {
             console.log('resp', response)
             setVenue(response.data)
             setPosts(response.data.posted_to_venue)
         
         })},[])
    
    return (
        
        <div>
            <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            
                <div className="max-w-5xl mx-auto py-2 px-8 grid grid-cols-2	bg-brand-yellow rounded-r-md rounded-l-md">
                    
                    
                        <div className='image pl-20'>
                            <img
                            className="h-auto-8 w-auto-8 shadow-md rounded-full"
                            src={venue.prof_pic}
                            alt=""
                            />
                        </div>
                        <div className='text-brand-dark-blue pl-20'>
                                <h1 className='text-7xl font-black'>{venue.venue_name}</h1>
                                <div className='info'>
                                    {/* <h2 className='text-4xl'>{venue.followers_list.length}</h2> */}
                                    <h2 className='text-4xl'>{venue.hours_of_operation}</h2>
                                    <h2 className='text-2xl'>{venue.phone_num}</h2>
                                    <h2 className='text-2xl'>{venue.street_address}</h2>
                                    <h2 className='text-2xl'>{venue.city}, {venue.state}</h2> 
                                    
                                    <h4>{venue.venue_type}</h4>
                                    <h4>{venue.venue_added_by}</h4>
                                    <button
                                    type="button"
                                    className="items-center w-24 p-3 border border-transparent rounded-full shadow-sm text-white bg-brand-red hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-200 w-200"
                                    > Follow    
                                    </button>
                                </div> 
                        </div>
                </div>   
            </div>  
                    <br />
                <div className='px-8 mx-auto max-w-5xl sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md'>
                    <ul className="divide-y divide-gray-200"> 
                    {posts.map((post) => ( 
                        <li className="py-4">
                        <div className="max-w-5xl flex space-x-3">
                            <img className="h-6 w-6 rounded-full" src={post.post_author_pic} alt="" />
                            <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-medium">{post.post_author_username}</h3>
                                <p className="text-sm text-gray-500">{post.post_date}</p>
                            </div>
                            <p className="text-sm text-gray-500">
                                {post.post_text}
                            </p> 
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>    
        </div>
        

     )     
                
}

export default VenueProfile
  

