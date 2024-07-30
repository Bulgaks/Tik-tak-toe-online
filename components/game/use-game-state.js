import { useState } from "react";
import { GAME_SYMBOLS, MOVE_ORDER } from "./constants";

function getNextMove(currentMove, plauersCount) {

  const slicedMoveOrder = MOVE_ORDER.slice(0, plauersCount);

  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

export function useGameState(plauersCount) {
  const [{ cells, currentMove }, setGameState] = useState(() => ({
    cells: new Array(19 * 19).fill(null),
    currentMove: GAME_SYMBOLS.ZERO,
  }));

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
  };
}
