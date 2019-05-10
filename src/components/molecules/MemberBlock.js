import React from 'react'
import styled from 'styled-components'
import { nl2br } from '../utils/'
import { mq } from '../styles/'
import PrimaryText from '../atoms/PrimaryText'

const MemberBlock = ({ member }) => {
  return (
    <Wrapper>
      <Thumb>
        <img src={member.icon} />
      </Thumb>
      <PrimaryText>{nl2br(member.detail)}</PrimaryText>
      {member.social.length && (
        <Social>
          {member.social.map(item => (
            <li key={item.name}>
              {item.name}：
              <a href={item.link} target="_blank">
                {item.account}
              </a>
            </li>
          ))}
        </Social>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.article`
  & + & {
    margin-top: 40px;
  }
`

const Thumb = styled.figure`
  display: block;
  width: 335px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`

const Social = styled.ul`
  li,
  a {
    ${props => props.theme.mixins.font_text}
  }
  a {
    text-decoration: underline;
    transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
    ${props => props.theme.mixins.font_text}
    &:hover {
      color: ${props => props.theme.colors.hover};
      text-decoration: none;
      ${mq.small`
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
      `}
    }
  }
`

export default MemberBlock
