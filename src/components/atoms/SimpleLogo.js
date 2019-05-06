import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Location } from '@reach/router';
import logoImg from '../../assets/images/logo.svg'

const renderLogo = () => {
  return (
    <Link to="/">
      <img src={logoImg} alt="Ctrl+A" />
    </Link>
  )
}

const SimpleLogo = () => {
  return (
    <Wrapper>
      <Location>
        {({ location }) => (
          location.pathname === '/' ? (<h1>{renderLogo()}</h1>) : (<h2>{renderLogo()}</h2>)
        )}
      </Location>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 80px;
  a {
    display: block;
    transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
    &:hover {
      opacity: 0.7
    }
  }
`

export default SimpleLogo
