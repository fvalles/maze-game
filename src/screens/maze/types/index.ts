export interface MazeType {
  /** Maze horizontal position */
  x: number;
  /** Maze vertical position */
  y: number;
  /** Top value: has a wall if true */
  top: boolean;
  /** Left value: has a wall if true */
  left: boolean;
  /** Bottom value: has a wall if true */
  bottom: boolean;
  /** Right value: has a wall if true */
  right: boolean;
  /** Set # used to generate maze, can be ignored */
  set: number;
}

export interface AvatarPosition extends Pick<MazeType, 'x' | 'y'> {}

export interface CellProps
  extends Pick<MazeType, 'bottom' | 'left' | 'right' | 'top'> {
  /** Avatar position inside the maze */
  avatarPosition: AvatarPosition;
  /** Cell height */
  height: number;
  /** Cell width */
  width: number;
  /** Cell horizontal position inside the maze */
  x: number;
  /** Cell vertical position inside the maze */
  y: number;
}

export interface MazeProps {
  /** User's best score solving the maze */
  bestScore: number;
  /** Function to set User's best score solving the maze */
  setBestScore: (score: number) => void;
}

export interface MazeWithKey {
  /** Maze row key. Used to keep track of what is added/removed from Virtual DOM */
  key: number;
  /** Maze row */
  row: MazeType[];
}

export interface UserScoreResponse {
  message: string;
}
