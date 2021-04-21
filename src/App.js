import React from 'react'
import Home from "./components/Home"
import UserProfile from './components/UserProfile'
import VenueProfile from './components/VenueProfile'
import login from './components/login'
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
    // Link,
    // Redirect,
  } from 'react-router-dom';
  
  
function App() {
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
                    <Route path="/login" component={login}>
                    
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