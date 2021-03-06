import { useState } from 'react'
import axios from 'axios'

function DeleteUserComment({ token, postId, reRenderPosts, user_id }) {

    const getPosts = (event) => {
        reRenderPosts()
    }

    const handleDelete = (event) => {
        event.preventDefault()
        axios
        .delete(`https://tipsy-backend.herokuapp.com/posts/${postId}/`,
        {
            headers: { Authorization: `Token ${token}`},
        })
        .then(res => {
            if (res.status === 204) {
                getPosts()
            }
        }).catch(err => {
        })
        }

    return(
        <div className="">
            <form  className="ml-2">
            <button onClick={(event) => handleDelete(event)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-brand-dark-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            </button>
            </form>
        </div>
    )
}

export default DeleteUserComment