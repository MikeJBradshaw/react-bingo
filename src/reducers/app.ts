import { sampleSize } from 'lodash';
import { UPDATE_BOARD } from '../actions/app';
import type { Reducer } from 'redux';
import type { AppAction } from '../actions/app';


interface AppState {
    board: boolean[];
    winner?: boolean;
}


const WINNING_COMBOS = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24], [0, 5, 10, 15, 20], [1, 6, 11, 16, 21], [2, 7, 12, 17, 22], [3, 8, 13, 18, 23], [4, 9, 14, 19, 24], [0, 6, 12, 18, 24], [4, 8, 12, 16, 20]];
const CARD_OPTIONS = ['Billy: "you know"', 'Billy: Studders', 'Billy: Hot mic', 'Brand: Ryan is on vacation', 'Brand: Shitting on Linux', 'Brand: Good job ______', 'Dirk: Need to reboot', 'Dirk: No sound', 'Dirk: Windows crash', 'Eric: No sound', 'Eric: "Working on ______ almost done"', 'Eric: Typing noises', 'Jeff: "Fuck"', 'Jeff: Built-in mic instead of headset', 'Jeff: Denies using wrong mic', 'Jeff: interrupting', 'Jeff: "bogus"', 'Jeff: Weekend feature / refactoring', 'Jeff: "Bullshit"', 'Joy: Needs to drop out', 'Joy: Late to the meeting', 'Joy: Calling from a car', 'Joy: Calling from a gym', 'Keith: Creepy laugh', 'Keith: Unfunny joke', 'Tom: "Overload / busy"', 'Ray: Chirping bird', 'Ray: "mute button"', 'Ray: Sneeze / Cough into hot mic', 'Wynn: Uses airpods', 'Someone breathing into mic', 'Shitting on Republicans', 'Shitting on Trump', 'SJW "*.ist" word'];

export const DISPLAY = sampleSize(CARD_OPTIONS, 25);
DISPLAY[12] = 'SAFE SPACE';

const board = Array(25).fill(false);
board[12] = true;


const checkForWinner = (board: boolean[]): boolean => {
    for (const [a, b, c, d, e] of WINNING_COMBOS) {
        if (board[a] && board[b] && board[c] && board[d] && board[e]) {
            return true;
        }
    }

    return false;
};


const appReducer: Reducer<AppState, AppAction> = (state = { board }, action) => {
    switch(action.type) {
        case UPDATE_BOARD:
            if (state.winner || action.index === 12) {
                return state;
            }

            const newBoard = state.board.slice();
            newBoard[action.index] = !state.board[action.index];
            return {board: newBoard, winner: checkForWinner(newBoard)};

        default:
            return state;
    }
};


export default appReducer;
