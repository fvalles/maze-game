import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import { fireEvent, render } from '@testing-library/react';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { WinModalContent } from '..';

describe('win modal content', () => {
  it('should navigate to main screen when main menu button button is clicked', async () => {
    const mockedUsedNavigate = jest.fn();

    jest
      .spyOn(router, 'useNavigate')
      .mockImplementation(() => mockedUsedNavigate);

    const avatarMoves = 40;
    const setAvatarMoves = jest.fn();
    const setAvatarPosition = jest.fn();
    const setModalIsOpen = jest.fn();

    const result = render(
      <ThemeProvider>
        <BrowserRouter>
          <WinModalContent
            avatarMoves={avatarMoves}
            setAvatarMoves={setAvatarMoves}
            setAvatarPosition={setAvatarPosition}
            setModalIsOpen={setModalIsOpen}
          />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const mainMenuButton = result.getByTestId('win-modal-main-menu-button');
    expect(mainMenuButton).toBeDefined();

    fireEvent.click(mainMenuButton);

    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/');
  });

  it('should restart game when restart button button is clicked', async () => {
    const avatarMoves = 40;
    const setAvatarMoves = jest.fn();
    const setAvatarPosition = jest.fn();
    const setModalIsOpen = jest.fn();

    const result = render(
      <ThemeProvider>
        <BrowserRouter>
          <WinModalContent
            avatarMoves={avatarMoves}
            setAvatarMoves={setAvatarMoves}
            setAvatarPosition={setAvatarPosition}
            setModalIsOpen={setModalIsOpen}
          />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const restartGameButton = result.getByTestId('win-modal-restart-button');
    expect(restartGameButton).toBeDefined();

    fireEvent.click(restartGameButton);

    expect(setAvatarMoves).toBeCalledTimes(1);
    expect(setAvatarMoves).toHaveBeenCalledWith(0);
    expect(setAvatarPosition).toBeCalledTimes(1);
    expect(setAvatarPosition).toHaveBeenCalledWith({ x: 0, y: 0 });
    expect(setModalIsOpen).toBeCalledTimes(1);
    expect(setModalIsOpen).toHaveBeenCalledWith(false);
  });
});
