import React from 'react'
import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import Home from "./components/Home"
import UserProfile from './components/UserProfile'
import VenueProfile from './components/VenueProfile'
import Login from './components/login.js';
import search from './components/search'
import TopRatedUsers from './components/TopRatedUsers'
import TopRatedVenues from './components/TopRatedVenues'
import Registration from './components/registration'
import NavBar from './components/NavBar'
import SearchResults from './components/SearchResults'
// import search from './components/search'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    } from 'react-router-dom';


function App() {

    const [username, setUsername] = useLocalStorageState('username', '')
    const [token, setToken] = useLocalStorageState('token', '')
    const [email, setEmail] = useLocalStorageState('email', '')

    function setAuth(username, token) {

        setToken(token)
        };
    
    function logOut() {
        setUsername(null)
        setToken(null)
        }
    
    const isLoggedIn = username && token 

    

    function logOut() {
        setUsername(null)
        setToken(null)
        }
        
        console.log('token', token)
    
    return (
        <Router>
            <div className="App">
                <NavBar setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} username={username} logOut={logOut} setUsername={setUsername} setToken={setToken}/>
                <Switch>
                    <Route path="/" exact>
                    <Home token={token} />
                    </Route>

                    <Route path="/UserProfile" component={UserProfile}>
                        <UserProfile token={token}/>
                    </Route>

                    <Route path="/VenueProfile" component={VenueProfile}>
                        <VenueProfile token={token}/>
                    </Route>
                    
                    <Route path="/TopRatedUsers" component={TopRatedUsers}>
                        <TopRatedUsers token={token} />
                    </Route>
                    
                    <Route path="/TopRatedVenues" component={TopRatedVenues}>
                        <TopRatedVenues token={token} />
                    </Route>

                    <Route path="/login" component={Login}>
                    <Login setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} username={username} logOut={logOut} setUsername={setUsername} />
                    </Route>

                    <Route path="/Registration" component={Registration}>
                    <Registration setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} username={username} logOut={logOut} setUsername={setUsername} />
                    </Route>

                    <Route path="/search" component={search} />

                    <Route path="/SearchResults" component={SearchResults} />

                    </Switch>
                </div> 
            </Router>
    )
}

export default App