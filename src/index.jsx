import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from '../src/App'
import * as serviceWorker from '../src/serviceWorker'
import './assets/styles/index.css'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)

serviceWorker.register()
