import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import User from './UserData.js'
import lodash from 'lodash'




function FollowBtn({ token, selectedUser }) {
   const [follow, setFollow] = useState([])

    console.log('selectedUser', selectedUser)
 useEffect(() => {
        axios.put(
            `https://tipsy-backend.herokuapp.com/users/${selectedUser}/`, 
            {
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
            console.log('resp', response)
            
         
            
        })}, [])
   




    return (
            <>
            <button>Follow</button>
            </>
    )
}




export default FollowBtn