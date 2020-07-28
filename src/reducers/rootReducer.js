import {combineReducers} from 'redux';

import createBoardReducer from './createBoardReducer';
import boardsReducer from './boardsReducer';
import boardReducer from './boardReducer';
import boardDataReducer from './boardDataReducer';

const rootReducer = combineReducers({
	boards: boardsReducer,
	newBoard: createBoardReducer,
	board: boardReducer,
	boardData: boardDataReducer,
});

export default rootReducer;

