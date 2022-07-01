import React, { FunctionComponent, ReactElement } from 'react';
import ModalWrapper from 'react-modal';
import { Colors } from '../../core/theme/colors';

/**
 * Types
 */

interface ModalProps {
  /** Modal content components */
  children: ReactElement;
  /** Modal height */
  height: number;
  /** Boolean describing if the modal should be shown or not. */
  isOpen: boolean;
  /** String indicating how the content container should be announced to screenreaders */
  label: string;
  /** String testId that renders a data-testid attribute in the DOM, used for testing. */
  testId: string;
  /** Modal width */
  width: number;
}

/**
 * Modal
 */

export const Modal: FunctionComponent<ModalProps> = ({
  children,
  height,
  isOpen,
  label,
  testId,
  width,
}) => {
  const modalStyles = {
    content: {
      alignItems: 'center',
      backgroundColor: Colors.modalBackground,
      boxShadow: '2px 2px 5px, -2px 2px 5px, 2px -2px 5px, -2px -2px 5px',
      borderRadius: 4,
      display: 'flex',
      height: `${height}px`,
      justifyContent: 'center',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: `${width}px`,
    },
  };

  return (
    <ModalWrapper
      ariaHideApp={false}
      contentLabel={label}
      isOpen={isOpen}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      style={modalStyles}
      testId={testId}>
      {children}
    </ModalWrapper>
  );
};
