import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Profile from "./components/Profile"
import Contact from "./components/Contact"

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Route exact path = "/" component={Profile}/>
      <Route exact path ="/portfolio" component={Portfolio}/>
      <Route exact path ="/contact" component={Contact}/>
      <div className="gray"></div>
      <div className="cowboysBlue">Created with React.js</div>
    </div>
    </Router>
  );
}

export default App;
