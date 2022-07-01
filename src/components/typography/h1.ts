import styled from 'styled-components';
import { TypographyProps } from './common';

export const H1 = styled.h1<TypographyProps>`
  color: ${({ color = 'text', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 58px;
  line-height: 62px;
`;
