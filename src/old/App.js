import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import 'materialize-css'
import {AuthPage} from './pages/AuthPage'
import {HomePage} from './pages/HomePage'
import { Modal } from './components/Modal'



function App() {
  // const isAuthenticated = true
  // const routes = useRoutes(isAuthenticated)
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/auth" exact>
          <Modal />
        </Route>
        {/* <Route path="/home" exact>
          <HomePage />
        </Route> */}
      </Switch>
      {/* <div className="container">
       
      </div> */}
    </Router>
  )
}

export default App;
