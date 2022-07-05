import { AvatarPosition, UserScoreResponse } from '../types';

/**
 * Constants
 */

export const API_ENDPOINT =
  'https://run.mocky.io/v3/7bd95e5c-ede7-4756-8c39-0c9ce454a5de';
export const BORDER_WIDTH = '3px';
export const MAZE_SIZE = 12;
export const MAZE_COLUMN_LAST_CELL = MAZE_SIZE - 1;
export const MAZE_ROW_LAST_CELL = MAZE_SIZE - 1;
export const MAZE_COLUMN_FIRST_CELL = 0;
export const MAZE_ROW_FIRST_CELL = 0;

/**
 * Helpers
 */

/** This helper checks if the avatar should be rendered inside a Maze Cell */
export const checkAvatarPresence = (
  avatarPosition: AvatarPosition,
  x: number,
  y: number,
): boolean => {
  const { x: avatarX, y: avatarY } = avatarPosition;

  if (avatarX === x && avatarY === y) {
    return true;
  }

  return false;
};

/** This helper gets the cell box shadow property that is used to fill empty corners */
export const getCellBoxShadow = (
  bottom: boolean,
  left: boolean,
  right: boolean,
  top: boolean,
): string => {
  let boxShadow = '';

  if (bottom && left) {
    boxShadow = `-${BORDER_WIDTH} ${BORDER_WIDTH}`;
  }

  if (bottom && right) {
    boxShadow = `${
      boxShadow ? `${boxShadow}, ` : ''
    }${BORDER_WIDTH} ${BORDER_WIDTH}`;
  }

  if (top && left) {
    boxShadow = `${
      boxShadow ? `${boxShadow}, ` : ''
    }-${BORDER_WIDTH} -${BORDER_WIDTH}`;
  }

  if (top && right) {
    boxShadow = `${
      boxShadow ? `${boxShadow}, ` : ''
    }${BORDER_WIDTH} -${BORDER_WIDTH}`;
  }

  return boxShadow;
};

/** This helper gets the smaller dimension between innerWidth and innerHeight and returns it */
export const getWindowDimension = (): number => {
  const { innerHeight, innerWidth } = window;

  if (innerWidth < innerHeight) {
    return innerWidth;
  }

  return innerHeight;
};

/** This helper checks if the current cell is the maze end cell (bottom right cell) */
export const isMazeExitCell = (x: number, y: number): boolean =>
  MAZE_ROW_LAST_CELL === x && MAZE_COLUMN_LAST_CELL === y;

/** This helpers send the user score to a fictitious API endpoint */
export const fetchUserScore = async (
  score: number,
): Promise<UserScoreResponse> => {
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify({
      score,
      userId: 'hardcodedUserId',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  // eslint-disable-next-line no-console
  console.log('api response data', JSON.stringify(data));
  return data;
};
