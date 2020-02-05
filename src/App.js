import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from "./login"
import ListDetails from "./ListDetails"
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
   
          {/* <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul> */}
          <Route path="/" exact component={SignIn} />
        
          <Route path="/ListDetails" exact component={ListDetails} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Router>
 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
