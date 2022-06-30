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

export interface CellProps
  extends Pick<MazeType, 'bottom' | 'left' | 'right' | 'top'> {
  avatarPosition: AvatarPosition;
  height: number;
  width: number;
  x: number;
  y: number;
}
