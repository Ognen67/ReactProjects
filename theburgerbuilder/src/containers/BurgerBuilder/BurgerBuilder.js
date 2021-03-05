import React, {Component} from 'react'

import Auxiliary from '../../hoc/Auxiliary'
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    addBacon = () => {
        console.log("add bacon")
        this.setState({
            ingredients: {
                salad: this.state.ingredients.salad,
                bacon: this.state.ingredients.bacon + 1,
                cheese: this.state.ingredients.cheese,
                meat: this.state.ingredients.meat,
            }
        })
    }

    removeBacon = () => {
        console.log("add bacon")
        if(this.state.ingredients.bacon > 0) {
        this.setState({
            ingredients: {
                salad: this.state.ingredients.salad,
                bacon: this.state.ingredients.bacon - 1,
                cheese: this.state.ingredients.cheese,
                meat: this.state.ingredients.meat,
            }
        })
        }
        else {
            alert("No bacon to remove")
        }
    }


    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>

                <div>
                    <BuildControls/>
                </div>

            </Auxiliary>
        );
    }


}

export default BurgerBuilder
