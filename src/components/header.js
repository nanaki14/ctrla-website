import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrap">
      <h1>
        <Link to="/">
          <img src="/img/ctrla_logo.svg" alt="{siteTitle}" width="183" height="54" />
        </Link>
      </h1>
        <div className="nav">
          <ul>
              <li><a href="/event">Event</a></li>
              <li><a href="/artist">Artist</a></li>
          </ul>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
