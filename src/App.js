import React from 'react'
import NavBar from './components/NavBar_component.js'
import User from './pages/user_page.js'
import PostList from './pages/postList_page.js'
import LandingPage from './pages/landing_page.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 

function App(){

  return(
    <Router>
      <div className="app">
        <NavBar/>
          <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route path="/postlist" exact component={PostList}/>
            <Route path="/user" exact component={User}/>
            <Route path="/user/:username" component={User}/>
          </Switch>
      </div>
    </Router>
    
  )
}


export default App;