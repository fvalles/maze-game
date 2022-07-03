import { useCallback, useEffect, useState } from 'react';
import generator from 'generate-maze';
import {
  fetchUserScore,
  isMazeExitCell,
  MAZE_COLUMN_FIRST_CELL,
  MAZE_COLUMN_LAST_CELL,
  MAZE_ROW_FIRST_CELL,
  MAZE_ROW_LAST_CELL,
  MAZE_SIZE,
} from '../helpers';
import { AvatarPosition, MazeProps, MazeType, MazeWithKey } from '../types';

/**
 * Types
 */

export interface MazeHookResponse {
  /** Amount of moves made by the avatar */
  avatarMoves: number;
  /** Avatar position inside the maze */
  avatarPosition: AvatarPosition;
  /** Generated maze with a key value added to be able to render each row with a map function */
  mazeWithKey: MazeWithKey[];
  /** Boolean that indicates if the modal is open */
  modalIsOpen: boolean;
  /** Function to set avatar moves */
  setAvatarMoves: (moves: number) => void;
  /** Function to set avatar position inside the maze */
  setAvatarPosition: (position: AvatarPosition) => void;
  /** Function to show or hide modal */
  setModalIsOpen: (visible: boolean) => void;
}

interface MazeHookProps extends MazeProps {}

/**
 * Constants
 */

const MARIO_ANIMATION_DURATION = 1800;

/**
 * useMaze custom hook
 */

export const useMaze = ({
  bestScore,
  setBestScore,
}: MazeHookProps): MazeHookResponse => {
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

      if (bestScore === 0 || avatarMoves < bestScore) {
        fetchUserScore(avatarMoves);
        setBestScore(avatarMoves);
      }

      setTimeout(() => {
        setModalIsOpen(true);
      }, MARIO_ANIMATION_DURATION);
    }

    return () => {
      document.removeEventListener('keydown', shouldMoveAvatar, true);
    };
  }, [avatarPosition]);

  return {
    avatarMoves,
    avatarPosition,
    mazeWithKey,
    modalIsOpen,
    setAvatarMoves,
    setAvatarPosition,
    setModalIsOpen,
  };
};
