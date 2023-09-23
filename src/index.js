import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AboutUs from './views/about-us'
import SignIn from './views/sign-in'
import ComingSoon from './views/coming-soon'
import Profile from './views/profile'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
