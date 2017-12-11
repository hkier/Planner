'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store'
import Main from './components/Main'
console.log('did we get here?')
render (
  <Provider store={store}>
  <Router>
    <Main />
  </Router>
</Provider>,
  document.getElementById('planner')
)


