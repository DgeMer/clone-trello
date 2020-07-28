import {
	DELETE_BOARD,
	DELETE_BOARD_IMG,
	DELETE_LIST, REORDER_ITEMS,
	REORDER_LISTS,
	SAVE_BOARD_IMG,
	STORE_NEW_BOARD,
	STORE_NEW_LIST
} from '../actions/actionTypes';
import {reorder} from "../utils/helpers";
/**
 *
 * @type {{data: [{name: string, id: string, items: {id: {id: string, name: string}}}], name: string, id: string}[]}
 */
const initialState = [];

export default function(state = initialState, action) {
	switch (action.type) {
		case STORE_NEW_BOARD:
			return [...state, action.payload];
		case SAVE_BOARD_IMG:
			return state.map(board => {
				if (board.id !== action.payload.boardId) {
					return board;
				}
				return {...board, img: action.payload.boardImg};
			});
		case DELETE_BOARD_IMG:
			return state.map(board => {
				if (board.id !== action.payload.boardId) {
					return board;
				}
				return {...board, img: ''};
			});
		case DELETE_BOARD:
			return state.filter(board => board.id !== action.payload.boardId);
		case STORE_NEW_LIST:
			return state.map(board => {
				if(board.id !== action.payload.boardId) {
					return board;
				}
				if (!board.data) {
					board.data = [];
				}
				board.data.push(action.payload.list);
				return board;
			});
		case DELETE_LIST:
			return state.map(board => {
				if (board.id !== action.payload.boardId) {
					return board;
				}
				board.data = board.data.filter(list => list.id !== action.payload.listId);
				return board;
			});
		case REORDER_LISTS:
			return state.map(board => {
				if (board.id !== action.payload.boardId) {
					return board;
				}
				const {sourceIndex, destinationIndex} = action.payload;
				[board.data[sourceIndex], board.data[destinationIndex]] = [board.data[destinationIndex], board.data[sourceIndex]];
				return board;
			});
		case REORDER_ITEMS:
			return state.map(board => {
				if (board.id !== action.payload.boardId) {
					return board;
				}
				const {listId, sourceIndex, destinationIndex} = action.payload;
				let list = board.data.find(list => list.id === listId);
				let items = reorder(
					list.items,
					sourceIndex,
					destinationIndex
				);
				list.items = {};
				list.items = items;
				return board;
			});
		default:
			return state;
	}
}