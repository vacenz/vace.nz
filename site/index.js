import React, { Component } from 'react'
import { render } from 'react-dom'
import Main from './components/Main'

class App extends Component {
  render () {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

render((
  <App />
), document.getElementById('root'))
