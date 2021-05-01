import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


function AddVenue({token}) {
    const [addVenue, setAddVenue] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [tags, setTags] = useState ('')

    const handleAddedVenue = (event) => {
        setAddVenue(event.target.value)
        }
    
        const postVenue = (e) => {
            e.preventDefault()
            axios.post(
            "https://tipsy-backend.herokuapp.com/venues/", 
            {venue_name: addVenue,
                street_address: streetAddress,
                // tags: tags
    
            },{
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
            console.log('resp', response)
        
        })
        }
    return (
   <div>
<div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 " onSubmit={postVenue}>
          <label htmlFor="venue-name" className="block text-sm font-medium text-gray-700">
                Name of the venue:
              </label>
              <div className="mt-1">
              <input 
               type="text"
               id="venue_name"
               value={addVenue}
               required
               placeholder="Name of the venue"
               onChange={(e) => setAddVenue(e.target.value)}
              />
              </div>
            
               <div className="mt-1">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                Address:
                </label>
                <input 
                type="text"
                id="street_address"
                value={streetAddress}
                required
                placeholder="Address"
                onChange={(e) => setStreetAddress(e.target.value)}
                />
                {/* <div className="mt-1">
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                        Select the tags that best describes the atmosphere at this venue:
                        <input 
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        />

                    </label>

                </div> */}

               </div>
               <div>
              <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              
              >
                Add Venue
              </button>
            </div>  
                
          </form>

    </div>
   </div>     

    )

}

export default AddVenue

