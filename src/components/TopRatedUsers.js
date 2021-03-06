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
            setTopUsers(response.data)
        })}, [])

    return (
        
    <div >
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
            <Link to={`/UserProfile/${topUser.user_id}`}
            className="text-md font-roboto font-md focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-lg font-black font-roboto text-black ">{topUser.username}</p>
            <p className='text-md font-roboto font-medium text-black'>{topUser.city}, {topUser.state}</p>
            </Link>
            </div>
        </div>
        ))}
    </div>
    </div>


    )
}

export default TopRatedUsers