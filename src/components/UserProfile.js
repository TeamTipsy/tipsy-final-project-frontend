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
    // const [allPosts, setAllPosts] = useState([])
    const [postsFromUser, setPostsFromUser] = useState([])
    const [poststToUser, setPostsToUser] = useState([])
    const [userFollow, setUserFollow] = useLocalStorageState('follows', false)
    let { userId } = useParams();

    useEffect(() => {
        axios.get(
            `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
            {
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
            setUser(response.data)
            // const allPostsTest = [...response.data.posts_by, ...response.data.posted_to_user].filter((v,i,a)=>a.findIndex(t=>(t.post_id === v.post_id))===i)
            // setAllPosts(allPostsTest)
            setPostsFromUser([...response.data.posts_by])
            setPostsToUser([...response.data.posted_to_user])
        })
        }, [])

        const handleFollow = (newThing) => {
            const isFollowing = newThing.detail === "User Followed"
            setUserFollow(isFollowing)
        }

        const reRenderPosts = () => {
            axios.get(
                `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
                {
                    headers: { Authorization: `Token ${token}`}
                }).then((response) => {
                    setPostsFromUser([...response.data.posts_by])
                    setPostsToUser([...response.data.posted_to_user])
                }
            )
        }

        // const handlePost = (newPosts) => {
        //     setAllPosts([...allPosts, newPosts])
        // } 

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
                    // axios.get(
                    //     `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
                    //     {
                    //         headers: { Authorization: `Token ${token}`}
                    //     }).then((response) => {
                    //     setAllPosts([...response.data.posts_by, ...response.data.posted_to_user])
                    // })
                    reRenderPosts()
                }
            })
        }

    return (
        <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">

                <div className="px-8 mx-6 max-w-auto sm:px-6 lg:px-8 grid grid-cols-2">
                
                <div className='pl-2 image'>
                    <img
                        className="rounded-r-md rounded-l-md shadow-md h-auto w-auto"
                        src={user.prof_pic}
                        alt=""
                    /> 
                </div>
                <div className='px-8 mx-6 mr-2 text-black'>
                    <h1 className='text-3xl font-black'>{user.first_name}</h1>
                    <h2 className='text-2xl'>{user.city}, {user.state}</h2>
                    <h2 className='text-2xl'>{user.bio_text}</h2>

                          {user.venues_following_list && user.venues_following_list.length ? 
                        <h2 className='text-2xl'>Venues Following: {user.venues_following_list.length}</h2> 
                        : <div></div>}
                    <button onClick={() =>follow()} className="bg-brand-red border-black text-white font-bebas-neue rounded-md p-2 mt-3 focus:outline-none focus:border-indigo-500">{userFollow ? 'Unfollow' : 'Follow'}</button>
                </div>
            </div>
            <br/>
            <br/>
                <div class="relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-brand-yellow"></div>
                    </div>
                    <div class="relative flex justify-center">
                        <span class="px-3 bg-white text-xl font-bebas-neue text-brand-dark-blue">
                        {user.first_name}'s Photos
                        </span>
                    </div>
                </div>
                {/* <div className="flex-wrap max-w-auto mx-6 py-7 content-evenly text-brand-dark-blue font-bebas-neue text-xl">{user.first_name}'s Photos</div> */}
                <div class="overflow-x-auto max-w-auto mx-6 py-7 flex-wrap content-evenly h-30 shadow-md rounded-r-md rounded-l-md">THIS MIGHT BE IMAGE SCROLLQrLmmW69vMQDtCOg48jidqvvWD2FzDt7I7bBoDc98SRP5OwvOScVYbRzFdfp540eF5v1pjogYkyI8NXqu4wY8chgsXIV0LU7XQKWJ98wLaBSHWiBhvkEU1T3sd6KEFo53CLjVjIz8UvZajb8sbsu62xTsF9cRtFdwEvusq6zJHvedymDCUkY6qXHsuL6fOmHo4KKMurZuJZrK3plRPUaI8XVciz8dVq5CEUXjMrTcB76H1w90CnkRER3nYjs3suTa3223xs8aL97m0peQfjlvKbF8HcmQG5mHEitCn1QZnbMZUK3zE9AIjwcVXP7R9V4fw2A93cZD7wj333X6aaiHZdkkTPtst0u05KSob5c0ZuKQi4D3V395NfFKKr8cR27jmpB7dqK2GiWXeOQUFcjmFVwlHWSlH8ZdUoVJpXf1xL6CRUxwZP4EhBbqQZaJm26ijWII6LRxJ5eVU9Y7KKvQsUeX5BawtgeMWRmjeCwQadTLTQG8gLpi2DvGpMtPWCdqHgEglVSB1ZlDrjEEsXYrNx1IOY0053K3pWNaR1ezyz8kahRfNs3byaHcIQu9tWTrcMpBWhZ45DzLjVV1N8Zt96uLnNWK5DvbKW8GgMuwY7fHkZFz85MN4d2gL0j85HmXGx9oPTFRkPWsmMOHUvm5IhB7QqGSAwT1uL7HgBrNX9a1BAWrp9zV1IWAd1q65sKOOCxTZrXJDpxBxYE4rJAGU6pcri9mUf4g49ZiIAwfu9njtZyYimmImCa6TFhk2jQcSmFDHacExxqC2BfYATHFrKSy94dbw6uWT52nM7MSM9JDu4cs9cbfnaf6amt</div>

                    {/* <h2 class="font-bold max-w-auto mx-6 pt-7 flex-wrap content-evenly text-brand-dark-blue font-bebas-neue text-xl">{user.first_name} 's Updates</h2> */}
                    <br/>
                    <br/>
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-brand-yellow"></div>
                        </div>
                        <div class="relative flex justify-center">
                            <span class="px-3 bg-white text-xl font-bebas-neue text-brand-dark-blue">
                            {user.first_name} 's Updates
                            </span>
                        </div>
                    </div>
               


<div className="px-8 mx-6 max-w-auto sm:px-6 lg:px-8 mb-4 shadow-md rounded-r-md rounded-l-md">

                   
//                 </div>
//             </div>
//             </div>

    <ul className="divide-y divide-gray-200">
        {postsFromUser.map((post) => (
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
                        {post.post_likers && post.post_likers.length ? <div>{post.post_likers.length} </div> : <div></div>}
                        <DeleteUserComment postId={post.post_id} reRenderPosts={reRenderPosts} token={token} user_id={user.user_id} />
                    </li>
                    </ul> 
                </div>
            </div>
            </div>
        </li>
        ))}
            </ul>
    </div>


<div className="mt-20">POSTS TO USER</div>
<div className="px-8 mx-6 max-w-auto sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md">
    <ul className="divide-y divide-gray-200">
        {poststToUser.map((post) => (
        <li className="py-4 h-20">
            <div className="flex space-x-3">
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{post.post_text}</h3>


                <ul className="text-sm text-gray-500 overflow-y-auto">
                    <li className="flex">
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
                        {post.post_likers && post.post_likers.length ? <div>{post.post_likers.length} </div> : <div></div>}
                        <DeleteUserComment postId={post.post_id} reRenderPosts={reRenderPosts} token={token} user_id={user.user_id} />
                    </li>
                    </ul> 
                </div>
            </div>
            </div>
        </li>
        ))}
        <AddUserComment token={token} reRenderPosts={reRenderPosts} user_id={user.user_id}/>       
    </ul>
    </div>
    </div>
    )
}
export default UserProfile

// {allPosts.map((post) => (
//     <li className="py-4 h-20">
//         <div className="flex space-x-3">
//         <div className="flex-1 space-y-1">
//             <div className="flex items-center justify-between">
//             <h3 className="text-sm font-medium">{post.post_text}</h3>
//             <ul className="text-sm text-gray-500">
//                 <li className="flex mb-2">
//                     <img className="w-4 h-4 rounded-full mr-2" src={post.post_author_pic}/>
//                     <Link 
//                     to={`/UserProfile/${post.post_author_id}`} className="hover:text-brand-red mr-2">{post.post_author_username}</Link> 
//                 </li>
//                 <li className="flex">
//                     <a onClick={() => handleLikeClick(post.post_id)} className="hover:text-brand-dark-blue text-brand-beau-blue inline-block">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                     <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
//                     </svg>
//                     </a> 
//                     {post.post_likers && post.post_likers.length ? <div>{post.post_likers.length} </div> : <div></div>}
//                     <DeleteUserComment postId={post.post_id} handlePost={handlePost} token={token} user_id={user.user_id} />
//                 </li>
//                 </ul> 
//             </div>
//         </div>
//         </div>
//     </li>
//     ))}