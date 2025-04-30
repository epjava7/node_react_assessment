import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

/*

  6.

  React doesn't directly manipulate the DOM.
  It uses a virtual DOM in memory to optimize the changes made to the DOM.

  It uses a diffing algorithm to compare the virtual DOM and the DOM and only update the changes needed.


  10.

  Virtual DOM is a copy of the DOM in memory. It is used to optimize changes to the DOM.
  A diffing algo is used to compare changes to the DOM and only updates the changes needed.

  The state can be changed with setState() and useState() and starts the comparison process.

*/
