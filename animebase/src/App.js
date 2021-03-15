import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import About from "./components/About/About";

function App() {


    return (
        <Router>
            <div className="App">
                <Nav/>
                <Route path="/" exact component={Main}/>
                <Route path="/view" exact component={Main}/>
                <Route path="/about" exact component={About}/>
            </div>
        </Router>
    );

}

export default App;
