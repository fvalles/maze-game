import React, { FunctionComponent, useCallback } from 'react';
import { Button } from '@components/button';
import { Spacer } from '@components/spacer';
import { Body, H1, H2 } from '@components/typography';
import { AvatarPosition } from '@screens/maze/types';
import styled from 'styled-components';

/**
 * Types
 */

interface WinModalContentProps {
  avatarMoves: number;
  setAvatarMoves: (moves: number) => void;
  setAvatarPosition: (position: AvatarPosition) => void;
  setModalIsOpen: (visible: boolean) => void;
}

/**
 * Styled Components
 */

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

/**
 * WinModalContent
 */

export const WinModalContent: FunctionComponent<WinModalContentProps> = ({
  avatarMoves,
  setAvatarMoves,
  setAvatarPosition,
  setModalIsOpen,
}) => {
  const restartGame = useCallback(() => {
    setAvatarMoves(0);
    setAvatarPosition({ x: 0, y: 0 });
    setModalIsOpen(false);
  }, []);

  return (
    <Wrapper>
      <H1>Congratulations</H1>
      <Spacer />
      <H2>You won!</H2>
      <Spacer />
      <Body>Total number of moves: {avatarMoves}</Body>
      <Spacer size={100} />
      <ButtonsWrapper>
        <Button
          background="restartButtonBackground"
          onClick={() => {
            restartGame();
          }}
          testId="restart-button"
          title="RESTART"
        />
        <Button
          onClick={() => {
            restartGame();
          }}
          testId="main-menu-button"
          title="MAIN MENU"
        />
      </ButtonsWrapper>
    </Wrapper>
  );
};