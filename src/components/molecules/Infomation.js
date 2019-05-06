import React from 'react'
import styled from 'styled-components'

const Infomation = ({ infomation }) => {
  return (
    <Wrapper>
      <Border />
        <DescList>
          <dt>Vol.</dt>
          <dd>{infomation.vol}</dd>
        </DescList>
      <Border />
        <DescList>
          <dt>Date</dt>
          <dd>{infomation.date}</dd>
        </DescList>
      <Border />
        <DescList>
          <dt>Place</dt>
          <dd>
            <span>{infomation.place}</span>
            <a href={infomation.map} target="_blank">Google Map</a>
          </dd>
        </DescList>
      <Border />
        <DescList>
          <dt>Door</dt>
          <dd>{infomation.door}</dd>
        </DescList>
      <Border />
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Border = styled.span`
  display: block;
  height: 1px;
  background: ${props => props.theme.colors.border};
  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 100%;
    background: ${props => props.theme.colors.primary};
  }
`

const DescList = styled.dl`
  display: flex;
  align-items: center;
  height: 41px;
  ${props => props.theme.mixins.font_prompt}
  ${props => props.theme.mixins.font_text}
  dt {
    width: 55px;
  }
  dd {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: underline;
      transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
      ${props => props.theme.mixins.font_prompt}
      ${props => props.theme.mixins.font_text}
      &:hover {
        color: ${props => props.theme.colors.hover};
        text-decoration: none;
      }
    }
  }
`

export default Infomation