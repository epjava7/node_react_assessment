import React from 'react'

const SuccessChild = (props) => {
  let name = props.name
  let address = props.address
  let storyComponent = props.storyComponent

  return (
    <div>
      <h4>Child Component</h4>
      <p>Name: {name}</p>
      <p>Address: {address}</p>
      <br></br>
      {storyComponent}
    </div>
  )
}

export default SuccessChild
