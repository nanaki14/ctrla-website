import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Pagination = ({ nextlink, prevlink }) => {
  return (
    <Wrapper>
      {prevlink && <StyledLink to={prevlink}>&lt; Prev</StyledLink>}
      {nextlink && (
        <StyledLink to={nextlink} className="next">
          Next &gt;
        </StyledLink>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 107px;
`

const StyledLink = styled(Link)`
  transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
  ${props => props.theme.mixins.font_prompt}
  ${props => props.theme.mixins.font_h2}
  &.next {
    margin-left: auto;
  }
  &:hover {
    color: ${props => props.theme.colors.hover};
    text-decoration: none;
  }
`

export default Pagination
