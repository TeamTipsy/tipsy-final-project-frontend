import React from 'react'
import { useState, useEffect } from 'react'


function Search() {
    const [search, setSearch] = useState('')
    const handleChange = (event) => {
      setSearch(event.target.value)
    }
    return (
      <>
        <div className="mt-30 w-6/12 flex items-center justify-center">
        <input type="text" value={search} onChange={handleChange} className="m-3 border-2 border-brand-beau-blue rounded-md w-6/12" />
        <button onClick={() =>console.log(search)} className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
        </div>
      </>
    )
  }

export default Search 
