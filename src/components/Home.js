import React from 'react'
import { useState, useEffect } from 'react'
import { Router, Switch, Link } from 'react-router-dom'
import Search from './search.js'
import TopRatedVenues from './TopRatedVenues.js'
import TopRatedUsers from "./TopRatedUsers.js";
import AddVenue from './AddVenue.js'


function Home({ token }) {
    return ( 
    <div className="pb-20">
    <div className="justify-center mx-16 mt-12"> 
    <h1 className="mt-4 text-5xl font-semibold text-center text-brand-dark-blue font-bebas-neue">Happy Hour is Never Just An Hour.</h1>
    <h2 className="mt-2 mb-8 text-xl text-center font-bebas-neue">Making it easier to hang out with the people you care about at your favorite brewery, winery, or distillery. </h2>
        <Search token={token}/>
        <h2 className="mt-16 ml-10 text-4xl font-bold text-brand-dark-blue font-bebas-neue">Top Venues</h2>
        <TopRatedVenues 
        className="col-span-1"
        token={token}
        />
        <h2 className="mt-12 ml-10 text-4xl font-bold text-brand-dark-blue font-bebas-neue" style={token ? {} : {display: 'none'}}>Top Users</h2>
       <TopRatedUsers
       className="col-span-1 mb-20"
       token={token}
       />
    </div>
   
    <Link style={token ? {} : {display: 'none'}} to="/AddVenue" className="flex px-12 py-4 w-40 ml-24 mt-10 bg-brand-red rounded-md text-white font-bebas-neue hover:bg-brand-yellow">Add Venue</Link>
        </div>
        );
}

export default Home