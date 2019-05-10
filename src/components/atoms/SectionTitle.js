import React from 'react'
import styled from 'styled-components'
import { mq } from '../styles/'

const SectionTitle = ({ level = 2, children }) => {
  const Htag = `h${level}`

  return (
    <Wrapper>
      <Htag>{children}</Htag>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 66px;
  font-weight: 300;
  ${props => props.theme.mixins.font_prompt}
  ${props => props.theme.mixins.font_h1}
  ${mq.small`
    margin-bottom: 26px;
  `}
`

export default SectionTitle
