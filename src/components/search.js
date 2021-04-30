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


function Search() {
    const [search, setSearch] = useState('')
    const [endpoint, setEndpoint] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const doSearch = (search) => {
      axios.get(
          `https://tipsy-backend.herokuapp.com/${endpoint}/?search=${search}`, 
          {
          }).then((response) => {
          console.log('resp', response)
          setSearchResults([...response.data])
      })}

    const handleChange = (event) => {
      setSearch(event.target.value)
    }

    const handleEndpoint = (event) => {
      setEndpoint(event.target.value)
      console.log(endpoint)
    }


  return (
    <>
      <div className="flex h-12 lg:mx-72 sm:mx-12">
      <input type="text" value={search} onChange={handleChange} className="w-full h-12 pl-4 mr-3 border-2 rounded-full focus:outline-none focus:border-indigo-500 border-brand-beau-blue" placeholder="Find a brewery, winery, or distillery" />
      <button onClick={() => doSearch(search)} className="px-3 text-sm font-medium leading-4 text-white border border-transparent rounded-full focus:outline-none focus:border-indigo-500 h-10px bg-brand-red hover:bg-brand-yellow">Search</button>
      </div>
      <label for="search" className="h-auto ml-2"></label>
      <form name="searchfilter" id="search" className="flex h-6 mt-3 mr-3">
        <input onChange={handleEndpoint} type="radio" value="users"  className="p-4 mr-1 focus:outline-none focus:border-indigo-500" checked={endpoint === 'users'}/>
        <div>{'users'}</div>
        <input onChange={handleEndpoint} type="radio" value="venues" className="mr-1 focus:outline-none focus:border-indigo-500" checked={endpoint === 'venues'}/>
        {'venues'}
      </form> 
      {searchResults && searchResults.length > 0 ? (
        <Redirect
          to={{
            pathname: "/SearchResults/",
            state: { searchResults: searchResults, search:search, endpoint: endpoint }
          }}
        />
      ) : (<div></div>)}
    </>
  )
}

export default Search 
