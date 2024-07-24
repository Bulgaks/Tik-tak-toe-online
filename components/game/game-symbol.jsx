import { GAME_SYMBOLS } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { SquareIcon } from "./icons/square-icon";
import { TringleIcon } from "./icons/tringle-icon";
import { ZeroIcon } from "./icons/zero-icon";

export function GameSymbol ({ symbol, className }) {

    const Icon = {
        [GAME_SYMBOLS.ZERO]: ZeroIcon,
        [GAME_SYMBOLS.CROSS]: CrossIcon,
        [GAME_SYMBOLS.SQUARE]: SquareIcon,
        [GAME_SYMBOLS.TRINGLE]: TringleIcon,
    }[symbol] ?? ZeroIcon;
    return <Icon className={className}/>;
}