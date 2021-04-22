
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
         axios.get(`https://tipsy-backend.herokuapp.com/venues/33bb140e-842a-471a-a9f0-53b519e9f304/`).then((response) => {
             console.log('resp', response)
             setVenue(response.data)
         
         })},[])
    
    return (
        <div>
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
            
                <div className="max-w-5xl mx-auto py-2 grid grid-cols-2	bg-brand-yellow rounded-r-md rounded-l-md">
                    
                    
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
                                <h2 className='text-4xl'>{venue.followers_num} Followers</h2>
                                <h2 className='text-xl'>Hours - {venue.venue_info.hours_of_operation}</h2>
                                <h2 className='text-xl'> {venue.venue_info.venue_address.street_address}</h2>
                                <h2 className='text-xl'> {venue.venue_info.venue_address.city}, {venue.venue_info.venue_address.state}</h2>
                                <h4>{venue.venue_type}</h4>
                                <button
                                type="button"
                                className="items-center w-24 p-3 border border-transparent rounded-full shadow-sm text-white bg-brand-red hover:bg-brand-beau-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-200 w-200"
                                > Follow    
                                </button>
                                </div>
                        </div>
            </div>   
         </div>  
      
            <section aria-labelledby="notes-title">
                        <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden max-w-5xl mx-auto ">
                            <div className="divide-y divide-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 id="notes-title" className="text-lg font-medium text-brand-dark-blue font-black">
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
                                        <div className="mt-2 text-sm space-x-2">
                                            <span className="text-gray-500 font-medium">{update.date}</span>{' '}
                                            <span className="text-gray-500 font-medium">&middot;</span>{' '}
                                            <button type="button" className="text-gray-900 font-medium">
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
                            <div className="bg-gray-50 px-4 py-6 sm:px-6">
                            <div className="flex space-x-3">
                                <div className="min-w-0 flex-1">
                                <form action="#">
                                    <div>
                                    <label htmlFor="comment" className="sr-only">
                                        About
                                    </label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={3}
                                        className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Add a note"
                                        defaultValue={''}
                                    />
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                    <a
                                        href="#"
                                        className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                                    >
                                        
                                        
                                    </a>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                        <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden max-w-4xl mx-auto ">
                            <div className="divide-y divide-gray-200">
                            <div className="px-4 py-5 sm:px-6">
                                <h2 id="notes-title" className="text-lg font-medium text-brand-dark-blue font-black">
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
                                            className="h-10 w-10 rounded-full"
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
                                        <div className="mt-2 text-sm space-x-2">
                                            <span className="text-gray-500 font-medium">{comment.date}</span>{' '}
                                            <span className="text-gray-500 font-medium">&middot;</span>{' '}
                                            <button type="button" className="text-gray-900 font-medium">
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
                            <div className="bg-gray-50 px-4 py-6 sm:px-6">
                            <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="min-w-0 flex-1">
                                <form action="#">
                                    <div>
                                    <label htmlFor="comment" className="sr-only">
                                        About
                                    </label>
                                    <textarea
                                        id="comment"
                                        name="comment"
                                        rows={3}
                                        className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 rounded-md"
                                        placeholder="Add a note"
                                        defaultValue={''}
                                    />
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                    <a
                                        href="#"
                                        className="group inline-flex items-start text-sm space-x-2 text-gray-500 hover:text-gray-900"
                                    >
                                        
                                        
                                    </a>
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
  

