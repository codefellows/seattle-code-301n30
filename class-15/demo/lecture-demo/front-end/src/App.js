import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  
  render() {
    const {isAuthenticated} = this.props.auth0

    return (
      <>
        <Router>
          <Header />
          <Routes>

            <Route 
              exact path="/"
              element={isAuthenticated && <BestBooks />}
            ></Route>

            <Route
              path={"/about"}
              element={<About/>}
            ></Route>

            <Route
              path={'/profile'}
              element={<Profile/>}
              ></Route>

          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
