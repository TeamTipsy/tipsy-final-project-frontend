import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import useLocalStorageState from 'use-local-storage-state'

function Login ({isLoggedIn, token, setAuth, username, logOut, setUsername}) {

    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')


    function handleSubmit (event) {
    // setAuth1()
    event.preventDefault()
    axios
    .post('https://tipsy-backend.herokuapp.com/auth/token/login/', {
        username: username,
        password: password
    })
    .then((data) => {
        console.log(data)
        if (data && data.data.auth_token) {
        setAuth(username, data.data.auth_token)
        // setCurrentUSer(data.user)
        }
    })
    .catch((error) => {
        setErrors(error.message)
    })

}

// when a user logs in the backend api needs to return key fields for that user, such as 
//username and profile pic. const [loggedInUser, setLoggedInUser]
// an object for the user containing username, profile picture, etc.
// data.user = { username: 'myusername', profile_picture_link: 'http://linktomypick.blah/blah' }

    return (
        <>
<h1 style={isLoggedIn ? {} : {display: 'none'}} className="min-h-screen text-4xl text-brand-dark-blue flex items-center justify-center bg-brand-beau-blue py-12 px-4 sm:px-6 lg:px-8">Don't worry, you're logged in and ready to get Tipsy.
</h1>
<div  style={isLoggedIn ? { display: 'none' } : {}} className="min-h-screen flex items-center justify-center bg-brand-beau-blue py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
        <div>
        <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-dark-blue">Sign in to your account</h2>

        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
        
        <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <label htmlFor="email-address" className="sr-only">
                Username
            </label>
            <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type='text'
                id='username'
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            </div>
            <div>
            <label htmlFor="password" className="sr-only">
                Password
            </label>
            <input
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type='text'
                    id='password'
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
            />
            </div>
         
        </div>


        <div>
            <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign in
        </button>
        </div>
        </form>
        </div>
        {errors && <p>{errors}</p>}
    </div>


    </>
)
}

export default Login