import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BORDER_WIDTH, getCellBoxShadow } from '../../helpers';
import { CellProps } from '../../types';
import { CellImage } from './cell-image';

/**
 * Types
 */

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
    align-items: center;
    border-bottom: ${bottomBorder ? BORDER_STYLE : '0'};
    border-left: ${leftBorder ? BORDER_STYLE : '0'};
    border-right: ${rightBorder ? BORDER_STYLE : '0'};
    border-top: ${topBorder ? BORDER_STYLE : '0'};
    box-shadow: ${boxShadow};
    display: flex;
    justify-content: center;
    height: ${height}px;
    width: ${width}px;
  `}
`;

/**
 * Cell
 */

export const Cell: FunctionComponent<CellProps> = ({
  avatarPosition,
  bottom: bottomWall,
  height,
  left: leftWall,
  right: rightWall,
  top: topWall,
  width,
  x,
  y,
}) => {
  const boxShadow = getCellBoxShadow(bottomWall, leftWall, rightWall, topWall);

  return (
    <Wrapper
      bottomBorder={bottomWall}
      boxShadow={boxShadow}
      height={height}
      leftBorder={leftWall}
      rightBorder={rightWall}
      topBorder={topWall}
      width={width}>
      <CellImage
        avatarPosition={avatarPosition}
        height={height}
        width={width}
        x={x}
        y={y}
      />
    </Wrapper>
  );
};
