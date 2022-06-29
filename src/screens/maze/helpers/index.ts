/**
 * Constants
 */

export const BORDER_WIDTH = '3px';

/**
 * Helpers
 */

/** This helper gets the cell box shadow property that is used to fill the corners that are empty */
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
