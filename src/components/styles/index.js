import React from 'react'
import { ThemeProvider, css } from 'styled-components'
import colors from './colors'
import sizes from './sizes'
import easings from './easings'
import mixins from './mixins'
import GlobalStyles from './GlobalStyles'

const styles = {
  colors,
  sizes,
  easings,
  mixins
}

// mediaquery
// sample: ${mq.small`color: #000;`}

export const mq = Object.keys(sizes.mq).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes.mq[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})


function ThemeWrapper({ children }) {
  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={styles}>{children}</ThemeProvider>
    </div>
  )
}

export default ThemeWrapper
