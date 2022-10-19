import { RibbonProps } from './index'
import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components'
import { RibbonColors } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color }) => css`
    ${!!color && wrapperModifiers.color(theme, color)};
  `}
`
