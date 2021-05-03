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
        <Search/>
        <h2 className="mt-20 text-4xl font-bold text-brand-dark-blue ">Top Rated Venues</h2>
        <TopRatedVenues 
        className="col-span-1"
        token={token}
        />
        <h2 className="mt-12 text-4xl font-bold text-brand-dark-blue ">Top Rated Users</h2>
       <TopRatedUsers 
       className="col-span-1"
       token={token}
       />
    <button className="inline-flex items-center content-center px-4 py-2 pl-2 pr-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm p15 bg-brand-yellow hover:bg-brand-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    <Link to="/AddVenue">Add Venue</Link>
    </button>
    </div>
   
 
        </>
        );
}

export default Home