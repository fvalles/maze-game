import React from 'react';
import { ThemeProvider } from '@core/theme/theme-provider';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Button } from '..';

describe('button component', () => {
  it('should render with title, onClick function and default background and text colors', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Button
            onClick={jest.fn()}
            testId="some-test-id"
            title="Some Title"
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('background-color', '#B20600');
    expect(result).toHaveStyleRule('border-radius', '4px');
    expect(result).toHaveStyleRule('padding-bottom', '16px');
    expect(result).toHaveStyleRule('padding-top', '16px');
    expect(result).toHaveStyleRule('width', '200px');

    const buttonText = result.children[0];
    expect(buttonText).toHaveStyleRule('color', '#FFFFFF');
    expect(result).toMatchSnapshot();
  });

  it('should render with title, onClick function and custom background and text', () => {
    const result = renderer
      .create(
        <ThemeProvider>
          <Button
            background="white"
            color="text"
            onClick={jest.fn()}
            testId="some-test-id"
            title="Some Title"
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(result).toHaveStyleRule('background-color', '#FFFFFF');
    expect(result).toHaveStyleRule('border-radius', '4px');
    expect(result).toHaveStyleRule('padding-bottom', '16px');
    expect(result).toHaveStyleRule('padding-top', '16px');
    expect(result).toHaveStyleRule('width', '200px');

    const buttonText = result.children[0];
    expect(buttonText).toHaveStyleRule('color', '#212240');
    expect(result).toMatchSnapshot();
  });
});
