import React from "react";
import { Link } from "react-router-dom";

import { useAppSelector } from "store/hooks";

import image from "assets/finger-up.webp";

import "./game-over.css";

function GameOver() {
  const { earnedReward } = useAppSelector((state) => state.game);

  return (
    <div className="game-over-page-wrapper">
      <img src={image} alt="finger up" className="finger-up-img" />
      <div className="start-game-page-text-block">
        <div className="game-over-text">
          <h2 className="game-over-sub-title">Total score:</h2>
          <h1 className="start-game-page-title">${earnedReward} earned</h1>
        </div>
        <Link to="/game" className="button">
          Try again
        </Link>
      </div>
    </div>
  );
}

export default GameOver;
