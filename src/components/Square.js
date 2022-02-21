import React from 'react';

function Square(props) {
    //render() {
    return (
        <button className="square" onClick={props.onClick} >
            {props.value}
        </button>
    );
    //}
}

export default Square