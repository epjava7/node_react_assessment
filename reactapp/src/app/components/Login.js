import React, { useState } from 'react'

function Login() {
  const [data, setData] = useState({
    username: '',
    email: '',
    address: '',
    password: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target

    let newData = Object.assign({}, data)
    if (name === 'username') {
      newData.username = value
    } else if (name === 'email') {
      newData.email = value
    } else if (name === 'address') {
      newData.address = value
    } else if (name === 'password') {
      newData.password = value
    }

    setData(newData)

    console.log(newData)
  }

  return (
    <div>
      <h1>Testing functional components</h1>

      <label>Username</label>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={onChange}
      />
      <br></br>
      <br></br>

      <label>Email</label>
      <input type="email" name="email" value={data.email} onChange={onChange} />
      <br></br>
      <br></br>

      <label>Address</label>
      <input
        type="text"
        name="address"
        value={data.address}
        onChange={onChange}
      />
      <br></br>
      <br></br>

      <label>Password</label>
      <input
        type="text"
        name="password"
        value={data.password}
        onChange={(e) =>
          setData((prevData) => {
            let newData = Object.assign({}, prevData)
            newData.password = e.target.value
            console.log(newData)
            return newData
          })
        }
      />
    </div>
  )
}

export default Login
