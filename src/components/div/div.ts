import styled, { css } from 'styled-components';

/**
 * Types
 */

interface DivProps {
  /** Div align items property */
  alignItems?: string;
  /** Div box-shadow property */
  boxShadow?: string;
  /** Div display property */
  display?: string;
  /** Div flex-direction property */
  flexDirection?: string;
  /** Div height */
  height?: string;
  /** Div justify-content property */
  justifyContent?: string;
  /** Div margin */
  margin?: string;
  /** Div padding */
  padding?: string;
  /** Div width. Default value is 100% */
  width?: string;
}

/**
 * Div
 */

export const Div = styled.div<DivProps>`
  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
  ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: ${boxShadow};
    `}
  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `}
    ${({ flexDirection }) =>
    flexDirection &&
    css`
      flex-direction: ${flexDirection};
    `}
    ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
    ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  width: ${({ width = '100%' }) => width};
`;
