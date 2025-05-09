import React, { Component } from 'react'

class StudentSignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      mobile: '',
    }
  }

  onUsernameChange = (e) => {
    this.setState({ userName: e.target.value })
    console.log(this.state)
  }

  onPasswordChange = (e) => {
    this.setState({ password: e.target.value })
    console.log(this.state)
  }

  onMobileChange = (e) => {
    this.setState({ mobile: e.target.value })
    console.log(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault()
    let user = this.state
    this.setState({
      userName: '',
      password: '',
      mobile: '',
    })
  }

  render() {
    return (
      <div>
        <h1>Student Sign In</h1>
        <form onSubmit={this.onSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.onUsernameChange}
            required
          />
          <br></br>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onPasswordChange}
            required
          />
          <br></br>
          <label>Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={this.state.mobile}
            onChange={this.onMobileChange}
            required
          />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default StudentSignIn
