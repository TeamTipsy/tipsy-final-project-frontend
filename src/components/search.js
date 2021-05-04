import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import SearchResults from './SearchResults.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  } from 'react-router-dom';


function Search({ token }) {
    const [search, setSearch] = useState('')
    const [endpoint, setEndpoint] = useState('venues')
    const [searchResults, setSearchResults] = useState(null)

    const doSearch = (search) => {
      if (search) {
        axios.get(
            `https://tipsy-backend.herokuapp.com/${endpoint}/?search=${search}`, 
            {
            }).then((response) => {
            setSearchResults([...response.data])
        })
      }
    }

    const handleChange = (event) => {
      setSearch(event.target.value)
    }

    const handleEndpoint = (event) => {
      setEndpoint(event.target.value)
    }



  return (
    <>
        <form style={token ? {} : {display: 'none'}} name="searchfilter" id="search" className="flex justify-center w-auto mb-2">
        <label className="text-brand-dark-blue font-bold mr-2">search by:</label>
        <input onChange={handleEndpoint} type="radio" value="users"  className="p-4 mr-1 mt-1.5 focus:outline-none focus:border-indigo-500" checked={endpoint === 'users'}/>
        <label className="mr-2">{'users'}</label>
        <input onChange={handleEndpoint} type="radio" value="venues" className="mr-1 mt-1.5 focus:outline-none focus:border-indigo-500 align-middle" checked={endpoint === 'venues'}/>
        <label>{'venues'}</label>
      </form> 
      <div className="flex h-12 lg:mx-72 sm:mx-12">
      <input type="text" value={search} onChange={handleChange} className="w-full h-12 pl-4 mr-3 border-2 rounded-full focus:outline-none focus:border-indigo-500 border-brand-beau-blue" placeholder="Find a brewery, winery, or distillery" />
      <button onClick={() => doSearch(search)} className="px-3 text-sm font-medium leading-4 text-white border border-transparent rounded-md font-bebas-neue focus:outline-none focus:border-indigo-500 h-10px bg-brand-red hover:bg-brand-yellow">Search</button>
      </div>
      <label for="search" className="h-auto ml-2"></label>

      {searchResults && searchResults.length ? (
        <Redirect
          to={{
            pathname: "/SearchResults/",
            state: { searchResults: searchResults, search:search, endpoint: endpoint, token: token }
          }}
        />
      ) : searchResults && searchResults.length === 0 && token ? (<div className="font-bold text-brand-dark-blue text-2xl mt-4">Sorry, your search for "{search}" did not yield any results.</div>) : searchResults && searchResults.length === 0 && !token ? (<div className="font-bold text-brand-dark-blue text-2xl mt-4">Sorry, your search for "{search}" did not yield any results for venues. Please log in to search through users.</div>) : (<div></div>)}
    </>
  )
}

export default Search 
