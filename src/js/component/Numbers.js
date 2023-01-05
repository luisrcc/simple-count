import React from 'react'

function Numbers (props) {
    let number = props.name;
    if (number === 10){
        number = '🕒'
    }
    return(
        <div className='box-number'>
            <span>{number}</span>
        </div>
        
    )
}

export default Numbers;