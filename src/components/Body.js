import React, {useState} from 'react';

function Body(props) {
    return (
            <div 
                className='box'
                onClick={() => props.toggle(props.id)}
                style={{backgroundColor: props.on ? 'green' : 'red'}}>
            </div>
    )
}

export default Body;