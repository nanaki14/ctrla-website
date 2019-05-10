import React from 'react'
import styled from 'styled-components'
import { nl2br } from '../utils/'
import { mq } from '../styles/'
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
          {member.social.map(link => (
            <li key={link.name}>
              <a href={link.link} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </SocialLinks>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  display: flex;
  ${mq.small`
    position: relative;
    display: block;
  `}
  > figure {
    width: 120px;
    ${mq.small`
      width: 100%;
      padding: 0 100px 20px 0;
      img {
        width: 100%;
      }
    `}
  }
  > div {
    flex: 1;
    padding-left: 40px;
    ${mq.small`
      padding-left: 0;
    `}
  }
  & + & {
    margin-top: 63px;
    ${mq.small`
      margin-top: 43px;
    `}
  }
`

const Title = styled.h3`
  margin-bottom: 18px;
  font-family: 'Prompt', 'Noto Sans JP', sans-serif;
  ${props => props.theme.mixins.font_h2}
  ${mq.small`
    position: absolute;
    top: 0;
    right: 57px;
    transform: rotate(90deg) translate(100%, 0);
    transform-origin: 100% 0;
  `}
`

const SocialLinks = styled.ul`
  li {
    margin-top: 24px;
    ${mq.small`
      margin-top: 14px;
    `}
    & + li {
      margin-top: 16px;
      ${mq.small`
        margin-top: 14px;
      `}
    }
    a {
      text-decoration: underline;
      transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
      ${props => props.theme.mixins.font_prompt}
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
  }
`

export default MemberItem
