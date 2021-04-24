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
            return <UserProfile selectedUser={selectedUser}/>
            // if a category is selected render questions 
            //sending questions the selected category
        }


    return (
        <>
        {topUsers.map((topUser) => {
            return <div className=''>
                <button 
                    // to={{ pathname:`/UserProfile`, state:{selectedUser: topUser.user_id} }}
                // to={{ pathname:`/Answers/`, state: {selectedQuestion: question} 
                onClick={() =>setSelectedUser(topUser.user_id)}
                className="text-3xl text-brand-dark-blue hover:text-brand-yellow">
                {topUser.username}
                </button>
                </div> 
                
        })}
</>

    )
}

export default TopRatedUsers