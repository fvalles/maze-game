import styled from 'styled-components';
import { TypographyProps } from './common';

export const Body = styled.p<TypographyProps>`
  color: ${({ color = 'text', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.light}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 20px;
  line-height: 24px;
`;
