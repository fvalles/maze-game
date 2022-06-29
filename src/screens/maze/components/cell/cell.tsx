import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import {
  BORDER_WIDTH,
  checkAvatarPresence,
  getCellBoxShadow,
} from '../../helpers';
import marioAvatar from '../../../../assets/mario-bros.png';
import { AvatarPosition, MazeType } from '../../types';

/**
 * Types
 */

interface CellProps
  extends Pick<MazeType, 'bottom' | 'left' | 'right' | 'top'> {
  avatarPosition: AvatarPosition;
  height: number;
  width: number;
  x: number;
  y: number;
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
  height: cellHeight,
  left: leftWall,
  right: rightWall,
  top: topWall,
  width: cellWidth,
  x: cellX,
  y: cellY,
}) => {
  const boxShadow = getCellBoxShadow(bottomWall, leftWall, rightWall, topWall);

  return (
    <Wrapper
      bottomBorder={bottomWall}
      boxShadow={boxShadow}
      height={cellHeight}
      leftBorder={leftWall}
      rightBorder={rightWall}
      topBorder={topWall}
      width={cellWidth}>
      {checkAvatarPresence(avatarPosition, cellX, cellY) && (
        <img
          alt="player avatar"
          height={cellHeight * 0.9}
          src={marioAvatar}
          width={cellWidth * 0.9}
        />
      )}
    </Wrapper>
  );
};
