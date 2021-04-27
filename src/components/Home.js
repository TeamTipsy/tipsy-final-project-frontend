import React from 'react'
import { useState, useEffect } from 'react'
import { Router, Switch } from 'react-router'
import Search from './search.js'
import TopRatedVenues from './TopRatedVenues.js'
import TopRatedUsers from "./TopRatedUsers.js";


function Home({ token }) {
    return ( 
    <>
    <div className="justify-center mt-12 mx-16"> 
    <h1 className="mt-4 text-5xl font-semibold text-center text-brand-dark-blue">Happy Hour is Never Just An Hour</h1>
    <h2 className="mt-2 mb-8 text-xl text-center">Making it easier to hang out with the people you care about at your favorite brewery, winery, or distillery. </h2>
        <Search/>
        <h2 className="text-4xl font-bold mt-20 text-brand-dark-blue ">Top Rated Venues</h2>
        <TopRatedVenues 
        className="col-span-1"
        token={token}
        />
        <h2 className="mt-12 text-4xl font-bold text-brand-dark-blue ">Top Rated Users</h2>
       <TopRatedUsers 
       className="col-span-1"
       token={token}
       />
    </div>
   
 
        </>
        );
}

export default Home