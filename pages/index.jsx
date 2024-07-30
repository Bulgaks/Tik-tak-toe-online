import { useState } from "react";
import { GameField } from "../components/game/game-field.jsx";
import { GameInfo } from "../components/game/game-info.jsx";
import { GameTitle } from "../components/game/game-title.jsx";
import Header from "../components/header/header.jsx";
import { useGameState } from "../components/game/use-game-state.js";

export default function HomePage() {
  const [playersCount] = useState(4);

  const { cells, currentMove, handleCellClick, nextMove } =
    useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
        />
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
        />
      </main>
    </div>
  );
}
