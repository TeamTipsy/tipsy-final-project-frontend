import React from 'react'
import { useState, useEffect } from 'react'


function Search() {
    const [search, setSearch] = useState('')
    const handleChange = (event) => {
      setSearch(event.target.value)
    }
    return (
      <>
        <input type="text" value={search} onChange={handleChange} className="border-black border-2 m-3" />
        <button onClick={() =>console.log(search)} className="bg-black hover:bg-gray-500 text-white font-bold py-0.5 px-4">Search</button>
      </>
    )
  }

export default Search 
