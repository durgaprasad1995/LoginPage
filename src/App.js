import React from "react";
import "./App.css";
// import SignIn from "./Login";
import ListDetails from "./ListDetails";
// import { connect } from "react-redux";
// import { simpleAction } from "./actions/SimpleAction";
import { Route, BrowserRouter as Router } from "react-router-dom";
import {useSelector,useDispatch}from "react-redux"


function App(props) {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  console.log(props);
  return (
    <div>
      <Router>
        {/* <Route path="/" exact component={SignIn} /> */}
        <Route path="/ListDetails" exact component={ListDetails} />
      </Router>
      {/* <button onClick={simpleAction}>Test redux action</button>
      <pre>{JSON.stringify(props)}</pre> */}
      <h1>Counter {counter}</h1>

      <button onClick={(()=>dispatch({type:"INCREMENT"}))}>+</button>
    </div>
  );
}

export default App;
