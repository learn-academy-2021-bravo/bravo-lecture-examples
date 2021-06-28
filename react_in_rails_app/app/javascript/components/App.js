import React from "react"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"

import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"

class App extends React.Component {
  render () {
    return (
      <Router>
    
          <Route exact path="/" component={ Home } />
          <Route path="/aboutus" component={ AboutUs } />
        </Switch>
      </Router>
    );
  }
}

export default App
