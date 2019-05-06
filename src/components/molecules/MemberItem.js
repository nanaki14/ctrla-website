import React from 'react'
import styled from 'styled-components'
import {nl2br} from '../utils/'
import PrimaryText from '../atoms/PrimaryText'

const MemberItem = ({ member }) => {
  return (
    <Wrapper>
      <figure>
        <img src={member.icon} />
      </figure>
      <div>
        <Title>{member.name}</Title>
        <PrimaryText>{nl2br(member.detail)}</PrimaryText>
        <SocialLinks>
          {member.social.map((link) => (
            <li key={link.name}>
              <a href={link.link} target="_blank">{link.name}</a>
            </li>
          ))}
        </SocialLinks>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  > figure {
    width: 120px;
  }
  > div {
    flex: 1;
    padding-left: 40px;
  }
  & + & {
    margin-top: 63px;
  }
`

const Title = styled.h3`
  margin-bottom: 18px;
  font-family: 'Prompt', 'Noto Sans JP', sans-serif;
  ${props => props.theme.mixins.font_h2}
`

const SocialLinks = styled.ul`
  li {
    margin-top: 24px;
    & + li {
      margin-top: 16px;
    }
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

export default MemberItem