import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: 'name',
      userAddress: 'address',
    }
  }

  componentWillUnmount() {
    console.log('parent unmount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.userName !== nextState.userName ||
      this.state.userAddress !== nextState.userAddress
    ) {
      console.log('parent should update')
      return true
    }
    console.log('parent should not update')
    return false
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      prevState.userName !== this.state.userName ||
      prevState.userAddress !== this.state.userAddress
    ) {
      console.log('parent snapshot')
      return {
        prevUserName: prevState.userName,
        prevUserAddress: prevState.userAddress,
      }
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      console.log(snapshot)
    }
  }

  sendBackData = (name, address) => {
    this.setState({ userName: name, userAddress: address })
  }

  render() {
    console.log('render parent')
    return (
      <div>
        <h1>Parent</h1>
        <h2>{this.state.userName}</h2>
        <h2>{this.state.userAddress}</h2>
        <hr />
        <Child
          handleData={this.sendBackData}
          curName={this.state.userName}
          curAddress={this.state.userAddress}
        />
      </div>
    )
  }
}

export default Parent
