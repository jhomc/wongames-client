import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breakpoint = keyof DefaultBreakpoints

export type MatchMediaProps = {
  lessThan?: breakpoint
  greaterThan?: breakpoint
}

const mediaMatchModifier = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,

  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export default styled.div<MatchMediaProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && mediaMatchModifier.lessThan(lessThan)}
    ${!!greaterThan && mediaMatchModifier.greaterThan(greaterThan)}
  `}
`
