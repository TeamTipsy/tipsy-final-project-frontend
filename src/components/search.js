import React from 'react'
import { useState, useEffect } from 'react'


function Search() {
    const [search, setSearch] = useState('')
    const handleChange = (event) => {
      setSearch(event.target.value)
    }
    return (
      <>
        <div className="flex items-center justify-center w-6/12 mt-30">
        <input type="text" name="search" value={search} onChange={handleChange} className="justify-center w-2/5 m-3 border-2 rounded-md border-brand-beau-blue" placeholder="Find a drink" />
        <button onClick={() =>console.log(search)} className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
        </div>
      </>
    )
  }

export default Search 
