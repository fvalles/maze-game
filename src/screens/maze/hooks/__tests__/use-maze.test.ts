import { act, renderHook } from '@testing-library/react';
import { useMaze } from '../use-maze';

describe('useMaze hook', () => {
  it('should return initial values for maze start game', () => {
    const bestScore = 0;
    const setBestScore = jest.fn();

    const { result } = renderHook(() => useMaze({ bestScore, setBestScore }));

    expect(result.current.avatarMoves).toBe(0);
    expect(result.current.avatarPosition).toMatchObject({ x: 0, y: 0 });
    expect(result.current.modalIsOpen).toBeFalsy();
  });

  it('should be able to update avatar moves and avatar position', () => {
    const bestScore = 0;
    const setBestScore = jest.fn();

    const { result } = renderHook(() => useMaze({ bestScore, setBestScore }));

    expect(result.current.avatarMoves).toBe(0);
    expect(result.current.avatarPosition).toMatchObject({ x: 0, y: 0 });

    act(() => {
      result.current.setAvatarMoves(5);
      result.current.setAvatarPosition({ x: 3, y: 2 });
    });

    expect(result.current.avatarMoves).toBe(5);
    expect(result.current.avatarPosition).toMatchObject({ x: 3, y: 2 });
  });

  it('should be able to update modalIsOpen value', () => {
    const bestScore = 0;
    const setBestScore = jest.fn();

    const { result } = renderHook(() => useMaze({ bestScore, setBestScore }));

    expect(result.current.modalIsOpen).toBeFalsy();

    act(() => {
      result.current.setModalIsOpen(true);
    });

    expect(result.current.modalIsOpen).toBeTruthy();
  });
});
