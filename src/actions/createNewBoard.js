import {v4 as uuidv4} from 'uuid';
import {CREATE_NEW_BOARD, CANCEL_CREATE_NED_BOARD, STORE_NEW_BOARD} from "./actionTypes";

export const createNewBoard = () => {
	return {
		type: CREATE_NEW_BOARD, // mandatory key
	};
};

export const cancelCreateNewBoard = () => {
	return {
		type: CANCEL_CREATE_NED_BOARD,
	};
};

export const submitCreateNewBoard = (boardName) => {
	return {
		type: STORE_NEW_BOARD,
		payload: {
			id: `board_${uuidv4()}`,
			name: boardName,
			data: [],
		}
	}
};