import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    onClickEventHandler = (event) => {
        let array = []
        let x = event.clientX
        let y = event.clientY

        array.push(x, y)

        this.props.onReceiveCoordinates(array)
    }

    render() {
        return(
            <button onClick={this.onClickEventHandler} ></button>
        )
    }
}