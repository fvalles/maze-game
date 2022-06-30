import React, { FunctionComponent } from 'react';
import { checkAvatarPresence, isMazeExitCell } from '../../helpers';
import marioAvatar from '../../../../assets/mario-bros.png';
import piping from '../../../../assets/piping.png';
import marioEnteringPiping from '../../../../assets/mario-entering-piping.gif';
import { CellProps } from '../../types';

/**
 * Types
 */

interface CellImageProps
  extends Omit<CellProps, 'bottom' | 'left' | 'right' | 'top'> {}

/**
 * Constants
 */

const GREEN_PIPING_SCALE = 0.9;
const MARIO_AVATAR_SCALE = 0.75;
const MARIO_ENTERING_PIPING_SCALE = 0.8;

/**
 * CellImage
 */

export const CellImage: FunctionComponent<CellImageProps> = ({
  avatarPosition,
  height,
  width,
  x,
  y,
}) => {
  if (isMazeExitCell(x, y) && !checkAvatarPresence(avatarPosition, x, y)) {
    return (
      <img
        alt="green piping"
        height={height * GREEN_PIPING_SCALE}
        src={piping}
        width={width * GREEN_PIPING_SCALE}
      />
    );
  }

  if (isMazeExitCell(x, y)) {
    return (
      <img
        alt="mario entering piping"
        height={height * MARIO_ENTERING_PIPING_SCALE}
        src={marioEnteringPiping}
        width={width * MARIO_ENTERING_PIPING_SCALE}
      />
    );
  }

  if (checkAvatarPresence(avatarPosition, x, y)) {
    return (
      <img
        alt="mario avatar"
        height={height * MARIO_AVATAR_SCALE}
        src={marioAvatar}
        width={width * MARIO_AVATAR_SCALE}
      />
    );
  }

  return null;
};
