let express = require('express')
const app = express()

const route = require('./routes/defaultRoutes')

app.use('/', route)

app.listen(9000, () => {
  console.log('Rest API is listening at port 9000')
})

/*
 1.

Statelessness means that the server doesn't store any client info.
The request should contain all the info needed and the client should manage its own state.

HTTP is built on top of TCP. 

REST is a style for developing APIs. Sohuld use JSON for transferring data and should be stateless.

SPA is a single page web application. 
It should be able to dynamically update the page to fetch API data without reloading.

Classical Web Apps are when users send a request from a page to the server, the server responses
and a new page is loaded which leads to a reload. 

*/
