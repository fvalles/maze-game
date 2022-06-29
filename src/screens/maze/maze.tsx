import React, { FunctionComponent } from 'react';
import generator from 'generate-maze';
import styled from 'styled-components';
import { BORDER_WIDTH, getWindowDimension } from './helpers';
import { Cell } from './components/cell';

/**
 * Types
 */

interface MazeType {
  x: number;
  y: number;
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
  set: number;
}

interface MazeWithKey {
  key: number;
  row: MazeType[];
}

interface WrapperProps {
  height: number;
  width: number;
}

/**
 * Constants
 */

/** The maze box shadow is needed to paint the four external borders with a solid line */
const MAZE_SHADOW = `${BORDER_WIDTH} ${BORDER_WIDTH}, -${BORDER_WIDTH} -${BORDER_WIDTH}, ${BORDER_WIDTH} -${BORDER_WIDTH}, -${BORDER_WIDTH} ${BORDER_WIDTH}`;

const MAZE_SIZE = 12;

/**
 * Styled Components
 */

const MazeWrapper = styled.div<WrapperProps>`
  box-shadow: ${MAZE_SHADOW};
  flex-direction: column;
  justify-content: center;
  display: flex;
  ${({ height, width }) => `
    height: ${height}px;
    width: ${width}px;
  `}
`;

const MazeRow = styled.div`
  display: flex;
`;

const ScreenWrapper = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

/**
 * Maze
 */

export const Maze: FunctionComponent = () => {
  /** I decided to create a square maze, setting the same value to maze height and width */
  const maze: MazeType[][] = generator(MAZE_SIZE);
  const mazeWithKey: MazeWithKey[] = maze.map((mazeRow, index) => ({
    row: mazeRow,
    key: index,
  }));
  const mazeDimension = getWindowDimension() * 0.8;
  const cellDimension = mazeDimension / MAZE_SIZE;

  return (
    <ScreenWrapper>
      <MazeWrapper height={mazeDimension} width={mazeDimension}>
        {mazeWithKey.map(({ key, row }) => (
          <MazeRow key={key}>
            {row.map(({ bottom, left, right, top, x, y }) => (
              <Cell
                bottom={bottom}
                height={cellDimension}
                key={`${x} ${y}`}
                left={left}
                right={right}
                top={top}
                width={cellDimension}
              />
            ))}
          </MazeRow>
        ))}
      </MazeWrapper>
    </ScreenWrapper>
  );
};
