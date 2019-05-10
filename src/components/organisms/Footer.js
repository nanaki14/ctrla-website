import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logoImg from '../../assets/images/ctrla_logo.svg'

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <PageList>
          <li>
            <Link to="/#about">^ About</Link>
          </li>
          <li>
            <Link to="/#member">^ Member</Link>
          </li>
          <li>
            <Link to="/events">^ Events</Link>
          </li>
          <li>
            <a href="mailto:">^ Contact</a>
          </li>
        </PageList>
        <SocialList>
          <li>
            <a href="" target="_blank">
              Line
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Facebook
            </a>
          </li>
        </SocialList>
        <Logo>
          <img src={logoImg} alt="Ctrl+A" />
        </Logo>
        <CopyLight>©2019 Ctrl+A</CopyLight>
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background: ${props => props.theme.colors.primary};
`

const Inner = styled.div`
  position: relative;
  display: flex;
  max-width: ${props => props.theme.sizes.pc.inner_width}px;
  margin: 0 auto;
  padding: 70px ${props => props.theme.sizes.pc.side_padding}px 167px;
  overflow: hidden;
`

const Logo = styled.figure`
  position: absolute;
  right: ${props => props.theme.sizes.pc.side_padding}px;
  bottom: -6px;
  width: 680px;
`

const CopyLight = styled.small`
  margin-left: auto;
  color: ${props => props.theme.colors.white};
  font-weight: 300;
  ${props => props.theme.mixins.font_prompt}
  ${props => props.theme.mixins.font_subtext}
`

const PageList = styled.ul`
  li {
    &:not(:last-child) {
      margin-bottom: 35px;
    }
  }
  a {
    display: block;
    transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
    color: ${props => props.theme.colors.white};
    font-weight: 300;
    ${props => props.theme.mixins.font_prompt}
    ${props => props.theme.mixins.font_h1}
    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`

const SocialList = styled.ul`
  margin-left: ${props => (236 / props.theme.sizes.pc.inner_width) * 100}%;
  li {
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
  a {
    display: block;
    transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
    color: ${props => props.theme.colors.white};
    font-weight: 300;
    text-decoration: underline;
    ${props => props.theme.mixins.font_prompt}
    ${props => props.theme.mixins.font_text}
    &:hover {
      color: ${props => props.theme.colors.hover};
      text-decoration: none;
    }
  }
`

export default Footer
