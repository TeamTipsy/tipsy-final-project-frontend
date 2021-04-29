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
      <input type="text" value={search} onChange={handleChange} className="w-full h-12 pl-4 mr-3 border-2 rounded-full border-brand-beau-blue" placeholder="Find a drink" />
      <button onClick={() => doSearch(search)} className="px-3 text-sm font-medium leading-4 text-white border border-transparent rounded-lg h-10px bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
      </div>
      <label for="search" className="h-auto ml-2"></label>
      <form name="searchfilter" id="search" className="mr-3 mt-3 h-6 flex">
        <input onChange={handleEndpoint} type="radio" value="users"  className="mr-1 p-4" checked={endpoint === 'users'}/>
        <div>{'users'}</div>
        <input onChange={handleEndpoint} type="radio" value="venues" className="mr-1" checked={endpoint === 'venues'}/>
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
