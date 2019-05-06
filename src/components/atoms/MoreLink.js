import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const MoreLink = ({ children, link }) => {
  return (
    <Wrapper>
      <Link to={link}>{children}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 40px;
  a {
    display: block;
    padding: 6px 10px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
    font-weight : 300;
    ${props => props.theme.mixins.font_prompt}
    ${props => props.theme.mixins.font_text}
    &:hover {
      background-color: ${props => props.theme.colors.hover};
    }
  }
`

export default MoreLink