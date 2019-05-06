import React from 'react'
// import { Link } from 'gatsby'

import LayoutContainer from '../components/utils/LayoutContainer'
import { ContentsCcntainer, ContentsInner, SectionContainer, GridCcntainer, GridItem } from '../components/utils/Containers'
import Seo from '../components/utils/Seo'
import Hero from '../components/molecules/Hero'

const IndexPage = () => (
  <LayoutContainer>
    <Seo title="Top" keywords={[`Ctrl+A`, `ctrla`, `club event`, `akihabara`, `dj`, `vj`]} />
    <Hero />
    <ContentsCcntainer>
      <ContentsInner>

        <SectionContainer>
          <GridCcntainer>
            <GridItem column={1}></GridItem>
            <GridItem column={2}></GridItem>
          </GridCcntainer>
        </SectionContainer>

        <SectionContainer>
          <GridCcntainer>
            <GridItem column={1}></GridItem>
            <GridItem column={2}></GridItem>
          </GridCcntainer>
        </SectionContainer>

      </ContentsInner>
    </ContentsCcntainer>
  </LayoutContainer>
)

export default IndexPage
