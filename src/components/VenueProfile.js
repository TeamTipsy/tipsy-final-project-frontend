import React from 'react'
import { useState, useEffect } from 'react'
import Venues from './VenueData.js'

function VenueProfile() {
    const [venues, setVenue] = useState(Venues)
     console.log(venues)
    return (
        <div className='px-10 m-8'>
            {venues.map((venue) => {
            
            return <>
            <div className='venue-profile bg-brand-beau-blue m-8 px-60 py-40 rounded-r-md rounded-l-md'>
                
                <div className='text-black  pl-80'>
                    <h1 className='text-4xl font-black'>{venue.venue_name}</h1>
                    <h2 className='text-xl'>{venue.venue_info.street_address}</h2>
                    <h2 className='text-xl'>Followers:{venue.followers.length}</h2>
                    <h4>{venue.bdw_type}</h4>
                </div>
                
            </div>
      </>      
     })} 

                <div className='feed m-8 px-10 rounded-r-md rounded-l-md'>
                    <h1 className='text-brand-dark-blue text-3xl font-black'>Feed</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                    <br/>
                    <h2>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>
                    <br/>
                    <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </h2>
                    <br/>
                    <h2>Loren did it</h2>
                </div>
        </div>    
       
    )
}

export default VenueProfile

