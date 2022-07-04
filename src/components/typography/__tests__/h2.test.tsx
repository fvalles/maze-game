import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { H2 } from '../h2';

describe('h2 component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H2>Lorem ipsum</H2>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '40px');
    expect(result).toHaveStyleRule('line-height', '44px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom white color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <H2 color="white">Lorem ipsum</H2>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '40px');
    expect(result).toHaveStyleRule('line-height', '44px');
    expect(result).toMatchSnapshot();
  });
});
