import React from 'react'
import styled from 'styled-components'

import SimpleLogo from '../atoms/SimpleLogo'
import HeaderNAv from '../molecules/HeaderNAv'

const Header = () => {
  return(
    <Wrapper>
      <LogoWrapper>
        <SimpleLogo />
      </LogoWrapper>
      <Inner>
        <HeaderNAv />
      </Inner>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 61px;
  background-color: ${props => props.theme.colors.background};
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 68px;
`

const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`

export default Header