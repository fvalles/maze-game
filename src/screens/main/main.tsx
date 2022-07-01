import React, { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@components/button';
import { Spacer } from '@components/spacer';
import { H1, H3 } from '@components/typography';

/**
 * Types
 */

interface MainProps {
  bestScore: number;
}

/**
 * Styled Components
 */

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

/**
 * Main
 */

export const Main: FunctionComponent<MainProps> = ({ bestScore }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <H1>Maze Game</H1>
      {bestScore ? (
        <>
          <Spacer size={100} />
          <H3>Best score: {bestScore} moves</H3>
        </>
      ) : null}
      <Spacer size={100} />
      <Button
        onClick={() => {
          navigate('maze');
        }}
        testId="start-game-button"
        title="START GAME"
      />
    </Wrapper>
  );
};
