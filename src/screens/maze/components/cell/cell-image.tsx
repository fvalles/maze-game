import React, { FunctionComponent } from 'react';
import { CellProps } from '@screens/maze/types';
import { checkAvatarPresence, isMazeExitCell } from '@screens/maze/helpers';
import marioAvatarPng from '../../../../assets/mario-bros.png';
import marioAvatarWebp from '../../../../assets/mario-bros.webp';
import marioEnteringPipingGif from '../../../../assets/mario-entering-piping.gif';
import marioEnteringPipingWebp from '../../../../assets/mario-entering-piping.webp';
import pipingPng from '../../../../assets/piping.png';
import pipingWebp from '../../../../assets/piping.webp';

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
      /** I wrap this and the following img components with <picture> html tag to show WebP images if browser supports them.
       * This is better for SEO/SEM and to use lighter image files */
      <picture>
        <source srcSet={pipingWebp} type="image/webp" />
        <img
          alt="green piping"
          data-testid="green-piping-image"
          height={height * GREEN_PIPING_SCALE}
          src={pipingPng}
          width={width * GREEN_PIPING_SCALE}
        />
      </picture>
    );
  }

  if (isMazeExitCell(x, y) && checkAvatarPresence(avatarPosition, x, y)) {
    return (
      <picture>
        <source srcSet={marioEnteringPipingWebp} type="image/webp" />
        <img
          alt="mario entering piping"
          data-testid="mario-entering-piping-image"
          height={height * MARIO_ENTERING_PIPING_SCALE}
          src={marioEnteringPipingGif}
          width={width * MARIO_ENTERING_PIPING_SCALE}
        />
      </picture>
    );
  }

  if (checkAvatarPresence(avatarPosition, x, y)) {
    return (
      <picture>
        <source srcSet={marioAvatarWebp} type="image/webp" />
        <img
          alt="mario avatar"
          data-testid="mario-avatar-image"
          height={height * MARIO_AVATAR_SCALE}
          src={marioAvatarPng}
          width={width * MARIO_AVATAR_SCALE}
        />
      </picture>
    );
  }

  return null;
};
