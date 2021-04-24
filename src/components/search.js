import React from 'react'
import { useState, useEffect } from 'react'


function Search() {
    const [search, setSearch] = useState('')
    const handleChange = (event) => {
      setSearch(event.target.value)
    }
    return (
      <>

<div className="lg:mx-72 sm:mx-12 flex h-12">
        <input type="text" value={search} onChange={handleChange} className="w-full border-2 mr-3 border-brand-beau-blue rounded-full h-12 pl-4" placeholder="Find a drink" />
        <button onClick={() =>console.log(search)} className="px-3 h-10px text-sm font-medium leading-4 text-white border border-transparent rounded-lg bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
        
        </div> 

      </>
    )
  }

export default Search 
