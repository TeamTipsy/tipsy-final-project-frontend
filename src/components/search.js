import React from 'react'
import { useState, useEffect } from 'react'


function Search() {
    const [search, setSearch] = useState('')
    const handleChange = (event) => {
      setSearch(event.target.value)
    }
    return (
      <>
        <div className="mt-30">
        <input type="text" value={search} onChange={handleChange} className="m-3 border-2 border-black" />
        <button onClick={() =>console.log(search)} className="bg-black hover:bg-gray-500 text-white font-bold py-0.5 px-4">Search</button>
        </div>
      </>
    )
  }

export default Search 
