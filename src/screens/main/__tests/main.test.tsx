import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import { fireEvent, render } from '@testing-library/react';
import * as router from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Main } from '..';

describe('main screen', () => {
  it('should render without score text component, when user bestScore is 0', () => {
    const bestScore = 0;

    const result = render(
      <ThemeProvider>
        <BrowserRouter>
          <Main bestScore={bestScore} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const bestScoreText = result.queryByText('Best score:');
    expect(bestScoreText).toBeNull();
  });

  it('should render with user best score text component', () => {
    const bestScore = 40;

    const result = render(
      <ThemeProvider>
        <BrowserRouter>
          <Main bestScore={bestScore} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const bestScoreText = result.queryByText(`Best score: ${bestScore} moves`);
    expect(bestScoreText).toBeTruthy();
  });

  it('should navigate to maze screen when start game button is clicked', async () => {
    const mockedUsedNavigate = jest.fn();

    jest
      .spyOn(router, 'useNavigate')
      .mockImplementation(() => mockedUsedNavigate);

    const bestScore = 40;

    const result = render(
      <ThemeProvider>
        <BrowserRouter>
          <Main bestScore={bestScore} />
        </BrowserRouter>
      </ThemeProvider>,
    );

    const startGameButton = result.getByTestId('main-start-game-button');
    expect(startGameButton).toBeDefined();

    fireEvent.click(startGameButton);

    expect(mockedUsedNavigate).toBeCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith('maze');
  });
});
