import React, { FunctionComponent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/button';
import { Div } from '@components/div';
import { Spacer } from '@components/spacer';
import { Body, H1, H2 } from '@components/typography';
import { AvatarPosition } from '@screens/maze/types';

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
 * WinModalContent
 */

export const WinModalContent: FunctionComponent<WinModalContentProps> = ({
  avatarMoves,
  setAvatarMoves,
  setAvatarPosition,
  setModalIsOpen,
}) => {
  const navigate = useNavigate();

  const restartGame = useCallback(() => {
    setAvatarMoves(0);
    setAvatarPosition({ x: 0, y: 0 });
    setModalIsOpen(false);
  }, []);

  return (
    <Div alignItems="center" display="flex" flexDirection="column">
      <H1>Congratulations</H1>
      <Spacer />
      <H2>You won!</H2>
      <Spacer />
      <Body>Total number of moves: {avatarMoves}</Body>
      <Spacer size={80} />
      <Div display="flex" justifyContent="space-around" padding="0px 80px">
        <Button
          background="restartButtonBackground"
          onClick={() => {
            restartGame();
          }}
          testId="win-modal-restart-button"
          title="RESTART"
        />
        <Button
          onClick={() => {
            restartGame();
            navigate('/');
          }}
          testId="win-modal-main-menu-button"
          title="MAIN MENU"
        />
      </Div>
    </Div>
  );
};
