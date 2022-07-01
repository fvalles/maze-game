import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import generator from 'generate-maze';
import styled from 'styled-components';
import { Modal } from '@components/modal';
import { Cell } from './components/cell';
import { AvatarPosition, MazeType, MazeWithKey } from './types';
import {
  BORDER_WIDTH,
  getWindowDimension,
  isMazeExitCell,
  MAZE_COLUMN_FIRST_CELL,
  MAZE_COLUMN_LAST_CELL,
  MAZE_ROW_FIRST_CELL,
  MAZE_ROW_LAST_CELL,
  MAZE_SIZE,
} from './helpers';
import { WinModalContent } from './components/win-modal-content';

/**
 * Types
 */

interface WrapperProps {
  height: number;
  width: number;
}

/**
 * Constants
 */

const MARIO_ANIMATION_DURATION = 2000;

export const MAZE_DIMENSION = getWindowDimension() * 0.8;
export const CELL_DIMENSION = MAZE_DIMENSION / MAZE_SIZE;

/** The maze box shadow is needed to paint the four external borders with a solid line */
const MAZE_SHADOW = `${BORDER_WIDTH} ${BORDER_WIDTH}, -${BORDER_WIDTH} -${BORDER_WIDTH}, ${BORDER_WIDTH} -${BORDER_WIDTH}, -${BORDER_WIDTH} ${BORDER_WIDTH}`;

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
  const [avatarPosition, setAvatarPosition] = useState<AvatarPosition>({
    x: 0,
    y: 0,
  });
  const [avatarMoves, setAvatarMoves] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  /** Eller's Algorithm was used to generate the maze.
   * I decided to create a square maze, setting the same value to maze height and width */
  const maze: MazeType[][] = generator(MAZE_SIZE);
  const mazeWithKey: MazeWithKey[] = maze.map((mazeRow, index) => ({
    row: mazeRow,
    key: index,
  }));

  const shouldMoveAvatar = useCallback(
    (e: KeyboardEvent): void => {
      const { key: keyPressed } = e;
      const { x, y } = avatarPosition;

      if (keyPressed === 'ArrowDown') {
        const { bottom: bottowmWall } = maze[y][x];

        if (!bottowmWall && y < MAZE_COLUMN_LAST_CELL) {
          setAvatarMoves(avatarMoves + 1);
          setAvatarPosition({ ...avatarPosition, y: y + 1 });
        }
      } else if (keyPressed === 'ArrowLeft') {
        const { left: leftWall } = maze[y][x];

        if (!leftWall && x > MAZE_ROW_FIRST_CELL) {
          setAvatarMoves(avatarMoves + 1);
          setAvatarPosition({ ...avatarPosition, x: x - 1 });
        }
      } else if (keyPressed === 'ArrowRight') {
        const { right: rightWall } = maze[y][x];

        if (!rightWall && x < MAZE_ROW_LAST_CELL) {
          setAvatarMoves(avatarMoves + 1);
          setAvatarPosition({ ...avatarPosition, x: x + 1 });
        }
      } else if (keyPressed === 'ArrowUp') {
        const { top: topWall } = maze[y][x];

        if (!topWall && y > MAZE_COLUMN_FIRST_CELL) {
          setAvatarMoves(avatarMoves + 1);
          setAvatarPosition({ ...avatarPosition, y: y - 1 });
        }
      }
    },
    [avatarPosition],
  );

  useEffect(() => {
    document.addEventListener('keydown', shouldMoveAvatar, true);

    if (isMazeExitCell(avatarPosition.x, avatarPosition.y)) {
      document.removeEventListener('keydown', shouldMoveAvatar, true);

      setTimeout(() => {
        setModalIsOpen(true);
      }, MARIO_ANIMATION_DURATION);
    }

    return () => {
      document.removeEventListener('keydown', shouldMoveAvatar, true);
    };
  }, [avatarPosition]);

  return (
    <ScreenWrapper>
      <Modal
        height={MAZE_DIMENSION}
        isOpen={modalIsOpen}
        label="Game Over Modal"
        testId="game-over-modal"
        width={MAZE_DIMENSION}>
        <WinModalContent
          avatarMoves={avatarMoves}
          setAvatarMoves={setAvatarMoves}
          setAvatarPosition={setAvatarPosition}
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>
      <MazeWrapper height={MAZE_DIMENSION} width={MAZE_DIMENSION}>
        {mazeWithKey.map(({ key, row }) => (
          <MazeRow key={key}>
            {row.map(({ bottom, left, right, top, x, y }) => (
              <Cell
                avatarPosition={avatarPosition}
                bottom={bottom}
                height={CELL_DIMENSION}
                key={`${x} ${y}`}
                left={left}
                right={right}
                top={top}
                width={CELL_DIMENSION}
                x={x}
                y={y}
              />
            ))}
          </MazeRow>
        ))}
      </MazeWrapper>
    </ScreenWrapper>
  );
};
