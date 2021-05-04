import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


function AddVenue({token}) {
    const [addVenue, setAddVenue] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [email, setEmail] = useState('')
    const [hoursOfOperation, setHoursOfOperation] = useState('')
    const [venueURL, setVenueURL] = useState('')
    // const [tag1, setTag1] = useState()
    // const [tag2, setTag2] =useState()

    const handleAddedVenue = (event) => {
        setAddVenue(event.target.value)
        }
    
        const postVenue = (e) => {
            e.preventDefault()
            axios.post(
            "https://tipsy-backend.herokuapp.com/venues/", 
            {   venue_name: addVenue,
                street_address: streetAddress,
                city: city,
                tags: [],
                hours_of_operation: hoursOfOperation,
                email: email,
                state: state,
                web_url: venueURL,
                
    
            },{
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
        
        })
        }
    return (
<div className="flex items-center justify-center min-h-screen px-4 py-8">
<div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <h1 className="pt-8 text-3xl font-bold text-center text-brand-dark-blue">Don't See a Venue that Should Be Here?</h1>
        <h2 className="pb-8 text-lg font-bold text-center">Add it here!</h2>
          <form className="space-y-6 " onSubmit={postVenue}>
          <label htmlFor="venue-name" className="block text-sm font-bold text-gray-700">
                Name of the venue:
              </label>
            <div className="mt-1">
            <input 
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                id="venue_name"
                value={addVenue}
                required
                placeholder="Name of venue"
                onChange={(e) => setAddVenue(e.target.value)}
                /> 
          </div>
              <div className="mt-1">
                <label htmlFor="street_address" className="block text-sm font-bold text-gray-700">
                Address:
                </label>
                <input 
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                id="street_address"
                value={streetAddress}
                required
                placeholder="Address"
                onChange={(e) => setStreetAddress(e.target.value)}
                />

                <div className="mt-1">
                <label htmlFor="street_address" className="block text-sm font-bold text-gray-700">
                City:
                </label>
                <input 
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                id="city"
                value={city}
                required
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                />
                </div>
                <div className="mt-1">
                <label htmlFor="state" className="block text-sm font-bold text-gray-700">
                State:
                </label>
                <input 
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                id="state"
                value={state}
                required
                placeholder="Days and hours of operations"
                onChange={(e) => setState(e.target.value)}
                />
                </div>
                <div className="mt-1"> 
                <label htmlFor="hours-of-operation" className="block text-sm font-bold text-gray-700">
                Hours of operations:
                </label>
                <input 
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                id="hours_of_operation"
                value={hoursOfOperation}
                required
                placeholder="Days and hours of operations"
                onChange={(e) => setHoursOfOperation(e.target.value)}
                />
                </div>
                <div className="mt-1"> 
                <label htmlFor="email" className="block text-sm font-bold text-gray-700">
                Email address:
                </label>
                <input 
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="text"
                id="email"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="mt-1">
                <label htmlFor="venue-URL" className="block text-sm font-bold text-gray-700">
                Website address:
                </label>
                <input 
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type="url"
                id="venue-URL"
                value={venueURL}
                placeholder="Venue website"
                onChange={(e) => setVenueURL(e.target.value)}
                />
                </div>
                
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
                className="flex justify-center w-full px-4 py-2 text-sm font-bold text-white border border-transparent rounded-md shadow-sm bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              
              >
                Add Venue
              </button>
            </div>  
                
          </form>
    </div>
  </div>     
)}

export default AddVenue



// city: ["This field is required."]
// email: ["This field is required."]
// hours_of_operation: ["This field is required."]
// state: ["This field is required."]
// tags: ["This field is required."]
// web_url: ["This field is required."]
