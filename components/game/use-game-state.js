import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { computeWinner, getNextMove } from "./model";

export function useGameState(plauersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.ZERO,
  }));

  const winnerSequence = computeWinner(cells);
  const nextMove = getNextMove(currentMove, plauersCount);

  const handleCellClick = (index) => {
    // Если setAnyThing принимает в коллбэк предыдущее состояние anyThing, для корректной работы используем lastAnyThing

    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }
      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove, plauersCount),
        cells: lastGameState.cells.map((cell, cellIndex) =>
          cellIndex === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };
  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
    winnerSequence,
  };
}
