import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <Inner />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.primary};
`

const Inner = styled.footer`
  max-width: ${props => props.theme.sizes.pc.inner_width}px;
  margin: 0 auto;
  padding: 70px ${props => props.theme.sizes.pc.side_padding}px 167px;
`

export default Footer
