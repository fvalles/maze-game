export interface MazeType {
  x: number;
  y: number;
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
  set: number;
}

export interface MazeWithKey {
  key: number;
  row: MazeType[];
}

export interface AvatarPosition extends Pick<MazeType, 'x' | 'y'> {}
