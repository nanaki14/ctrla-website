import React from 'react'
// import { Link } from 'gatsby'

import LayoutContainer from '../components/utils/LayoutContainer'
import { ContentsCcntainer, ContentsInner, SectionContainer, GridCcntainer, GridItem } from '../components/utils/Containers'
import Seo from '../components/utils/Seo'
import SectionTitle from '../components/atoms/SectionTitle'

const IndexPage = () => (
  <LayoutContainer>
    <Seo title="Top" keywords={[`Ctrl+A`, `ctrla`, `club event`, `akihabara`, `dj`, `vj`]} />
    <ContentsCcntainer>
      <ContentsInner>

        <SectionContainer>
          <GridCcntainer>
            <GridItem column={3}>
              <SectionTitle>Events</SectionTitle>
            </GridItem>

            <GridItem column={1}>
              
            </GridItem>
          </GridCcntainer>
        </SectionContainer>

      </ContentsInner>
    </ContentsCcntainer>
  </LayoutContainer>
)

export default IndexPage
