import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ThemeWrapper from '../styles'
import { GloabContainer } from '../utils/Containers'
import Header from '../organisms/Header'


const LayoutContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeWrapper>
        <GloabContainer>
          <Header />
          <div>
            {children}
          </div>
        </GloabContainer>
      </ThemeWrapper>
    )}
  />
)

export default LayoutContainer
