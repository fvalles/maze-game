import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import { render } from '@testing-library/react';
import generator from 'generate-maze';
import { BrowserRouter } from 'react-router-dom';
import { Maze } from '..';
import * as mazeHook from '../hooks/use-maze';
import {
  MAZE_COLUMN_LAST_CELL,
  MAZE_ROW_LAST_CELL,
  MAZE_SIZE,
} from '../helpers';
import { MazeType, MazeWithKey } from '../types';

describe('maze screen', () => {
  it('should render with initial avatar position', () => {
    const maze: MazeType[][] = generator(MAZE_SIZE);
    const mazeWithKey: MazeWithKey[] = maze.map((mazeRow, index) => ({
      row: mazeRow,
      key: index,
    }));

    jest.spyOn(mazeHook, 'useMaze').mockImplementationOnce(() => ({
      avatarMoves: 0,
      avatarPosition: { x: 0, y: 0 },
      mazeWithKey,
      modalIsOpen: false,
      setAvatarMoves: jest.fn(),
      setAvatarPosition: jest.fn(),
      setModalIsOpen: jest.fn(),
    }));

    const bestScore = 0;
    const setBestScore = jest.fn();

    const result = render(
      <ThemeProvider>
        <Maze bestScore={bestScore} setBestScore={setBestScore} />
      </ThemeProvider>,
    );

    const mazeContainer = result.queryByTestId('maze-screen-container');
    expect(mazeContainer).toBeDefined();

    const marioAvatarImage = result.queryByTestId('mario-avatar-image');
    expect(marioAvatarImage).toBeDefined();

    const greenPipingImage = result.queryByTestId('green-piping-image');
    expect(greenPipingImage).toBeDefined();

    const marioEnteringPipingImage = result.queryByTestId(
      'mario-entering-piping-image',
    );
    expect(marioEnteringPipingImage).toBeNull();

    const modalRestartButton = result.queryByTestId('win-modal-restart-button');
    const modalMainMenuButton = result.queryByTestId(
      'win-modal-main-menu-button',
    );
    expect(modalRestartButton).toBeNull();
    expect(modalMainMenuButton).toBeNull();
  });

  it('should render when avatar position is in the exit cell of the maze', () => {
    const maze: MazeType[][] = generator(MAZE_SIZE);
    const mazeWithKey: MazeWithKey[] = maze.map((mazeRow, index) => ({
      row: mazeRow,
      key: index,
    }));

    jest.spyOn(mazeHook, 'useMaze').mockImplementationOnce(() => ({
      avatarMoves: 40,
      avatarPosition: { x: MAZE_ROW_LAST_CELL, y: MAZE_COLUMN_LAST_CELL },
      mazeWithKey,
      modalIsOpen: true,
      setAvatarMoves: jest.fn(),
      setAvatarPosition: jest.fn(),
      setModalIsOpen: jest.fn(),
    }));

    const bestScore = 0;
    const setBestScore = jest.fn();

    const result = render(
      <ThemeProvider>
        <BrowserRouter>
          <Maze bestScore={bestScore} setBestScore={setBestScore} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const mazeContainer = result.queryByTestId('maze-screen-container');
    expect(mazeContainer).toBeDefined();

    const marioAvatarImage = result.queryByTestId('mario-avatar-image');
    expect(marioAvatarImage).toBeNull();

    const greenPipingImage = result.queryByTestId('green-piping-image');
    expect(greenPipingImage).toBeNull();

    const marioEnteringPipingImage = result.queryByTestId(
      'mario-entering-piping-image',
    );
    expect(marioEnteringPipingImage).toBeDefined();

    const modalRestartButton = result.queryByTestId('win-modal-restart-button');
    const modalMainMenuButton = result.queryByTestId(
      'win-modal-main-menu-button',
    );
    expect(modalRestartButton).toBeDefined();
    expect(modalMainMenuButton).toBeDefined();
  });
});
