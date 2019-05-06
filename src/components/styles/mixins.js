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
  font_prompt: css`
    font-family: 'Prompt', sans-serif;
  `,
  font_h1: css`
    font-size: 2.8rem;
    line-height: ${38 / 28};
  `,
  font_h2: css`
    font-size: 2rem;
    line-height: ${30 / 20};
  `,
  font_h3: css`
    font-size: 1.6rem;
    line-height: ${32 / 16};
  `,
  font_text: css`
    font-size: 1.4rem;
    line-height: ${28 / 14};
  `,
  font_subtext: css`
    font-size: 1.2rem;
    line-height: ${24 / 12};
  `
}

export default mixins
