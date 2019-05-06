import React from 'react'
import styled from 'styled-components'

import hero from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <Wrapper>
      <Figure>
        <img src={hero} />
      </Figure>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 40px ${props => props.theme.sizes.pc.side_padding}px;
  background-color: ${props => props.theme.colors.white};
`

const Figure = styled.figure`
  display: block;
  max-width: 424px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  img {
    width: 100%;
  }
`

export default Hero