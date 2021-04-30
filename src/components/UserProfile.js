import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import AddUserComment from './AddUserComment.js'
import DeleteUserComment from './DeleteUserComment.js'
import {
    Link,
    useParams,
    } from 'react-router-dom';




function UserProfile({ token }) {
    const [user, setUser] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState('')
    const [userFollow, setUserFollow] = useLocalStorageState('follows', false)

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
            const allPostsTest = [...response.data.posts_by, ...response.data.posted_to_user].filter((v,i,a)=>a.findIndex(t=>(t.post_id === v.post_id))===i)
            setAllPosts(allPostsTest)
        })}, [])

        const handleFollow = (newThing) => {
            const isFollowing = newThing.detail === "User Followed"
            setUserFollow(isFollowing)
        }

        const handlePost = (newPosts) => {
            setAllPosts([...allPosts, newPosts])
        } 

        const handleLikeClick = (post_id) => {
            if (post_id) {
                like(post_id)
            }
        }

        function follow() {
            axios
            .put(`http://tipsy-backend.herokuapp.com/users/${user.user_id}/`,
            {},
            {
                headers: { Authorization: `Token ${token}`},
            })
            .then((data) => {
                handleFollow(data.data)
            })
        }

        console.log('allpost', allPosts)

        function like(post) {
            axios
            .put(`http://tipsy-backend.herokuapp.com/posts/${post}/`,
            {},
            {
                headers: { Authorization: `Token ${token}`},
            })
            .then((data) => {
                console.log('like endpoint', data)
                if (data.data.detail === 'Post Liked' || data.data.detail === 'Post Unliked') {
                    axios.get(
                        `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
                        {
                            headers: { Authorization: `Token ${token}`}
                        }).then((response) => {
                        setAllPosts([...response.data.posts_by, ...response.data.posted_to_user])
                    })
                }
            })
        }

    return (
        <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
                <div className="max-w-auto py-2 px-8 grid grid-cols-2 rounded-r-md rounded-l-md shadow-2xl filter saturate-200 brightness-90 contrast-45" style={{ backgroundImage: `url(${user.prof_pic})` }}>
                
                <div className='flex bg-brand-yellow bg-opacity-50 bg-gradient-to-r from-brand-yellow rounded-r-lg rounded-l-lg pl-20 py-2 text-white contrast-200 backdrop-blur-sm brightness-100'>
                <div className='inline-block px-20 image'>
                {/* <img
                    className="inline-block rounded-full shadow-md h-auto w-auto"
                    src={user.prof_pic}
                    alt=""

                /> */}
                

                </div>
                <div className='inline-block mr-2'>
                    <h1 className='text-3xl font-black'>{user.first_name}</h1>
                    <h2 className='text-2xl'>{user.city}, {user.state}</h2>
                    <h2 className='text-2xl'>{user.bio_text}</h2>
                    {/* <h2 className='text-2xl'>Venues Following: {user.venues_following_list.length}</h2> */}
                    <button onClick={() =>follow()} className="bg-brand-red border-black text-white rounded-full p-2 mt-3 focus:outline-none focus:border-indigo-500">{userFollow ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>
            </div>


                <div className="flex-wrap max-w-auto mx-6 py-7 content-evenly text-brand-dark-blue">{user.first_name}'s Photos:</div>
                <div class="overflow-x-auto max-w-auto mx-6 py-7 flex-wrap content-evenly h-30">THIS MIGHT BE IMAGE SCROLLQrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt</div>

                    <h2 class="font-bold max-w-auto mx-6 pt-7 flex-wrap content-evenly text-brand-dark-blue">{user.first_name} 's Updates:</h2>

               


<div className="px-8 mx-6 max-w-auto sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md">
    <ul className="divide-y divide-gray-200">
        {allPosts.map((post) => (
        <li className="py-4 h-20">
            <div className="flex space-x-3">
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{post.post_text}</h3>

                <ul className="text-sm text-gray-500">
                    <li className="flex mb-2">
                        <img className="w-4 h-4 rounded-full mr-2" src={post.post_author_pic}/>
                        <Link 
                        to={`/UserProfile/${post.post_author_id}`} className="hover:text-brand-red mr-2">{post.post_author_username}</Link> 
</li>
                
                <li className="flex">
                    <a onClick={() => handleLikeClick(post.post_id)} className="hover:text-brand-dark-blue text-brand-beau-blue inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    
                    </svg>
                    
                    </a> 
                    <div>{post.post_likers.length} </div>
                    
                  
                    <DeleteUserComment postId={post.post_id} token={token} selectedPost={selectedPost} />
   
                    </li>
                    </ul> 

                </div>

            </div>
            </div>
        </li>

        ))}
            <AddUserComment token={token} handlePost={handlePost} user_id={user.user_id}/>       

    </ul>
    </div>



        </div>

    )
}




export default UserProfile