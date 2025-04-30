import React, { Component } from 'react'
import SuccessChild from './SuccessChild'
import SuccessStory from './SuccessStory'

class Success extends Component {
  render() {
    const name = 'Eric'
    const address = '123 Street'

    return (
      <div>
        <h1>Quote</h1>
        <h2>Keep pushing forward!</h2>
        <h3>You can do it!</h3>
        <br></br>

        <SuccessChild
          name={name}
          address={address}
          storyComponent={<SuccessStory />}
        />
      </div>
    )
  }
}

export default Success
