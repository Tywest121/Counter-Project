import React from 'react'

const Add = (props) => {
  const {countIncrease} = props

  return (
    <div>
      <button onClick = {countIncrease}>Add One</button>
    </div>
  )
}

export default Add;