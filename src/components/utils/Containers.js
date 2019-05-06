import styled from 'styled-components'

export const GloabContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 100px ${props => props.theme.sizes.pc.side_padding}px;;
`

export const SectionContainer = styled.section`
  & + & {
    margin-top: 100px;
  }
`

// ===========================
// Grid
export const GridCcntainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: -100px -20px 0;
`

export const GridItem = styled.div`
  width: ${(props) => `calc(((100% / 3) * ${props.column}) - (20px * 2))`};
  margin: 100px 20px 0;
`