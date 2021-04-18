import React from 'react'
import { useState, useEffect } from 'react'
import User from './UserData.js'
import lodash from 'lodash'




function UserProfile() {
    const [users, setUsers] = useState(User)
    

    return (
        <div>
            {users.map((user) => {

                return <>
                    <div>{user.prof_pic}</div>
                    <h1>{user.username}</h1>

                       <div>{user.location_info.country}</div>
                       <div>{user.bio_text}</div>
                       <h2 class="font-bold">{user.username}'s Feed:</h2>
                       
                       </>

                    
})}   


        </div>

    )
}




export default UserProfile