import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import Logo from '../media/Tipsy-redlogo.svg'
import useLocalStorageState from 'use-local-storage-state'

function Login ({isLoggedIn, token, setAuth, username, logOut, setUsername}) {
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('')
    
    if(isLoggedIn) {return <Redirect to="/" />
    }


    function hidePassword() {var x = document.getElementById("userPass");
    if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }


    function handleSubmit (event) {
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
        return 
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
<h1 style={isLoggedIn ? {} : {display: 'none'}} className="flex items-center justify-center min-h-screen px-4 py-12 text-4xl bg-white text-brand-dark-blue sm:px-6 lg:px-8">Don't worry, you're logged in and ready to get Tipsy.
</h1>
<div  style={isLoggedIn ? { display: 'none' } : {}} className="flex items-center justify-center min-h-screen px-4 py-12 bg-brand-beau-blue sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
        <div>
        <img
            className="w-auto mx-auto mt-8 h-30"
            src={Logo}
            alt="Tipsy"
        />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-brand-dark-blue">Sign in to your account</h2>

        </div>
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
        
        <div className="-space-y-px rounded-md shadow-sm">
            <div>
            <label htmlFor="email-address" className="sr-only">
                Username
            </label>
            <input
                className="relative block w-full px-3 py-2 mb-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                type='text'
                id='username'
                placeholder="Enter your username"
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
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    type='password'
                    placeholder="Password"
                    id='userPass'
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
            />
            </div>
         
        </div>


        <div>
            <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group bg-brand-red hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign in
        </button>

        <Link className="content-center mt-2 text-sm text-center text-brand-dark-blue hover:text-brand-yellow " to="/registration">Don't have a Tipsy account? Create one here.</Link>
        
        </div>
        </form>
        </div>
        {errors && <p>{errors}</p>}
    </div>


    </>
)
}

export default Login
