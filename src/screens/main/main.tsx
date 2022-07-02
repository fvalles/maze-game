import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/button';
import { Spacer } from '@components/spacer';
import { H1, H3 } from '@components/typography';
import { MazeProps } from '@screens/maze/types';
import { Div } from '@components/div';
import marioRunningGif from '../../assets/mario-running.gif';
import marioRunningWebp from '../../assets/mario-running.webp';

/**
 * Types
 */

interface MainProps extends Pick<MazeProps, 'bestScore'> {}

/**
 * Main
 */

export const Main: FunctionComponent<MainProps> = ({ bestScore }) => {
  const navigate = useNavigate();

  return (
    <Div
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100vh">
      <H1>Maze Game</H1>
      {!!bestScore && (
        <>
          <Spacer size={50} />
          <H3>Best score: {bestScore} moves</H3>
        </>
      )}
      <Spacer size={100} />
      <Button
        onClick={() => {
          navigate('maze');
        }}
        testId="main-start-game-button"
        title="START GAME"
      />
      <Spacer size={50} />
      {/** I wrap img component with <picture> html tag to show WebP images if browser supports them.
       * This is better for SEO/SEM and to use lighter image files */}
      <picture>
        <source srcSet={marioRunningWebp} type="image/webp" />
        <img
          alt="mario running"
          height={130}
          src={marioRunningGif}
          width={132}
        />
      </picture>
    </Div>
  );
};
