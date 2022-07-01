import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { KeyColors } from '../../core/theme/colors';
import { ButtonText } from '../typography/button-text';

/**
 * Types
 */

interface StyledButtonProps {
  background?: KeyColors;
}

interface ButtonProps {
  /** Button background color */
  background?: KeyColors;
  /** Button title color */
  color?: KeyColors;
  /** Action to execute when the button is clicked */
  onClick: () => void;
  /** String testId that renders a data-testid attribute in the DOM, used for testing. */
  testId: string;
  /** Text to be displayed inside the button */
  title: string;
}

/**
 * Styled Components
 */

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${({ background = 'buttonBackground', theme }) =>
    theme.Colors[background]};
  border-radius: 4px;
  padding-bottom: 16px;
  padding-top: 16px;
  width: 200px;
`;

/**
 * Button
 */

export const Button: FunctionComponent<ButtonProps> = ({
  background,
  color,
  onClick,
  testId,
  title,
}) => (
  <StyledButton background={background} data-testid={testId} onClick={onClick}>
    <ButtonText color={color}>{title}</ButtonText>
  </StyledButton>
);
