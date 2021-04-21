import React from 'react'
import { useState, useEffect } from 'react'
import { Router, Switch } from 'react-router'
import Cta from './Cta.js'
import Search from './search.js'


function Home() {
    return ( 
    <>
    <div className="flex items-center justify-center">
    <Search/>
    </div>
    <Cta/>
        </>
        )
}

export default Home