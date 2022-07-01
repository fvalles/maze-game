import React, { FunctionComponent, useState } from 'react';
import { Maze } from '@screens/maze';
import { Route, Routes } from 'react-router-dom';
import { Main } from '@screens/main';

/**
 * App
 */

const App: FunctionComponent = () => {
  const [bestScore, setBestScore] = useState<number>(0);

  return (
    <Routes>
      <Route element={<Main bestScore={bestScore} />} path="/" />
      <Route
        element={<Maze bestScore={bestScore} setBestScore={setBestScore} />}
        path="maze"
      />
    </Routes>
  );
};

export default App;
