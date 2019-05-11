import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { mq } from '../styles/'

import bgimage from '../../assets/images/drawer_bg.png'
import logoImg from '../../assets/images/ctrla_logo_black.svg'

const Drawer = ({ isOpen, handleClick }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Inner>
        <PageList isOpen={isOpen}>
          <li>
            <Link to="/#about" onClick={handleClick}>
              ^ About
            </Link>
          </li>
          <li>
            <Link to="/#member" onClick={handleClick}>
              ^ Member
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={handleClick}>
              ^ Events
            </Link>
          </li>
          <li>
            <a href="mailto:" onClick={handleClick}>
              ^ Contact
            </a>
          </li>
        </PageList>
        <SocialList isOpen={isOpen}>
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

        <CopyLight>©2019 Ctrl+A</CopyLight>
      </Inner>
      <Logo>
        <img src={logoImg} alt="Ctrl+A" />
      </Logo>
      <Wipe isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: ${props => (props.isOpen ? '0' : '-200%')};
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.white} url(${bgimage}) no-repeat
    center;
  background-size: contain;
  z-index: 100;
  transition: transform 0.5s ${props => (props.isOpen ? '0s' : '1s')}
      ${props => props.theme.easings.ease_out_cubic},
    left ${props => (props.isOpen ? '0s' : '1s')}
      ${props => (props.isOpen ? '0s' : '0.5s')}
      ${props => props.theme.easings.ease_out_cubic};
  transform-origin: ${props => (props.isOpen ? '0%' : '100%')};
  transform: translateX(${props => (props.isOpen ? '0' : '100%')});
  ${mq.small`
    display: block;
  `}
`

const Inner = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`

const Wipe = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.white};
  transition: transform 0.5s ${props => (props.isOpen ? '0.5s' : '0s')}
    ${props => props.theme.easings.ease_out_cubic};
  transform-origin: ${props => (props.isOpen ? '0%' : '100%')};
  transform: scaleX(${props => (props.isOpen ? '0' : '1')});
`

const Logo = styled.figure`
  position: absolute;
  width: 97px;
  right: 20px;
  bottom: 20px;
`

const CopyLight = styled.small`
  margin-left: auto;
  font-weight: 300;
  ${props => props.theme.mixins.font_prompt}
  ${props => props.theme.mixins.font_subtext}
`

const PageList = styled.ul`
  margin-bottom: 50px;
  transition: transform 1s ${props => (props.isOpen ? '0.5s' : '1s')}
      ${props => props.theme.easings.ease_out_cubic},
    opacity 1.3s ${props => (props.isOpen ? '0.5s' : '1s')}
      ${props => props.theme.easings.ease_out_cubic};
  transform: translateX(${props => (props.isOpen ? '0' : '30px')});
  opacity: translateX(${props => (props.isOpen ? '1' : '0')});
  li {
    &:not(:last-child) {
      margin-bottom: 35px;
    }
  }
  a {
    display: block;
    font-weight: 300;
    ${props => props.theme.mixins.font_prompt}
    ${props => props.theme.mixins.font_h1}
  }
`

const SocialList = styled.ul`
  margin: 0 0 47px;
  li {
    &:not(:last-child) {
      margin-bottom: 14px;
    }
  }
  a {
    display: block;
    transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
    font-weight: 300;
    text-decoration: underline;
    ${props => props.theme.mixins.font_prompt}
    ${props => props.theme.mixins.font_text}
  }
`

export default Drawer
