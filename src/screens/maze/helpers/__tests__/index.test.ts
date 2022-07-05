import fetch from 'jest-fetch-mock';
import { AvatarPosition } from '@screens/maze/types';
import {
  API_ENDPOINT,
  BORDER_WIDTH,
  checkAvatarPresence,
  fetchUserScore,
  getCellBoxShadow,
  getWindowDimension,
  isMazeExitCell,
  MAZE_COLUMN_LAST_CELL,
  MAZE_ROW_LAST_CELL,
} from '..';

describe('checkAvatarPresence helper', () => {
  it('should return true if the avatar position is the same as the cell position inside the maze', () => {
    const avatarPosition: AvatarPosition = { x: 0, y: 0 };
    const cellX = 0;
    const cellY = 0;

    expect(checkAvatarPresence(avatarPosition, cellX, cellY)).toBeTruthy();
  });

  it('should return false if the avatar position is not the same as the cell position inside the maze', () => {
    const avatarPosition: AvatarPosition = { x: 0, y: 0 };
    const cellX = 1;
    const cellY = 5;

    expect(checkAvatarPresence(avatarPosition, cellX, cellY)).toBeFalsy();
  });
});

describe('getCellBoxShadow helper', () => {
  it('should return box shadow property used to fill empty corners when cell has bottom and left walls', () => {
    const bottomWall = true;
    const leftWall = true;
    const rightWall = false;
    const topWall = false;

    expect(getCellBoxShadow(bottomWall, leftWall, rightWall, topWall)).toBe(
      `-${BORDER_WIDTH} ${BORDER_WIDTH}`,
    );
  });

  it('should return box shadow property used to fill empty corners when cell has bottom and right walls', () => {
    const bottomWall = true;
    const leftWall = false;
    const rightWall = true;
    const topWall = false;

    expect(getCellBoxShadow(bottomWall, leftWall, rightWall, topWall)).toBe(
      `${BORDER_WIDTH} ${BORDER_WIDTH}`,
    );
  });

  it('should return box shadow property used to fill empty corners when cell has top and left walls', () => {
    const bottomWall = false;
    const leftWall = true;
    const rightWall = false;
    const topWall = true;

    expect(getCellBoxShadow(bottomWall, leftWall, rightWall, topWall)).toBe(
      `-${BORDER_WIDTH} -${BORDER_WIDTH}`,
    );
  });

  it('should return box shadow property used to fill empty corners when cell has top and right walls', () => {
    const bottomWall = false;
    const leftWall = false;
    const rightWall = true;
    const topWall = true;

    expect(getCellBoxShadow(bottomWall, leftWall, rightWall, topWall)).toBe(
      `${BORDER_WIDTH} -${BORDER_WIDTH}`,
    );
  });

  it('should return box shadow property used to fill empty corners when cell has bottom, left and right walls', () => {
    const bottomWall = true;
    const leftWall = true;
    const rightWall = true;
    const topWall = false;

    expect(getCellBoxShadow(bottomWall, leftWall, rightWall, topWall)).toBe(
      `-${BORDER_WIDTH} ${BORDER_WIDTH}, ${BORDER_WIDTH} ${BORDER_WIDTH}`,
    );
  });

  it('should return box shadow property used to fill empty corners when cell has top, left and right walls', () => {
    const bottomWall = false;
    const leftWall = true;
    const rightWall = true;
    const topWall = true;

    expect(getCellBoxShadow(bottomWall, leftWall, rightWall, topWall)).toBe(
      `-${BORDER_WIDTH} -${BORDER_WIDTH}, ${BORDER_WIDTH} -${BORDER_WIDTH}`,
    );
  });

  it('should return box shadow property used to fill empty corners when cell has bottom, top, left and right walls', () => {
    const bottomWall = true;
    const leftWall = true;
    const rightWall = true;
    const topWall = true;

    expect(getCellBoxShadow(bottomWall, leftWall, rightWall, topWall)).toBe(
      `-${BORDER_WIDTH} ${BORDER_WIDTH}, ${BORDER_WIDTH} ${BORDER_WIDTH}, -${BORDER_WIDTH} -${BORDER_WIDTH}, ${BORDER_WIDTH} -${BORDER_WIDTH}`,
    );
  });
});

describe('getWindowDimension helper', () => {
  it('should return the smaller between window innerHeight and innerWidth', () => {
    const { innerHeight, innerWidth } = window;
    const windowDimension = innerHeight < innerWidth ? innerHeight : innerWidth;

    expect(getWindowDimension()).toBe(windowDimension);
  });
});

describe('isMazeExitCell helper', () => {
  it('should return false if the current cell is not the maze end cell (bottom right cell)', () => {
    const cellX = 0;
    const cellY = 0;

    expect(isMazeExitCell(cellX, cellY)).toBeFalsy();
  });

  it('should return true if the current cell is not the maze end cell (bottom right cell)', () => {
    const cellX = MAZE_ROW_LAST_CELL;
    const cellY = MAZE_COLUMN_LAST_CELL;

    expect(isMazeExitCell(cellX, cellY)).toBeTruthy();
  });
});

describe('fetchUserScore helper', () => {
  it('should return message from API endpoint when http response status is 200 OK', async () => {
    const mockedFetchResponse = { message: 'Score saved!' };
    const score = 40;
    const fetchBody = {
      method: 'POST',
      body: JSON.stringify({
        score,
        userId: 'hardcodedUserId',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };

    fetch.mockResponseOnce(JSON.stringify(mockedFetchResponse));

    const fetchResponse = await fetchUserScore(score);

    expect(fetchResponse).toMatchObject(mockedFetchResponse);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(API_ENDPOINT, fetchBody);
  });
});
