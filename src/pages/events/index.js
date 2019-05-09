import React from 'react'
// import { Link } from 'gatsby'

import LayoutContainer from '../../components/utils/LayoutContainer'
import {
  ContentsCcntainer,
  ContentsInner,
  SectionContainer,
  GridCcntainer,
  GridItem,
} from '../../components/utils/Containers'
import Seo from '../../components/utils/Seo'
import SectionTitle from '../../components/atoms/SectionTitle'
import EventCard from '../../components/organisms/EventCard'

import flyer from '../../assets/images/flyer/vol22.png'

const infomation = {
  vol: '24 4th Anniversary',
  date: '2019.5.31. (Fri) 19:00 - 23:00',
  place: 'Akihabara Mogra',
  map: '',
  door: '¥2,500 (+1Drink)',
}

const more = {
  link: '/events/vol24',
}

const events = [
  { infomation, more, flyer },
  { infomation, more, flyer },
  { infomation, more, flyer },
  { infomation, more },
  { infomation, more, flyer },
  { infomation, more, flyer },
  { infomation, more, flyer },
]

const IndexPage = () => (
  <LayoutContainer>
    <Seo
      title="Top"
      keywords={[`Ctrl+A`, `ctrla`, `club event`, `akihabara`, `dj`, `vj`]}
    />
    <ContentsCcntainer>
      <ContentsInner>
        <SectionContainer>
          <SectionTitle>Events</SectionTitle>
          <GridCcntainer>
            {events.map(event => (
              <GridItem column={1} key={event.infomation.vol}>
                <EventCard {...event} />
              </GridItem>
            ))}
          </GridCcntainer>
        </SectionContainer>
      </ContentsInner>
    </ContentsCcntainer>
  </LayoutContainer>
)

export default IndexPage
