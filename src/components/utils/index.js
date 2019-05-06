import {createElement} from 'react'

export const nl2br = (text) => {
  const regex = /(\n)/g
  return text.split(regex).map((line, index) => (line.match(regex) ? createElement('br', { key: index }) : line))
}