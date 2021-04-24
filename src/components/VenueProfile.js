
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
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

const updates = [
    {
        id: 1,
        date: '4d ago',
        body:'New spring IPAs! Come see us',
    },
  {
      id: 2,
     date: '4d ago',
     body:'Fall merch now 50% off!',
  }
]  

  const user = {
    name: 'Whitney Francis',
    email: 'whitney@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  }
  
  const comments = [
    {
      id: 1,
      name: 'Leslie Alexander',
      date: '4d ago',
      imageId: '1494790108377-be9c29b29330',
      body:
        'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
    },
    {
      id: 2,
      name: 'Michael Foster',
      date: '4d ago',
      imageId: '1519244703995-f4e0f30006d5',
      body:
        'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
    },
    {
      id: 3,
      name: 'Dries Vincent',
      date: '4d ago',
      imageId: '1506794778202-cad84cf45f1d',
      body:
        'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
    },
  ]

  const tabs = [
    { name: 'Updates', href: '#', current: false },
    { name: 'Public Feed', href: '#', current: false },
  ]

function VenueProfile() {
    const [venue, setVenue] = useState({})
     
     useEffect(() => {
         axios.get(`https://tipsy-backend.herokuapp.com/venues/fd182a28-63f5-4497-9db5-3f6ee8f7c724/`).then((response) => {
             console.log('resp', response)
             setVenue(response.data)
         
         })},[])
    
    return (
        <div>
            <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
            
                <div className="grid max-w-5xl grid-cols-2 py-2 mx-auto bg-brand-yellow rounded-r-md rounded-l-md">
                    
                    
                        <div className='pl-20 image'>
                            <img
                            className="rounded-full shadow-md h-auto-8 w-auto-8"
                            src={venue.prof_pic}
                            alt=""
                            />
                        </div>
                        <div className='pl-20 text-brand-dark-blue'>
                            <h1 className='font-black text-7xl'>{venue.venue_name}</h1>
                                <div className='info'>
                                <h2 className='text-4xl'>{venue.followers_num} Followers</h2>
                                <h2 className='text-xl'> {venue.venue_info.venue_address.street_address}</h2> 
                                <h2 className='text-xl'> {venue.venue_info.venue_address.city}, {venue.venue_info.venue_address.state}</h2> 
                                <h4>{venue.venue_type}</h4>
                                <button
                                type="button"
                                className="items-center w-24 p-3 text-white border border-transparent rounded-full shadow-sm bg-brand-red hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-200 w-200"
                                > Follow    
                                </button>
                                </div>
                        </div>


            </div>   
         </div>  
      
            <section aria-labelledby="notes-title">

                        <div className="max-w-5xl mx-auto bg-white shadow sm:rounded-lg sm:overflow-hidden ">
                            <div className="divide-y divide-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 id="notes-title" className="text-lg font-medium font-black text-brand-dark-blue">
                                Updates
                                </h2>
                            </div>
                            <div className="px-4 py-6 sm:px-6 ">
                                <ul className="space-y-8 overflow-y-auto">
                                {updates.map((update) => (
                                    <li key={update.id}>
                                    <div className="flex space-x-3">
                                        <div>
                                        <div className="mt-1 text-sm text-gray-700">
                                            <p>{update.body}</p>
                                        </div>
                                        <div className="mt-2 space-x-2 text-sm">
                                            <span className="font-medium text-gray-500">{update.date}</span>{' '}
                                            <span className="font-medium text-gray-500">&middot;</span>{' '}
                                            <button type="button" className="font-medium text-gray-900">

                                            Reply
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>
                            <div className="px-4 py-6 bg-gray-50 sm:px-6">
                            <div className="flex space-x-3">

                                <div className="flex-1 min-w-0">

                                <form action="#">
                                    <div>
                                    <label htmlFor="comment" className="sr-only">
                                        About
                                    </label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={3}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Add a note"
                                        defaultValue={''}
                                    />
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                    <a
                                        href="#"
                                        className="inline-flex items-start space-x-2 text-sm text-gray-500 group hover:text-gray-900"
                                    >
                                        
                                        
                                    </a>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Comment
                                    </button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
            <section aria-labelledby="notes-title">
                        <div className="max-w-4xl mx-auto bg-white shadow sm:rounded-lg sm:overflow-hidden ">
                            <div className="divide-y divide-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 id="notes-title" className="text-lg font-medium font-black text-brand-dark-blue">
                                Feed
                                </h2>
                            </div>
                            <div className="px-4 py-6 sm:px-6">
                                <ul className="space-y-8">
                                {comments.map((comment) => (
                                    <li key={comment.id}>
                                    <div className="flex space-x-3">
                                        <div className="flex-shrink-0">
                                        <img
                                            className="w-10 h-10 rounded-full"
                                            src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                                            alt=""
                                        />
                                        </div>
                                        <div>
                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-gray-900">
                                            {comment.name}
                                            </a>
                                        </div>
                                        <div className="mt-1 text-sm text-gray-700">
                                            <p>{comment.body}</p>
                                        </div>
                                        <div className="mt-2 space-x-2 text-sm">
                                            <span className="font-medium text-gray-500">{comment.date}</span>{' '}
                                            <span className="font-medium text-gray-500">&middot;</span>{' '}
                                            <button type="button" className="font-medium text-gray-900">
                                            Reply
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            </div>
                            <div className="px-4 py-6 bg-gray-50 sm:px-6">
                            <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="flex-1 min-w-0">
                                <form action="#">
                                    <div>
                                    <label htmlFor="comment" className="sr-only">
                                        About
                                    </label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={3}
                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Add a note"
                                        defaultValue={''}
                                    />
                                    </div>
                                    <div className="flex items-center justify-between mt-3">
                                    <a
                                        href="#"
                                        className="inline-flex items-start space-x-2 text-sm text-gray-500 group hover:text-gray-900"
                                    >
                                        
                                        
                                    </a>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Comment
                                    </button>
                                    </div>
                                </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                    </div>    
                )     
                
}

export default VenueProfile
  

