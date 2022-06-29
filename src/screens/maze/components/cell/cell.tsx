import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BORDER_WIDTH, getCellBoxShadow } from '../../helpers';

/**
 * Types
 */

interface CellProps {
  bottom: boolean;
  height: number;
  left: boolean;
  right: boolean;
  top: boolean;
  width: number;
}

interface WrapperProps extends Pick<CellProps, 'height' | 'width'> {
  bottomBorder: boolean;
  boxShadow: string;
  leftBorder: boolean;
  rightBorder: boolean;
  topBorder: boolean;
}

/**
 * Constants
 */

const BORDER_STYLE = `${BORDER_WIDTH} solid black`;

/**
 * Styled Components
 */

const Wrapper = styled.div<WrapperProps>`
  ${({
    bottomBorder,
    boxShadow,
    height,
    leftBorder,
    rightBorder,
    topBorder,
    width,
  }) => `
    border-bottom: ${bottomBorder ? BORDER_STYLE : '0'};
    border-left: ${leftBorder ? BORDER_STYLE : '0'};
    border-right: ${rightBorder ? BORDER_STYLE : '0'};
    border-top: ${topBorder ? BORDER_STYLE : '0'};
    box-shadow: ${boxShadow};
    height: ${height}px;
    width: ${width}px;
  `}
`;

/**
 * Cell
 */

export const Cell: FunctionComponent<CellProps> = ({
  bottom,
  height,
  left,
  right,
  top,
  width,
}) => {
  const boxShadow = getCellBoxShadow(bottom, left, right, top);

  return (
    <Wrapper
      bottomBorder={bottom}
      boxShadow={boxShadow}
      height={height}
      leftBorder={left}
      rightBorder={right}
      topBorder={top}
      width={width}
    />
  );
};
