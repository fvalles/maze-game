import React, { FunctionComponent } from 'react';
import { Modal } from '@components/modal';
import { Div } from '@components/div';
import { Cell } from './components/cell';
import { MazeProps } from './types';
import { BORDER_WIDTH, getWindowDimension, MAZE_SIZE } from './helpers';
import { WinModalContent } from './components/win-modal-content';
import { useMaze } from './hooks/use-maze';

/**
 * Constants
 */

export const MAZE_DIMENSION = getWindowDimension() * 0.8;
export const CELL_DIMENSION = MAZE_DIMENSION / MAZE_SIZE;
/** The maze box shadow is needed to paint the four external borders with a solid line */
const MAZE_SHADOW = `${BORDER_WIDTH} ${BORDER_WIDTH}, -${BORDER_WIDTH} -${BORDER_WIDTH}, ${BORDER_WIDTH} -${BORDER_WIDTH}, -${BORDER_WIDTH} ${BORDER_WIDTH}`;

/**
 * Maze
 */

export const Maze: FunctionComponent<MazeProps> = ({
  bestScore,
  setBestScore,
}) => {
  const {
    avatarMoves,
    avatarPosition,
    mazeWithKey,
    modalIsOpen,
    setAvatarMoves,
    setAvatarPosition,
    setModalIsOpen,
  } = useMaze({ bestScore, setBestScore });

  return (
    <Div
      alignItems="center"
      display="flex"
      justifyContent="center"
      height="100vh"
      width="100vw">
      <Modal
        height={MAZE_DIMENSION}
        isOpen={modalIsOpen}
        label="Game Over Modal"
        testId="maze-game-over-modal"
        width={MAZE_DIMENSION}>
        <WinModalContent
          avatarMoves={avatarMoves}
          setAvatarMoves={setAvatarMoves}
          setAvatarPosition={setAvatarPosition}
          setModalIsOpen={setModalIsOpen}
        />
      </Modal>
      <Div
        boxShadow={MAZE_SHADOW}
        display="flex"
        flexDirection="column"
        height={`${MAZE_DIMENSION}px`}
        justifyContent="center"
        width={`${MAZE_DIMENSION}px`}>
        {mazeWithKey.map(({ key, row }) => (
          <Div display="flex" key={key}>
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
          </Div>
        ))}
      </Div>
    </Div>
  );
};
