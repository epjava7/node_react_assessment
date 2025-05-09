import React, { PureComponent } from 'react'

class Child extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userNameInput: '',
      userAddressInput: '',
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleData(this.state.userNameInput, this.state.userAddressInput)

    this.setState({ userNameInput: '', userAddressInput: '' })
  }

  render() {
    return (
      <div>
        <h1>Child</h1>
        <div>
          <h3>Parent Data</h3>
          <h4>{this.props.curName}</h4>
          <h4>{this.props.curAddress}</h4>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>User Name:</label>
          <input
            type="text"
            name="userNameInput"
            value={this.state.userNameInput}
            onChange={this.handleChange}
          />
          <br></br>
          <br></br>

          <label>User Address:</label>
          <input
            type="text"
            name="userAddressInput"
            value={this.state.userAddressInput}
            onChange={this.handleChange}
          />
          <br></br>

          <button type="submit">Send to Parent</button>
        </form>
      </div>
    )
  }
}

export default Child
