import React from 'react';
import { navigate } from '@reach/router';
import Number from './Number';

const Hello = props => {
    return (
        <>
            {
                isNaN(props.word) ? 
                <h1>The word is: {props.word}</h1> :
                <Number num={props.word}/>
            }
        </>
        
    )
}

export default Hello;