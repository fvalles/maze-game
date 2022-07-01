import { palette } from './palette';

export const Colors = {
  // color names are based on https://colornamer.netlify.app/
  buttonBackground: palette.artfulRed,
  modalBackground: palette.crystalCut,
  restartButtonBackground: palette.janitor,
  text: palette.blackMarket,
  white: palette.white,
};

export type ColorsType = typeof Colors;
export type KeyColors = keyof ColorsType;
