import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import LogIn from "./Components/LogIn/LogIn/LogIn";
import { createContext, useState } from 'react'
import RegisterFrom from "./Components/LogIn/RegisterFrom/RegisterFrom";
import PrivateRoute from "./Components/LogIn/PrivateRoute/PrivateRoute";
import Events from "./Components/Events/Events";
import Blog from "./Components/Blog/Blog";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AllVolunteer from "./Components/Dashboard/AllVolunteer/AllVolunteer";
import AddEvent from "./Components/Dashboard/AddEvent/AddEvent";
import AddBlog from "./Components/Dashboard/AddBlog/AddBlog";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/event">
              <Events></Events>
            </Route>
            <PrivateRoute path="/info/:title">
              <RegisterFrom></RegisterFrom>
            </PrivateRoute>
            <Route path="/event">
              <Events></Events>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/register">
              <LogIn></LogIn>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/allVolunteer">
              <AllVolunteer></AllVolunteer>
            </Route>
            <Route path="/addEvent">
              <AddEvent></AddEvent>
            </Route>
            <Route path="/addBlog">
              <AddBlog></AddBlog>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
