import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

import { mq } from '../styles/'
import SimpleLogo from '../atoms/SimpleLogo'
import HeaderNav from '../molecules/HeaderNav'
import Drawer from './Drawer'

const Header = () => {
  const [isOpen, toggleOpen] = useState(false)
  const handleClick = useCallback(() => {
    toggleOpen(!isOpen)
  }, [isOpen])
  return (
    <Wrapper>
      <LogoWrapper>
        <SimpleLogo />
      </LogoWrapper>
      <Inner>
        <HeaderNav />
      </Inner>
      <Button type="button" onClick={handleClick} isOpen={isOpen}>
        <span />
      </Button>
      <Drawer handleClick={handleClick} isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 61px;
  background-color: ${props => props.theme.colors.background};
  ${mq.small`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 63px;
  `}
  z-index: 100;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 68px;
  ${mq.small`
    padding: 0 ${props => props.theme.sizes.sp.side_padding}%;
  `}
`

const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 101;
  ${mq.small`
    left: ${props => props.theme.sizes.sp.side_padding}%;
  `}
`

const Button = styled.button`
  display: none;
  position: fixed;
  top: 20px;
  right: ${props => props.theme.sizes.sp.side_padding}%;
  width: 30px;
  height: 23px;
  transition: transform 0.5s ${props => props.theme.easings.ease_out_cubic};
  transform: rotate(${props => (props.isOpen ? '360deg' : '0deg')});
  z-index: 101;
  ${mq.small`
    display: block;
  `}
  span {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    margin-top: -0.5px;
    background-color: ${props => props.theme.colors.primary};
    transition: opacity 0.3s ${props => props.theme.easings.ease_out_cubic};
    opacity: ${props => (props.isOpen ? '0' : '1')};
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.primary};
    transition: 0.5s ${props => props.theme.easings.ease_out_cubic};
    transform-origin: 50%;
  }
  &:before {
    top: ${props => (props.isOpen ? '50%' : '0')};
    margin-top: -0.5px;
    transform: rotate(${props => (props.isOpen ? '45deg' : '0deg')});
  }
  &:after {
    bottom: ${props => (props.isOpen ? '50%' : '0')};
    margin-bottom: -0.5px;
    transform: rotate(${props => (props.isOpen ? '-45deg' : '0deg')});
  }
`

export default Header
