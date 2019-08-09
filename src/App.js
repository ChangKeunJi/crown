import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/")}>Go Back</button>
      <h1>Hats Page: {props.match.params.id}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      {/* <Route path="/hats/:id" component={HatsPage} /> */}
    </div>
  );
}

export default App;
