import React from 'react'

function ButtomTime (props) {
    return(
        <div>
            <button className='buttons' onClick={props.funcion}>
                {props.value}
            </button>
        </div>
    )
}

export default ButtomTime;