import styled from 'styled-components';
import { TypographyProps } from './common';

export const H2 = styled.h2<TypographyProps>`
  color: ${({ color = 'text', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.light}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 40px;
  line-height: 44px;
`;
