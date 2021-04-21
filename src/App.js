import React from 'react'
import { useState, useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import Home from "./components/Home"
import UserProfile from './components/UserProfile'
import VenueProfile from './components/VenueProfile'
import Login from './components/Login'
import search from './components/search'
import TopRatedUsers from './components/TopRatedUsers'
import TopRatedVenues from './components/TopRatedVenues'
import registration from './components/registration'
import NewHeader from './components/NewHeader'
// import search from './components/search'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    //Link,
    // Redirect,
  } from 'react-router-dom';
  
  
function App() {

    const [username, setUsername] = useLocalStorageState('username', '')
    const [token, setToken] = useLocalStorageState('token', '')

    function setAuth(username, token) {
        setUsername(username)
        setToken(token)
      };
    
      function logOut() {
        setUsername(null)
        setToken(null)
      }
    
      const isLoggedIn = username && token 
  
    
    return (
        <Router>
            <div className="App">
                <NewHeader />
                
                
                {/* <header>
                    <h1 id="title" class="font-bold text-6xl m-5">Tipsy</h1>
                </header> */}
                <Switch>
                    <Route path="/" exact>
                    <Home />
                    </Route>
                    <Route path="/UserProfile" component={UserProfile} />
                    <Route path="/VenueProfile" component={VenueProfile} />
                    <Route path="/TopRatedUsers" component={TopRatedUsers} />
                    <Route path="/TopRatedVenues" component={TopRatedVenues} />
                    <Route path="/login" component={Login}>
                    <Login setAuth={setAuth} isLoggedIn={isLoggedIn} token={token} username={username} logOut={logOut} setUsername={setUsername} />
                    </Route>
                    <Route path="/registration" component={registration}>
                            
                    </Route>
                    <Route path="/search" component={search} />

                  </Switch>
              </div> 
          </Router>
      )
  }

  export default App