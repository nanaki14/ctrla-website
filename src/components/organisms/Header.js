import React from 'react'
import styled from 'styled-components'

import { mq } from '../styles/'
import SimpleLogo from '../atoms/SimpleLogo'
import HeaderNav from '../molecules/HeaderNav'

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <SimpleLogo />
      </LogoWrapper>
      <Inner>
        <HeaderNav />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 61px;
  background-color: ${props => props.theme.colors.background};
  ${mq.small`
    height: 63px;
  `}
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
  ${mq.small`
    left: ${props => props.theme.sizes.sp.side_padding}%;
  `}
`

export default Header
