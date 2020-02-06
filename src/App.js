import React from "react";
import "./App.css";
import SignIn from "./Login";
import ListDetails from "./ListDetails";
import { connect } from "react-redux";
import { simpleAction } from "./actions/SimpleAction";

import { Route, BrowserRouter as Router } from "react-router-dom";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});
function App(props) {
  function simpleAction(event) {
    props.simpleAction();
  }
  return (
    <div>
      <Router>
        <Route path="/" exact component={SignIn} />
        <Route path="/ListDetails" exact component={ListDetails} />
      </Router>
      <button onClick={simpleAction}>Test redux action</button>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
