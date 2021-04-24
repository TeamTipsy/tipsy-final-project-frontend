import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import User from './UserData.js'
import lodash from 'lodash'




function UserProfile({ token, selectedUser }) {
    const [user, setUser] = useState({})
    const people = [
        {
        name: 'poppy_boozin',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
        },
        // More people...
    ]
    const activityItems = [
        { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
        // More items...
    ]
    console.log('selectedUser', selectedUser)
    useEffect(() => {
        axios.get(
            `https://tipsy-backend.herokuapp.com/users/${selectedUser}/`, 
            {
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
            console.log('resp', response)
            setUser(response.data)
            console.log('user', user)
        })}, [])

        
    return (
        <div>
                <div className="flex-wrap max-w-4xl mx-auto py-7 content-evenly bg-brand-yellow rounded-r-md rounded-l-md">
                
                <div className='px-20 pl-20 text-right text-brand-dark-blue '>
                <div className='inline-block px-20 image'>
                <img
                    className="inline-block w-48 h-48 rounded-full shadow-md"
                    src={user.prof_pic}
                    alt=""
                />
                
                </div>
                <div className='inline-block'>
                    <h1 className='text-2xl font-black'>{user.first_name}</h1>
                    <h2 className='text-xl'>{user.city}, {user.state}</h2>
                    <h2 className='text-xl'>{user.bio_text}</h2>
                    <h2 className='text-xl'>Venues Following: {user.venues_following_num}</h2>
                    
                
                </div>
            
              
                
            </div>
            </div>

                <div className="flex-wrap max-w-4xl mx-auto py-7 content-evenly text-brand-dark-blue">{user.first_name}'s Photos:</div>
                <div class="overflow-x-auto max-w-4xl mx-auto py-7 flex-wrap content-evenly h-30">THIS MIGHT BE IMAGE SCROLLQrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt</div>

                    <h2 class="font-bold max-w-4xl mx-auto pt-7 flex-wrap content-evenly text-brand-dark-blue">{user.first_name} 's Feed:</h2>


<div className="flex-wrap max-w-4xl py-2 mx-auto content-evenly">
    <ul className="divide-y divide-gray-200">
        {activityItems.map((activityItem) => (
        <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
            <img className="w-6 h-6 rounded-full" src={user.prof_pic} alt="" />
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{user.username}</h3>
                <p className="text-sm text-gray-500">{activityItem.time}</p>
                </div>
                <p className="text-sm text-gray-500">
                Deployed {activityItem.project} ({activityItem.commit} in master) to {activityItem.environment}
                </p>
            </div>
            </div>
        </li>
        ))}
    </ul>
    </div>



        </div>

    )
}




export default UserProfile