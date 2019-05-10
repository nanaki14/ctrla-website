import styled from 'styled-components'
import { mq } from '../styles/'

export const Spercer = styled.div`
  height: ${props => props.pcHeight}px;
  ${mq.small`
    height: ${props => props.spHeight}px;
  `}
`
