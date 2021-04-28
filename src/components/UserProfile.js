import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    } from 'react-router-dom';




function UserProfile({ token }) {
    // const token = props.location.state.token
    // const selectedUser = props.location.state.selectedUser
    // const setSelectedUser = props.location.state.setSelectedUser
    const [user, setUser] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [userFollow, setUserFollow] = useLocalStorageState(false)
    // const [likes, setLikes] = useLocalStorageState(false)

 let { userId } = useParams();


    useEffect(() => {
        axios.get(
            `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
            {
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
            console.log('resp', response)
            setUser(response.data)
            console.log('user', user)
            setAllPosts([...response.data.posts_by, ...response.data.posted_to_user])
        })}, [])

        console.log(allPosts)

        const handleFollow = (newThing) => {
            const isFollowing = newThing.detail === "User Followed"
            setUserFollow(isFollowing)
        }

        // const handleLike = (newThing) => {
        //     const isLiked = newThing.detail === "Is Liked"
        //     setUserFollow(isLiked)
        // }

        function follow() {
            axios
            .put(`http://tipsy-backend.herokuapp.com/users/${user.user_id}/`,
            {
            },
            {
                headers: { Authorization: `Token ${token}`},
            })
            .then((data) => {
                console.log('data', data)
                handleFollow(data.data)
            })
        }

        // function like() {
        //     axios
        //     .put(`http://tipsy-backend.herokuapp.com/users/${post.post_id}/`,
        //     {
        //     },
        //     {
        //         headers: { Authorization: `Token ${token}`},
        //     })
        //     .then((data) => {
        //         console.log('data', data)
        //         // handleLike(data.data)
        //     })
        // }



    return (
        <div>
                <div className="flex-wrap max-w-4xl mx-auto py-7 content-evenly bg-brand-yellow rounded-r-md rounded-l-md">
                
                <div className='px-20 pl-20 text-right text-brand-dark-blue '>
                <div className='inline-block px-20 image'>
                <img
                    className="inline-block rounded-full shadow-md h-32 w-36"
                    src={user.prof_pic}
                    alt=""
                />
                
                </div>
                <div className='inline-block'>
                    <h1 className='text-3xl font-black'>{user.first_name}</h1>
                    <h2 className='text-2xl'>{user.city}, {user.state}</h2>
                    <h2 className='text-2xl'>{user.bio_text}</h2>
                    {/* <h2 className='text-2xl'>Venues Following: {user.venues_following_list.length}</h2> */}
                    <button onClick={() =>follow()} className="bg-brand-red border-black text-white rounded-md p-2 mt-3">{userFollow ? 'Unfollow' : 'Follow'}</button>
                    
                
                </div>

            </div>
            </div>

                <div className="flex-wrap max-w-4xl mx-auto py-7 content-evenly text-brand-dark-blue">{user.first_name}'s Photos:</div>
                <div class="overflow-x-auto max-w-4xl mx-auto py-7 flex-wrap content-evenly h-30">THIS MIGHT BE IMAGE SCROLLQrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt</div>

                    <h2 class="font-bold max-w-4xl mx-auto pt-7 flex-wrap content-evenly text-brand-dark-blue">{user.first_name} 's Updates:</h2>


<div className="flex-wrap max-w-4xl py-2 mx-auto content-evenly overflow-y-auto">
    <ul className="divide-y divide-gray-200">
        {allPosts.map((post) => (
        <li className="py-4 h-20">
            <div className="flex space-x-3">
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{post.post_text}</h3>

                <ul className="text-sm text-gray-500">
                    <li className="flex">
                        <img className="w-4 h-4 rounded-full mr-2" src={post.post_author_pic}/>
                        {/* <Link 
                        onClick={() => setSelectedUser(post.post_author_id)} className="hover:text-brand-red mr-2">{post.post_author_username}</button> 
                        --> 
                        <Link className="hover:text-brand-red ml-2">{post.posted_to_username} {post.posted_to_venue_name}</button>
                         */}
                         </li>
                
                <li className="flex">
                    <a className="hover:text-brand-dark-blue text-brand-beau-blue inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    </a> 
                    {post.post_likers.length} likes
                    </li>
                    </ul> 

                </div>

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