import React from 'react'
import { useState, useEffect } from 'react'
import { Router, Switch, Link } from 'react-router-dom'
import Search from './search.js'
import TopRatedVenues from './TopRatedVenues.js'
import TopRatedUsers from "./TopRatedUsers.js";
import AddVenue from './AddVenue.js'


function Home({ token }) {
    return ( 
    <>
    <div className="justify-center mx-16 mt-12"> 
    <h1 className="mt-4 text-5xl font-semibold text-center text-brand-dark-blue">Happy Hour is Never Just An Hour</h1>
    <h2 className="mt-2 mb-8 text-xl text-center">Making it easier to hang out with the people you care about at your favorite brewery, winery, or distillery. </h2>
        <Search token={token}/>
        <h2 className="mt-20 text-4xl font-bold text-brand-dark-blue ">Top Rated Venues</h2>
        <TopRatedVenues 
        className="col-span-1"
        token={token}
        />
        <h2 className="mt-12 text-4xl font-bold text-brand-dark-blue" style={token ? {} : {display: 'none'}}>Top Rated Users</h2>
       <TopRatedUsers
       className="col-span-1"
       token={token}
       />
    <Link style={token ? {} : {display: 'none'}} to="/AddVenue">Add Venue</Link>
    </div>
   
 
        </>
        );
}

export default Home