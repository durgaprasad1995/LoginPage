import React from "react";
import "./App.css";
import SignIn from "./Login";
import ListDetails from "./ListDetails";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/ListDetails" exact component={ListDetails} />
      </Router>
    </div>
  );
}

export default App;
