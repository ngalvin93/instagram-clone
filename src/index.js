import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import FirebaseContext from './context/firebase'
import { firebaseApp } from './lib/firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebaseApp }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
  )
