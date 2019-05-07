import React from 'react'
import styled from 'styled-components'

import placeholder from '../../assets/images/poster_placeholder.png'

const EventCard = ({flyer = placeholder, infomation, more}) => {
  return (
    <Wrapper>
      <Flyer>
        <img src={flyer} />
      </Flyer>
    </Wrapper>
  )
}

const Wrapper = styled.article``

const Flyer = styled.figure`
  display: block;
  margin-bottom: 40px;
`

export default EventCard