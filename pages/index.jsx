import { useState } from "react";
import { GameField } from "../components/game/game-field.jsx";
import { GameInfo } from "../components/game/game-info.jsx";
import { GameTitle } from "../components/game/game-title.jsx";
import Header from "../components/header/header.jsx";
import { useGameState } from "../components/game/use-game-state.js";
import { GameSymbol } from "../components/game/game-symbol.jsx";
import { UiModal } from "../components/uikit/ui-modal.jsx";
import { UiButton } from "../components/uikit/ui-button.jsx";

export default function HomePage() {
  const [playersCount] = useState(4);

  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />
        <GameInfo
          className="mt-4"
          playersCount={playersCount}
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div>
            <GameSymbol classname="my-4" symbol={winnerSymbol} />
          </div>
        )}
        <UiModal
          width="md"
          isOpen={winnerSymbol}
          onClose={() => console.log("close")}
        >
          <UiModal.Header>Игра завершена</UiModal.Header>
          <UiModal.Body>
            <div className="text-sm">
              Победитель: <span className="text-teal-600">Bulgakov</span>
            </div>
          </UiModal.Body>
          <UiModal.Footer>
            <UiButton size="md" variant="outline">
              Вернуться
            </UiButton>
            <UiButton size="md" variant="primary">
              Играть снова
            </UiButton>
          </UiModal.Footer>
        </UiModal>
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
