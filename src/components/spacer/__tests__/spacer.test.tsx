import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Spacer } from '..';

describe('spacer component', () => {
  it('should render with default height', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Spacer />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('height', '32px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom height of 64px', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Spacer size={64} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('height', '64px');
    expect(result).toMatchSnapshot();
  });
});
