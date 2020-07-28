import {GET_BOARD, DELETE_BOARD, SAVE_BOARD_IMG, DELETE_BOARD_IMG} from '../actions/actionTypes';
import store from './../store';

export const getBoard = (id) => {
	const boards = store.getState().boards;
	const activeBoard = boards.find(board => board.id === id) || {};

	return {
		type: GET_BOARD,
		payload: activeBoard
	};
};

export const deleteBoard = (id) => {
	return {
		type: DELETE_BOARD,
		payload: {
			boardId: id
		}
	}
};

export const saveBoardImg = (boardId, boardImg) => {
	return {
		type: SAVE_BOARD_IMG,
		payload: {boardId, boardImg}
	}
};

export const deleteBoardImg = (boardId) => {
	return {
		type: DELETE_BOARD_IMG,
		payload: {boardId}
	}
};