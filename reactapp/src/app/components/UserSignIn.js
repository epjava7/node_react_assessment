import React, { Component } from 'react'

class UserSignIn extends Component {
  constructor(props) {
    super(props)
    this.username = React.createRef()
    this.password = React.createRef()
    this.phone = React.createRef()
  }

  onSubmit = (e) => {
    e.preventDefault()
    let username = this.username.current.value
    let password = this.password.current.value
    let phone = this.phone.current.value

    if (!username || !password || !phone) {
      console.log('missing username, password, or phone')
      return
    }
    console.log(`Success`)

    this.username.current.value = ''
    this.password.current.value = ''
    this.phone.current.value = ''
  }

  render() {
    return (
      <div>
        <h1>User Sign In</h1>
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input type="text" ref={this.username} />
          <br></br>
          <label>Password</label>
          <input type="password" ref={this.password} />
          <br></br>
          <label>Phone</label>
          <input type="text" ref={this.phone} />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UserSignIn
