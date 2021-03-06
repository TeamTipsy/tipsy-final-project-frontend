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
import DeleteUserComment from './components/DeleteUserComment'
import UpdateUserStatus from './components/UpdateUserStatus'
import axios from 'axios'
// import CreatableSelect from './components/LoadTags.js'

// import search from './components/search'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    } from 'react-router-dom';
import AddVenue from './components/AddVenue'
// import { Tag_List } from './components/VenueTags'


function App() {

    const [username, setUsername] = useLocalStorageState('username', '')
    const [token, setToken] = useLocalStorageState('token', '')
    const [email, setEmail] = useLocalStorageState('email', '')
    const [currentUser, setCurrentUser] = useState([])

    useEffect (() => {
        axios.get(`https://tipsy-backend.herokuapp.com/auth/users/me/`,
    {
        headers: { Authorization: `Token ${token}`}
    })
    .then((response) => {
        console.log(response)
        setCurrentUser(response.data)
    })
    }, [])

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
    // console.log(currentUser)
    
    return (
        <Router>
            <div className="App">
                <NavBar currentUser={currentUser} setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} username={username} logOut={logOut} setUsername={setUsername} setToken={setToken}/>
                <Switch>
                    <Route path="/" exact>
                    <Home token={token} currentUser={currentUser}/>
                    </Route>

                    <Route path="/UserProfile/:userId" component={UserProfile}>
                        <UserProfile token={token} currentUser={currentUser}/>
                    </Route>

                    <Route path="/VenueProfile/:venueId" component={VenueProfile}>
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

                    <Route path="/search">
                    <search token={token} />
                    </Route>

                    <Route path="/SearchResults" component={SearchResults} />


                    <Route path="/Addvenue" component={() => <AddVenue postVenue={true} />} >
                    <AddVenue token={token} />
                        </Route>

                     {/* <Route path="/Addtags" token={token} component={CreatableSelect} >
                    </Route>  */}

                    <Route path="/Delete">
                        <DeleteUserComment token={token} />
                    </Route>

                    <Route path="/AddComment">
                    <UpdateUserStatus currentUser={currentUser} />
                    </Route>


                    </Switch>
                </div> 
            </Router>
    )
}

export default App