import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Body } from '..';

describe('body component', () => {
  it('should render with default css properties', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Body>Lorem ipsum</Body>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#212240');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '20px');
    expect(result).toHaveStyleRule('line-height', '24px');
    expect(result).toMatchSnapshot();
  });

  it('should render with custom white color', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Body color="white">Lorem ipsum</Body>
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toHaveStyleRule(
      'font-family',
      "Avenir Light,'Avenir Next','Segoe UI', sans-serif",
    );
    expect(result).toHaveStyleRule('font-size', '20px');
    expect(result).toHaveStyleRule('line-height', '24px');
    expect(result).toMatchSnapshot();
  });
});
