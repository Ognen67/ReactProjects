import React, {Component} from 'react'
import './App.css';
import Burger from './components/burger'

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor', props)
        this.state = {
            burgers: [
                { name: 'classic', price: 130 },
                { name: 'cheese', price: 140 },
                { name: 'double', price: 180 },
                { name: 'double extra sauce', price: 195 },
            ],
            isOpened : false
        }
    }

    toggleMenu = () => {
        this.setState({
            isOpened: !this.state.isOpened
        })
    }

    render() {
        let burgers = null
        if (this.state.isOpened) {
            burgers = (
                <div className={'burgers'}>
                    {this.state.burgers.map((burger, index) =>
                        <Burger name={burger.name} price={burger.price} key={index}/>
                    )}
                </div>
            )
        }

        console.log('[App.js] render')
        return (
            <div className="App">
                <header className={"App-header"}>
                    <h1>The Burger Builder</h1>
                    {burgers}

                    <button onClick={this.toggleMenu}>Show menu</button>
                </header>

            </div>
        )
    }
}

export default App;
