import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserProfile from './UserProfile'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    } from 'react-router-dom';


function TopRatedUsers({ token }) {
    const [selectedUser, setSelectedUser] = useState(null)
    const [topUsers, setTopUsers] = useState([])
    useEffect(() => {
        axios.get(
            `https://tipsy-backend.herokuapp.com/users/`, 
            {
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
            console.log('resp', response)
            setTopUsers(response.data)
        })}, [])
        console.log('top', topUsers)

        if (selectedUser) {
            return <UserProfile selectedUser={selectedUser} setSelectedUser={setSelectedUser} token={token}/>

        }



    return (
        
    <div>
            <div className="grid grid-cols-1 gap-4 px-8 py-2 max-w-auto sm:grid-cols-2">
                {topUsers.map((topUser) => (
        <div
        key={topUser.email}
        className="relative flex items-center px-6 py-5 space-x-3 border rounded-lg shadow-md bg-brand-beau-blue hover:border-white focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
            <div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src={topUser.prof_pic} alt="" />
            </div>
            <div className="flex-1 min-w-0">
            <a onClick={() =>setSelectedUser(topUser.user_id)} to={{pathname: "/UserProfile/", state: { selectedUser:selectedUser, setSelectedUser:setSelectedUser, token:token } }}
            className="text-md font-md text-brand-dark-blue hover:text-brand-yellow focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p>{topUser.username}</p>

            <p className='text-sm text-gray-500'>{topUser.city}, {topUser.state}</p>
            </a>
            </div>
        </div>
        ))}
    </div>
    </div>


    )
}

export default TopRatedUsers