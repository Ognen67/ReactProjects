import React from 'react'
import './App.css';
import Burger from './burger'
import {render} from "@testing-library/react";

class App extends Component {

    render() {
    return (
<div className="App">
<header>
<h1>The Burger Builder</h1>
</header>
<Burger num={1}/>
<Burger num={2}/>
<Burger num={3}/>
</div>
);
}



}

export default App;
