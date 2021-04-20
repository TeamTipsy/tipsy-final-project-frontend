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
                    <h2>{venue.venue_info.street_address}</h2>
                    <h2>Followers:{venue.followers.length}</h2>
                    <h4>{venue.bdw_type}</h4>
                </div>
                
            </div>
      </>      
     })} 

            
        </div>    
       
    )
}

export default VenueProfile

