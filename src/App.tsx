import React, { FunctionComponent } from 'react';
import generator from 'generate-maze';

const App: FunctionComponent = () => {
  const maze = generator(4);
  console.log(maze);

  return (
    <div>
      <h1>Maze Game</h1>
    </div>
  );
};

export default App;
