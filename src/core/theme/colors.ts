import { palette } from './palette';

export const Colors = {
  // color names are based on https://colornamer.netlify.app/
  text: palette.blackMarket,
};

export type ColorsType = typeof Colors;
export type KeyColors = keyof ColorsType;
