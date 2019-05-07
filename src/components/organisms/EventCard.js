import React from 'react'
import styled from 'styled-components'

import MoreLink from '../atoms/MoreLink'
import Infomation from '../molecules/Infomation'

import placeholder from '../../assets/images/poster_placeholder.png'

const EventCard = ({ flyer = placeholder, infomation, more }) => {
  return (
    <Wrapper>
      <Flyer>
        <img src={flyer} />
      </Flyer>
      <Infomation infomation={infomation} />
      <MoreLink link={more.link}>More Details</MoreLink>
    </Wrapper>
  )
}

const Wrapper = styled.article``

const Flyer = styled.figure`
  display: block;
  margin-bottom: 40px;
  img {
    pointer-events: none;
  }
`

export default EventCard
