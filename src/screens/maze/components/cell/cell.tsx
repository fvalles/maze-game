import React, { FunctionComponent } from 'react';
import { BORDER_WIDTH, getCellBoxShadow } from '@screens/maze/helpers';
import { CellProps } from '@screens/maze/types';
import styled from 'styled-components';
import { CellImage } from './cell-image';

/**
 * Types
 */

interface WrapperProps extends Pick<CellProps, 'height' | 'width'> {
  /** If true, bottom border will be drawn */
  bottomBorder: boolean;
  /** Cell box shadow property used to fill empty corners */
  boxShadow: string;
  /** If true, left border will be drawn */
  leftBorder: boolean;
  /** If true, right border will be drawn */
  rightBorder: boolean;
  /** If true, top border will be drawn */
  topBorder: boolean;
}

/**
 * Constants
 */

export const BORDER_STYLE = `${BORDER_WIDTH} solid black`;

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
    height: ${height}px;
    justify-content: center;
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
