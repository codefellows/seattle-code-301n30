import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import BestDogs from "./BestDogs";
import './App.css'

class App extends React.Component {
  render() {
    return (
      <Router>
        <nav>
          <h1>World of Dogs</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </nav>


        <Routes>

          <Route
            exact path='/'
            element={<BestDogs />}>
          </Route>

          <Route
            path='/about'
            element={<div>Hook me up</div>}>
          </Route>
        </Routes>
      </Router>
    )
  }
}

export default App
