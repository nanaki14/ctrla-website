import { css } from 'styled-components'

const mixins = {
  text_hidden: css`
    overflow: hidden;
    text-indent: 100%;
    white-space: nowrap;
  `,
  text_ellipsis: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
  font_propmpt: css`
    font-family: 'Prompt', sans-serif;
  `
}

export default mixins
