import React from 'react'
import { useState, useEffect } from 'react'
import Venues from './VenueData.js'

function VenueProfile() {
    const [venues, setVenue] = useState(Venues)
     console.log(venues)
    return (
        <div>
            {venues.map((venue) => {
            
            return <>
            <div className='venue-profile'>
                <div className='info-card'>
                    <h1>{venue.venue_name}</h1>
                    <h2>{venue.venue_info.street_address}</h2>

                    <h2>Followers:{venue.followers.length}</h2>
                    <h4>{venue.venue_type}</h4>
                </div>
                
            </div>
      </>      
     })} 

            
        </div>    
       
    )
}

export default VenueProfile

