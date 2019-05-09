import React from 'react'
import styled from 'styled-components'

const PrimaryText = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.p`
  ${props => props.theme.mixins.font_text}
  img {
    margin-top: 0.5em;
  }
`

export default PrimaryText
