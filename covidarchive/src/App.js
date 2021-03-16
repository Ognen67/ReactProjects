import React from 'react'
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import {Route} from "react-router";
import Home from "./components/Home/Home";
import Information from "./components/Information/Information";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
    return (
        <Router>
        <div className="App">
            <Navigation/>
            <Route path="/home" exact component={Home}/>
            <Route path="/information" exact component={Information}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/about" exact component={About}/>

        </div>
        </Router>
    );
}

export default App;
