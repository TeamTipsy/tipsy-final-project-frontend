import React from 'react'
import { useState, useEffect } from 'react'
import { Router, Switch } from 'react-router'
import Cta from './Cta.js'
import Search from './search.js'


function Home() {
    return ( 
    <>
    <div className="mt-10 justify-center"> 
        <Search/>
        <Cta/>
    </div>
   
 
        </>
        )
}

export default Home