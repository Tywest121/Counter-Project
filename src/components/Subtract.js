import React from 'react'

const Subtract = (props) => {
    const {countDecrease} = props

    return (
        <div>
            <button onClick = {countDecrease}>Subtract One</button>
        </div>
    )
}

export default Subtract;