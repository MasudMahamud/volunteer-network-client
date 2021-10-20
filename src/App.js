import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import HomeMain from "./Components/HomeMain/HomeMain";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
               
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
