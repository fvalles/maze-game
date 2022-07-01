import styled from 'styled-components';
import { TypographyProps } from './common';

export const ButtonText = styled.span<TypographyProps>`
  color: ${({ color = 'white', theme }) => theme.Colors[color]};
  font-family: ${({ theme }) => theme.Fonts.regular}, 'Avenir Next', 'Segoe UI',
    sans-serif;
  font-size: 20px;
  font-weight: bold;
  line-height: 16px;
`;
