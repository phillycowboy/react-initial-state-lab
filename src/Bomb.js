// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component{
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
        const newCount = this.state.secondsLeft - 1
        this.setState({
            secondsLeft: newCount
        }) 
    }
    decrement = () => {
        if(this.state.secondsLeft === 0){
            return(
                <div>Boom!</div>
            )
        }else{
            return(
                <div>{this.state.secondsLeft} seconds left before I go boom!</div>
            )
        }
    }

    render(){
        return(
            <div>{this.decrement()}</div>
        )
    }
}

