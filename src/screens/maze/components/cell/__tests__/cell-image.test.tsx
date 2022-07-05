import React from 'react';
import { render } from '@testing-library/react';
import {
  MAZE_COLUMN_LAST_CELL,
  MAZE_ROW_LAST_CELL,
} from '@screens/maze/helpers';
import { CellImage } from '../cell-image';

describe('cell image component', () => {
  it('should return null if avatar is not positioned inside the cell', () => {
    const avatarPosition = { x: 0, y: 0 };
    const imageDimension = 100;
    const cellX = 0;
    const cellY = 2;

    const result = render(
      <CellImage
        avatarPosition={avatarPosition}
        height={imageDimension}
        width={imageDimension}
        x={cellX}
        y={cellY}
      />,
    );

    expect(result.container.childElementCount).toBe(0);
  });

  it('should return green piping image if the cell is the exit cell, and avatar is not positioned inside the cell', () => {
    const avatarPosition = { x: 0, y: 0 };
    const imageDimension = 100;
    const cellX = MAZE_ROW_LAST_CELL;
    const cellY = MAZE_COLUMN_LAST_CELL;

    const result = render(
      <CellImage
        avatarPosition={avatarPosition}
        height={imageDimension}
        width={imageDimension}
        x={cellX}
        y={cellY}
      />,
    );

    const greenPipingImage = result.getByTestId('green-piping-image');

    expect(greenPipingImage).toBeDefined();
  });

  it('should return mario entering piping image if the cell is the exit cell, and avatar is positioned inside the cell', () => {
    const avatarPosition = { x: MAZE_ROW_LAST_CELL, y: MAZE_COLUMN_LAST_CELL };
    const imageDimension = 100;
    const cellX = MAZE_ROW_LAST_CELL;
    const cellY = MAZE_COLUMN_LAST_CELL;

    const result = render(
      <CellImage
        avatarPosition={avatarPosition}
        height={imageDimension}
        width={imageDimension}
        x={cellX}
        y={cellY}
      />,
    );

    const marioEnteringPipingImage = result.getByTestId(
      'mario-entering-piping-image',
    );

    expect(marioEnteringPipingImage).toBeDefined();
  });

  it('should return mario avatar image if the cell is not the exit cell, and avatar is positioned inside the cell', () => {
    const avatarPosition = { x: 0, y: 0 };
    const imageDimension = 100;
    const cellX = avatarPosition.x;
    const cellY = avatarPosition.y;

    const result = render(
      <CellImage
        avatarPosition={avatarPosition}
        height={imageDimension}
        width={imageDimension}
        x={cellX}
        y={cellY}
      />,
    );

    const marioAvatarImage = result.getByTestId('mario-avatar-image');

    expect(marioAvatarImage).toBeDefined();
  });
});
