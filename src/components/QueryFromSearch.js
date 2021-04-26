import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    BrowserRouter,
    } from 'react-router-dom';
import Search from './search.js'
import { useState, useEffect } from 'react'
import VenueProfile from './VenueProfile'

export default function QueryFromSearch() {
    const venue = venue;
    const venueaddress = venue.venue_info.venue_address.street_address.map(addressLine => <p key={venue.id + addressLine}>{addressLine}</p>);

    return (
        <div className="Venue-return">
            <VenueProfile />
            <img src={venue.prof_pic} alt='venue-pic' />
            <div className="result">
                <h2 className="Venue-name">{venue.name}</h2>
            </div>
            <div className="details">
                <p>{venue.phone_num}</p>
                {venueaddress}
            </div>
        </div>
    )
}