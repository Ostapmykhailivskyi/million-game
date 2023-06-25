import React from "react";
import { Routes, Route } from "react-router-dom";
import { Game, GameOver, GameStart } from "pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GameStart />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </div>
  );
}

export default App;
