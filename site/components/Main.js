import React, { Component } from 'react'
import styles from './Main.css'
import CSSModules from 'react-css-modules'
import Swipr from 'react-swipr'

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='content'>
        <div className='signature'>
          v<img className="iseki-logo" src="http://i.imgur.com/0Hrq5CR.png" />cenz
        </div>

        <p styleName='Highlight'>js, svg, css, ruby and julia.</p>

        <p>
          <span>Isekivacenz has worked on the following projects:</span>
          <br />
          <a href="http://cssmodul.es">cssmodul.es</a>, <a href="http://reactcomponents.xyz">reactcomponents.xyz</a>, <a href="http://isekivace.nz/react-ui/">react ui</a>, <a href="https://github.com/isekivacenz/flurea">flurea</a> and many more.
        </p>

        <p>Contact <a href="https://github.com/StevenIseki">steven iseki martin</a> for more info and future work</p>

        <Swipr elementId="react-swipr-1">
          <li>
            <a href="https://github.com/isekivacenz/polvena">polvena.js</a>
            <p styleName='Highlight'>A webgl graphics library</p>
          </li>
          <li>
            <a href="http://isekivace.nz/react-ui/">react ui</a>
            <p styleName='Highlight'>A set of react ui components</p>
          </li>
          <li>
            <a href="https://github.com/StevenIseki/ocarin">ocarin</a>
            <p styleName='Highlight'>simple, beautiful deku components</p>
          </li>
        </Swipr>
      </div>
    )
  }
}
