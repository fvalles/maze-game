import React, { FunctionComponent } from 'react';
import { DefaultTheme, ThemeProvider as Provider } from 'styled-components';
import { Fonts } from '.';
import { Colors } from './colors';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({
  children,
}) => (
  <Provider
    theme={
      {
        Colors,
        Fonts,
      } as DefaultTheme
    }>
    {children}
  </Provider>
);
