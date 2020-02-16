import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Hand Of Gravity Coaching</h1>
        <h2>We help you unleash the vision of your startup, business or project onto the world.</h2>
        <h3>This is for entrepreneurs, coaches, specialists, and creatives.</h3>
        
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('creativity')
            }}
          >
            Being Visionary
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('learn-more')
            }}
          >
            Learn More
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
