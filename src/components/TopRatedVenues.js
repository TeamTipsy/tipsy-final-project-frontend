import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import VenueProfile from './VenueProfile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    } from 'react-router-dom';

function TopRatedVenues({ token }) {
    const [topVenues, setTopVenues] = useState([])
    const [selectedVenue, setSelectedVenue] = useState(null)


    useEffect (() => {
        axios.get(`https://tipsy-backend.herokuapp.com/venues/`)
        .then((response) => {
            setTopVenues(response.data)
        })
    }, [])
    console.log('venues', topVenues)

    // if (selectedVenue) {
    //     return <VenueProfile selectedVenue={selectedVenue} token={token} setSelectedVenue={setSelectedVenue}/>
    // }


    console.log('token', token)

  return (
      <div>
            <div className="max-w-auto py-2 px-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {topVenues.map((topVenue) => (
        <div
          key={topVenue.email}
          className="relative rounded-lg border bg-brand-beau-blue px-6 py-5 shadow-md flex items-center space-x-3 hover:border-white focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={topVenue.prof_pic} alt="" />
          </div>
          <div className="flex-1 min-w-0">
            <Link to={`/VenueProfile/${topVenues.venue_id}`}  className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{topVenue.venue_name}</p>
              <p className="text-sm text-gray-500 truncate">{topVenue.venue_type}</p>
              <p className='text-sm text-gray-500'>{topVenue.city}, {topVenue.state}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
       </div>
   ) 
}

export default TopRatedVenues