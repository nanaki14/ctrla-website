import { Link } from "gatsby"
import * as PropTypes from "prop-types"
import React from "react"
import logoSVG from '../images/ctrla_logo.svg'

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrap">
      <h1>
        <Link to="/">
          <img src={logoSVG} alt={siteTitle} width="140" height="50" />
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
