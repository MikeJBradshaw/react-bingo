export const UPDATE_BOARD = 'UPDATE_BOARD';
export type UpdateBoardAction = {type: typeof UPDATE_BOARD, index: number};
export const updateBoard = (index: number): UpdateBoardAction => ({type: UPDATE_BOARD, index});


export type AppAction = UpdateBoardAction;
