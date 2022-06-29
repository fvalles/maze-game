import { AvatarPosition } from '../types';

/**
 * Constants
 */

export const BORDER_WIDTH = '3px';

export const MAZE_SIZE = 12;

export const MAZE_LAST_CELL = MAZE_SIZE - 1;

export const MAZE_FIRST_CELL = 0;

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
    } ${BORDER_WIDTH} ${BORDER_WIDTH}`;
  }

  if (top && left) {
    boxShadow = `${
      boxShadow ? `${boxShadow}, ` : ''
    } -${BORDER_WIDTH} -${BORDER_WIDTH}`;
  }

  if (top && right) {
    boxShadow = `${
      boxShadow ? `${boxShadow}, ` : ''
    } ${BORDER_WIDTH} -${BORDER_WIDTH}`;
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
