import React, {Component, useEffect} from 'react'
import './burger.css'

class Burger extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef()
    }

    componentDidMount() {
        this.inputElementRef.current.focus()
    }

    render() {
        return (
        <div className={'container'}>
            <p>{this.props.name} burger</p>
            <p>price: {this.props.price}</p>
            <input ref={this.inputElementRef}/>
        </div>
        );
    }
}

export default Burger;
