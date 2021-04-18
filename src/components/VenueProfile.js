import React from 'react'
import { useState, useEffect } from 'react'
import Venue from './VenueData'

function VenueProfile() {
    const [venues, setVenue] = useState(Venue)
    
    return (
        <div className='venue-profile'>
            {venues.map((venue) => (
            
            <div className='info-card'>
                <h1>{venue.venue_name}</h1>
                <h2>{venue.venue_info.street_address}</h2>
                <h2>{venue.venure_info.hours_of_operation}</h2>
                <h2>{venue.venue_info.follows_count}</h2>
                <h4>{venue.venue_type}</h4>
                
            </div>
            
            ))} 

            <div className='venue-feed'>
                <h2>Feed</h2>
            </div>  
        </div>    
       
    )
}

export default VenueProfile

