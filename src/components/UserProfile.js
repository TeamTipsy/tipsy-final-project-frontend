import React from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import UpdateUserStatus from './UpdateUserStatus.js'
import AddUserComment from './AddUserComment.js'
import DeleteUserComment from './DeleteUserComment.js'
import EditUserInfo from './EditUserInfo.js'
import ImageUpload from './ImageUpload.js'
import {
    Link,
    useParams,
    } from 'react-router-dom';




function UserProfile({ token, currentUser }) {
    const [user, setUser] = useState([])
    const [postsFromUser, setPostsFromUser] = useState([])
    const [postsToUser, setPostsToUser] = useState([])
    const [userFollow, setUserFollow] = useLocalStorageState('follows', false)
    let { userId } = useParams();

    useEffect(() => {
        axios.get(
            `https://tipsy-backend.herokuapp.com/users/${userId}/`, 
            {
                headers: { Authorization: `Token ${token}`}
            }).then((response) => {
            setUser(response.data)
            setPostsFromUser([...response.data.posts_by])
            const filteredPostsToUser = response.data.posted_to_user.filter(post => {
                return post.post_author_id !== userId
            })
            console.log('filtered', filteredPostsToUser)
            setPostsToUser([...filteredPostsToUser])
        })
        }, [token, userId])

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
                    const filteredPostsToUser = response.data.posted_to_user.filter(post => {
                        return post.post_author_id !== userId
                    })
                    setPostsFromUser([...response.data.posts_by])
                    setPostsToUser([...filteredPostsToUser])
                }
            )
        }

console.log(postsFromUser)

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
                if (data.data.detail === 'Post Liked' || data.data.detail === 'Post Unliked') {
                    reRenderPosts()
                }
            })
        }

    return (
        <div className="px-8 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4 mb-28">

                <div className="px-8 mx-6 max-w-auto sm:px-6 lg:px-8 grid grid-cols-2">
                
                <div className='pl-2 image'>
                    <img
                        className="rounded-r-md rounded-l-md shadow-md h-auto w-auto"
                        src={user.prof_pic}
                        alt=""
                    /> 
                </div>
                <div className='px-8 mx-6 mr-2 text-black'>
                    <h1 className='text-3xl font-black'>{user.username}</h1>
                    <h2 className='text-2xl'>{user.city}, {user.state}</h2>
                    <h2 className='text-2xl'>{user.bio_text}</h2>

                        {user.venues_following_list && user.venues_following_list.length ? 
                        <h2 className='text-2xl'>Venues Following: {user.venues_following_list.length}</h2> 
                        : <div></div>}

{currentUser.user_id === user.user_id ? (<div></div>
      ) : (<button onClick={() =>follow()} className="bg-brand-red ml-1 w-20 h-10 border-black text-white font-bebas-neue rounded-md p-2 mt-3 focus:outline-none focus:border-indigo-500">{userFollow ? 'Unfollow' : 'Follow'}</button>)}
                    
                    {currentUser.user_id === user.user_id ? (<EditUserInfo token={token} userId={user.user_id} setUser={setUser} />
      ) : (<div></div>)}
                    {currentUser.user_id === user.user_id ? (<UpdateUserStatus token={token} reRenderPosts={reRenderPosts} user_id={user.user_id}/>
      ) : (<div></div>)}
                </div>
            </div>
            <br/>
            <br/>
                
                

                    <br/>
                    <br/>
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-brand-yellow"></div>
                        </div>
                        <div class="relative flex justify-center">
                            <span class="px-3 bg-white text-xl font-bebas-neue text-brand-dark-blue">

                            Posts from {user.username}

                            </span>
                        </div>
                    </div>


<div className="px-8 mx-6 max-w-auto sm:px-6 lg:px-8 mb-4 shadow-md rounded-r-md rounded-l-md">

    <ul className="divide-y divide-gray-200">

        {postsFromUser.map((post) => (
            
        <li className="py-4 h-20">
            <div className="flex space-x-3">
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                <ul className="block">
                <li className="text-sm font-medium">{post.post_text}</li>
                {post.post_author_id !== post.posted_to_user ? (<li className="mt-2 text-xs text-gray-500">posted to <Link className="hover:text-brand-red" to={`/UserProfile/${post.posted_to_user}`}>{post.posted_to_username}</Link>'s profile <Moment fromNow>{post.post_date}</Moment></li>) : (<li className="mt-2 text-xs text-gray-500"><Moment fromNow>{post.post_date}</Moment></li>)}
       
                </ul>
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

                        {currentUser.user_id === post.post_author_id ? (<DeleteUserComment postId={post.post_id} reRenderPosts={reRenderPosts} token={token} user_id={user.user_id} />
      ) : (<div></div>)}
                        
                    </li>
                    </ul> 
                </div>
            </div>
            </div>
        </li>
        ))}
            </ul>
    </div>


    <div class="relative">
                        <div class="absolute inset-0 flex items-center" aria-hidden="true">
                            <div class="w-full border-t border-brand-yellow"></div>
                        </div>
                        <div class="relative flex justify-center">
                            <span class="px-3 bg-white text-xl font-bebas-neue text-brand-dark-blue">
                            Posts to {user.username}
                            </span>
                        </div>
                    </div>

<div className="px-8 mx-6 max-w-auto sm:px-6 lg:px-8 shadow-md rounded-r-md rounded-l-md">
    <ul className="divide-y divide-gray-200">
        {postsToUser.map((post) => (


        <li className="py-4 h-20">
            <div className="flex space-x-3">
            <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                <ul className="block">
                <li className="text-sm font-medium">{post.post_text}</li>
                <li className="text-sm text-gray-500 mt-2"><Moment fromNow>{post.post_date}</Moment></li>
                </ul>

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

                        
                        {currentUser.user_id === post.post_author_id ? (<DeleteUserComment postId={post.post_id} reRenderPosts={reRenderPosts} token={token} user_id={user.user_id} />
      ) : (<div></div>)}
                    </li>
                    </ul> 
                </div>
            </div>
            </div>
        </li>
        ))}

{currentUser.user_id === user.user_id ? (<div></div>
      ) : (<AddUserComment token={token} reRenderPosts={reRenderPosts} user_id={user.user_id}/>)}
              
    </ul>
    </div>
    </div>
    )
}
export default UserProfile
