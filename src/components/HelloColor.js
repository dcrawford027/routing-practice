import React from 'react';

const HelloColor = props => {
    return (
        <h1 style={{color:props.textColor, backgroundColor:props.backgroundColor}}>The word is: {props.word}</h1>
    )
}

export default HelloColor;