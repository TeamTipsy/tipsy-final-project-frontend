import React from 'react'
import { useState, useEffect } from 'react'
import User from './UserData.js'


    


function UserProfile() {
    const [users, setUsers] = useState(User)
    

    return (
        <div>
            {users.map((user) => (
            <h1>{user.username}</h1>



            ))}   
                
            
        
        
        </div>
    )
}




export default UserProfile