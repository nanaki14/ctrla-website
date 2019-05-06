import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import logoImg from '../../assets/images/logo.svg'

const SimpleLogo = () => {
  return (
    <Wrapper>
      <Link to="/">
        <img src={logoImg} alt="Ctrl+A" />
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.h2`
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
