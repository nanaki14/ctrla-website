import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { mq } from '../styles/'

const HeaderNav = () => {
  return (
    <nav>
      <List>
        <ListItem>
          <Link to="/#about">^ About</Link>
        </ListItem>
        <ListItem>
          <Link to="/#member">^ Member</Link>
        </ListItem>
        <ListItem>
          <Link to="/events">^ Events</Link>
        </ListItem>
        <ListItem>
          <a href="mailto:">^ Contact</a>
        </ListItem>
      </List>
    </nav>
  )
}

const List = styled.ul`
  display: flex;
  align-items: center;
  ${mq.small`
    display: none;
  `}
`

const ListItem = styled.li`
  margin-left: 24px;
  a {
    display: block;
    transition: 0.3s ${props => props.theme.easings.ease_out_cubic};
    font-weight: 300;
    ${props => props.theme.mixins.font_prompt}
    ${props => props.theme.mixins.font_text}
    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`

export default HeaderNav
