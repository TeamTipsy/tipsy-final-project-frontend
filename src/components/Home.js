import React from 'react'
import { useState, useEffect } from 'react'
import { Router, Switch } from 'react-router'
import Cta from './Cta.js'
import Search from './search.js'
import TopRatedVenues from './TopRatedVenues.js'
import TopRatedUsers from "./TopRatedUsers.js";


function Home() {
    return ( 
    <>
    <div className="justify-center mt-16"> 
        <Search/>
        <h2 className="text-xl mt-28 ">Top Rated Venues</h2>
        <TopRatedVenues className="col-span-1"
        />
        <h2 className="mt-12 text-xl">Top Rated Users</h2>
        <TopRatedUsers className="col-span-1"
        />
    </div>
   
 
        </>
        )
}

export default Home