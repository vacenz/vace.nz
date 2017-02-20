import React, { Component } from 'react'
import styles from './Triangle.css'
import CSSModules from 'react-css-modules'

@CSSModules(styles, { allowMultiple: true })
export default class extends Component {

  componentDidMount() {
    var tris = [].slice.call(document.querySelectorAll('.tri'));
    tris = tris.reverse();
    var container = document.querySelector('#triangle');

    TweenMax.set(tris, {transformOrigin: '50%, 65%'});
    TweenMax.set(container, {visibility:"visible"});

    let tlr = new TimelineMax({repeat:-1});
    tlr.to(container, 10, {rotation:"+=360", ease:Power0.easeNone});
    tlr.timeScale(.5);

    let tls = new TimelineMax({repeat:-1, yoyo:true});
    tls.add("scale");
      for (var i=0; i < tris.length-1; i++) {
        tls.to(tris[i], .95, {scale: .2+(i/5), ease: Circ.easeOut}, 'scale+i/10');
      }
    tls.to({},.85,{});
    tls.timeScale(.8);
  }

  render() {
    return (
      <div>
        <svg id="triangle" viewBox="0 0 314 314">
          <defs>
            <filter id="AI_GaussianBlur_4" name="AI_GaussianBlur_4">
              <feGaussianBlur stdDeviation="4"/>
            </filter>
          </defs>

          <rect width="314" height="314" fill="#161616"/>
          <g filter="url(#AI_GaussianBlur_4)">
            <polygon points="155.9 78.9 192.7 142.7 229.6 206.5 155.9 206.5 82.3 206.5 119.1 142.7 155.9 78.9" fill="#893dea"/>
          </g>
          <polygon className="tri" id="t2" points="155.9 78.9 192.7 142.7 229.6 206.5 155.9 206.5 82.3 206.5 119.1 142.7 155.9 78.9" fill="#893dea"/>
          <polygon className="tri" id="t3" points="155.9 79.3 192.8 143.2 229.6 207 155.9 207 82.2 207 119.1 143.2 155.9 79.3" fill="#ad64ff"/>
          <polygon className="tri" id="t4" points="155.9 79.8 192.6 143.3 229.3 206.8 155.9 206.8 82.6 206.8 119.3 143.3 155.9 79.8" fill="#c48eff"/>
          <polygon className="tri" id="t5" points="155.9 79.5 192.6 143 229.3 206.5 155.9 206.5 82.6 206.5 119.3 143 155.9 79.5" fill="#d7b3ff"/>
          <polygon className="tri" id="t6" points="155.9 80.3 192.6 143.8 229.3 207.3 155.9 207.3 82.6 207.3 119.3 143.8 155.9 80.3" fill="#eddcff"/>
        </svg>
      </div>
    )
  }
}
