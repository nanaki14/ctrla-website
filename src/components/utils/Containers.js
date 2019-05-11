import styled from 'styled-components'
import { mq } from '../styles/'

export const GloabContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${mq.small`
    padding: 63px 0 0;
  `}
  > * {
    width: 100%;
  }
`

export const ContentsCcntainer = styled.div`
  background-color: ${props => props.theme.colors.background};
`

export const ContentsInner = styled.div`
  max-width: ${props => props.theme.sizes.pc.inner_width}px;
  margin: 0 auto;
  padding: 100px ${props => props.theme.sizes.pc.side_padding}px;
  ${mq.small`
    padding: 30px ${props => props.theme.sizes.sp.side_padding}% 63px;
  `}
`

export const SectionContainer = styled.section`
  & + & {
    margin-top: 100px;
    ${mq.small`
      margin-top: 69px;
    `}
  }
`

// ===========================
// Grid
export const GridCcntainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -100px -20px 0;
  ${mq.small`
    display: block;
    margin: 0;
  `}
`

export const GridItem = styled.div`
  width: ${props => `calc(((100% / 3) * ${props.column}) - (20px * 2))`};
  margin: 100px 20px 0;
  ${mq.small`
    width: 100%;
    margin: 0;
  `}
`
