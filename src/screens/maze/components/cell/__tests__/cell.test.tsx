import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { BORDER_WIDTH } from '@screens/maze/helpers';
import { Cell } from '..';
import { BORDER_STYLE } from '../cell';

/** In this describe test I am testing cell css properties, while cell image component logic is tested in 'cell-image.test.tsx' file */
describe('cell component', () => {
  it('should render with correct border and box-shadow css properties when bottomWall and leftWall are true', () => {
    const avatarPosition = { x: 0, y: 0 };
    const cellDimension = 100;

    const result = renderer
      .create(
        <Cell
          avatarPosition={avatarPosition}
          bottom
          height={cellDimension}
          left
          right={false}
          top={false}
          width={cellDimension}
          x={0}
          y={0}
        />,
      )
      .toJSON();

    expect(result).toHaveStyleRule('align-items', 'center');
    expect(result).toHaveStyleRule('border-bottom', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-left', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-right', '0');
    expect(result).toHaveStyleRule('border-top', '0');
    expect(result).toHaveStyleRule(
      'box-shadow',
      `-${BORDER_WIDTH} ${BORDER_WIDTH}`,
    );
    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('height', `${cellDimension}px`);
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toHaveStyleRule('width', `${cellDimension}px`);
  });

  it('should render with correct border and box-shadow css properties when bottomWall and rightWall are true', () => {
    const avatarPosition = { x: 0, y: 0 };
    const cellDimension = 100;

    const result = renderer
      .create(
        <Cell
          avatarPosition={avatarPosition}
          bottom
          height={cellDimension}
          left={false}
          right
          top={false}
          width={cellDimension}
          x={0}
          y={0}
        />,
      )
      .toJSON();

    expect(result).toHaveStyleRule('align-items', 'center');
    expect(result).toHaveStyleRule('border-bottom', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-left', '0');
    expect(result).toHaveStyleRule('border-right', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-top', '0');
    expect(result).toHaveStyleRule(
      'box-shadow',
      `${BORDER_WIDTH} ${BORDER_WIDTH}`,
    );
    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('height', `${cellDimension}px`);
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toHaveStyleRule('width', `${cellDimension}px`);
  });

  it('should render with correct border and box-shadow css properties when topWall and leftWall are true', () => {
    const avatarPosition = { x: 0, y: 0 };
    const cellDimension = 100;

    const result = renderer
      .create(
        <Cell
          avatarPosition={avatarPosition}
          bottom={false}
          height={cellDimension}
          left
          right={false}
          top
          width={cellDimension}
          x={0}
          y={0}
        />,
      )
      .toJSON();

    expect(result).toHaveStyleRule('align-items', 'center');
    expect(result).toHaveStyleRule('border-bottom', '0');
    expect(result).toHaveStyleRule('border-left', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-right', '0');
    expect(result).toHaveStyleRule('border-top', BORDER_STYLE);
    expect(result).toHaveStyleRule(
      'box-shadow',
      `-${BORDER_WIDTH} -${BORDER_WIDTH}`,
    );
    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('height', `${cellDimension}px`);
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toHaveStyleRule('width', `${cellDimension}px`);
  });

  it('should render with correct border and box-shadow css properties when topWall and rightWall are true', () => {
    const avatarPosition = { x: 0, y: 0 };
    const cellDimension = 100;

    const result = renderer
      .create(
        <Cell
          avatarPosition={avatarPosition}
          bottom={false}
          height={cellDimension}
          left={false}
          right
          top
          width={cellDimension}
          x={0}
          y={0}
        />,
      )
      .toJSON();

    expect(result).toHaveStyleRule('align-items', 'center');
    expect(result).toHaveStyleRule('border-bottom', '0');
    expect(result).toHaveStyleRule('border-left', '0');
    expect(result).toHaveStyleRule('border-right', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-top', BORDER_STYLE);
    expect(result).toHaveStyleRule(
      'box-shadow',
      `${BORDER_WIDTH} -${BORDER_WIDTH}`,
    );
    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('height', `${cellDimension}px`);
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toHaveStyleRule('width', `${cellDimension}px`);
  });

  it('should render with correct border and box-shadow css properties when bottomWall, leftWall and rightWall are true', () => {
    const avatarPosition = { x: 0, y: 0 };
    const cellDimension = 100;

    const result = renderer
      .create(
        <Cell
          avatarPosition={avatarPosition}
          bottom
          height={cellDimension}
          left
          right
          top={false}
          width={cellDimension}
          x={0}
          y={0}
        />,
      )
      .toJSON();

    expect(result).toHaveStyleRule('align-items', 'center');
    expect(result).toHaveStyleRule('border-bottom', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-left', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-right', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-top', '0');
    expect(result).toHaveStyleRule(
      'box-shadow',
      `-${BORDER_WIDTH} ${BORDER_WIDTH},${BORDER_WIDTH} ${BORDER_WIDTH}`,
    );
    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('height', `${cellDimension}px`);
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toHaveStyleRule('width', `${cellDimension}px`);
  });

  it('should render with correct border and box-shadow css properties when topWall, leftWall and rightWall are true', () => {
    const avatarPosition = { x: 0, y: 0 };
    const cellDimension = 100;

    const result = renderer
      .create(
        <Cell
          avatarPosition={avatarPosition}
          bottom={false}
          height={cellDimension}
          left
          right
          top
          width={cellDimension}
          x={0}
          y={0}
        />,
      )
      .toJSON();

    expect(result).toHaveStyleRule('align-items', 'center');
    expect(result).toHaveStyleRule('border-bottom', '0');
    expect(result).toHaveStyleRule('border-left', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-right', BORDER_STYLE);
    expect(result).toHaveStyleRule('border-top', BORDER_STYLE);
    expect(result).toHaveStyleRule(
      'box-shadow',
      `-${BORDER_WIDTH} -${BORDER_WIDTH},${BORDER_WIDTH} -${BORDER_WIDTH}`,
    );
    expect(result).toHaveStyleRule('display', 'flex');
    expect(result).toHaveStyleRule('height', `${cellDimension}px`);
    expect(result).toHaveStyleRule('justify-content', 'center');
    expect(result).toHaveStyleRule('width', `${cellDimension}px`);
  });
});
