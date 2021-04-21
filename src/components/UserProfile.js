import React from 'react'
import { useState, useEffect } from 'react'
import User from './UserData.js'
import lodash from 'lodash'




function UserProfile() {
    const [users, setUsers] = useState(User)
    const people = [
        {
          name: 'Lindsay Walton',
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
                <div className="sm:flex bg-brand-beau-blue mx-20 p-20">
                <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                <svg
                    className="h-16 w-16 border border-gray-300 bg-white text-gray-300"
                    preserveAspectRatio="none"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 200 200"
                    aria-hidden="true"
                >
                    <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
                </svg>
                </div>
                <div>
                <h4 className="text-lg font-bold">{user.username}</h4>
                <div className="mt-1">
                    <ul>
                        <li>{user.location_info.country}</li>
                        <li>{user.bio_text}</li>
                        <li><b>Venues Followed:</b>{user.bdws_following.length}</li>

                    </ul>
                </div>
                </div>
                </div>

                <div className="mx-20 text-brand-dark-blue">{user.user_name}'s Photos</div>
                <div class="overflow-x-auto m-20 h-20">THIS MIGHT BE IMAGE SCROLLQrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt</div>

                    <h2 class="font-bold mx-20 text-brand-dark-blue">{user.username}'s Feed:</h2>
                    </>
})}   

<div className="mx-20">
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