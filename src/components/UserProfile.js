import React from 'react'
import { useState, useEffect } from 'react'
import User from './UserData.js'
import lodash from 'lodash'




function UserProfile() {
    const [users, setUsers] = useState(User)
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
      
    

    return (
        <div>
            {users.map((user) => {

                return <>
                <div className="max-w-4xl mx-auto py-7 flex-wrap content-evenly	bg-brand-beau-blue rounded-r-md rounded-l-md">
                
                <div className='text-black text-right px-20 pl-20 '>
                <div className='image px-20 inline-block'>
                <img
                    className="inline-block h-48 w-48 shadow-md rounded-full"
                    src="https://onthegrid.city/imager/s3_amazonaws_com/onthegrid.city/assets/grid/durham/downtown-durham/ponysaurus-brewing/Ponysaurus-11_299006722e285f47655d17d1c9136337.jpg"
                    alt=""
                />
                
                </div>
                <div className='inline-block'>
                    <h1 className='text-2xl font-black'>{user.username}</h1>
                    <h2 className='text-xl'>{user.location_info.country}</h2>
                    <h2 className='text-xl'>{user.bio_text}</h2>
                    <h2 className='text-xl'>Venues Following:{user.bdws_following.length}</h2>
                    
                  
                </div>
               
                {/* should there be a follow button? */}
                
               </div>
            </div>

                <div className="max-w-4xl mx-auto py-7 flex-wrap content-evenly text-brand-dark-blue">{user.username}'s Photos:</div>
                <div class="overflow-x-auto max-w-4xl mx-auto py-7 flex-wrap content-evenly h-30">THIS MIGHT BE IMAGE SCROLLQrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt</div>

                    <h2 class="font-bold max-w-4xl mx-auto pt-7 flex-wrap content-evenly text-brand-dark-blue">{user.username} 's Feed:</h2>
                    </>
})}   

<div className="max-w-4xl mx-auto py-2 flex-wrap content-evenly">
    <ul className="divide-y divide-gray-200">
        {activityItems.map((activityItem) => (
        <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
            <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
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