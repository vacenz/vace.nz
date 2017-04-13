import React, { Component } from 'react'
import styles from './Main.css'
import CSSModules from 'react-css-modules'
import Triangle from './Triangle'

@CSSModules(styles, { allowMultiple: true })
export default class Projects extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div styleName='Wrapper'>

        <div styleName='ColumnHeading'>
          <div styleName='Signature'>
            v<img styleName="Logo" src="http://i.imgur.com/0Hrq5CR.png" />cenz
          </div>

          <p styleName='Highlight'>js, svg, css, ruby and julia.</p>
          <p>
            <span>Vacenz has worked on the following projects:</span>
            <br />
            <a href="http://lastdraft.xyz">last draft</a>,
            <a href="http://starjs.ooi">starjs</a>,
            <a href="http://trac.kz">trac.kz</a>
            and many more.
          </p>

          <p>Contact <a href="http://stevenisekimart.in">steven iseki martin</a> for more info and future work</p>
        </div>


        <div styleName='ColumnTriangle'>
          <Triangle />
        </div>

      </div>
    )
  }
}
