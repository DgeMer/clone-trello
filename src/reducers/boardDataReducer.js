import {
	GET_BOARD,
	STORE_NEW_LIST,
	STORE_NEW_ITEM,
	TOGGLE_DONE_ITEM,
	DELETE_ITEM,
	DELETE_LIST, REORDER_LISTS, REORDER_ITEMS,
} from '../actions/actionTypes';
import {reorder} from "../utils/helpers";
const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_BOARD:
			let lists = {};
			action.payload.data.forEach(list => {
				lists[list.id] = list;
			});
			return {...{}, ...lists};
		case STORE_NEW_LIST:
			return {
				...state,
				[action.payload.list.id]: action.payload.list
			};
		case DELETE_LIST:
			let newState = Object.assign({}, state);
			delete newState[action.payload.listId];
			return newState;
		case REORDER_LISTS:
			const {sourceIndex, destinationIndex} = action.payload;
			let newStateReorderLists = Object.assign({}, state);
			newStateReorderLists = reorder(
				newStateReorderLists,
				sourceIndex,
				destinationIndex
			);
			return newStateReorderLists;
		case STORE_NEW_ITEM:
			let listNewItem = Object.assign({}, state[action.payload.listId]);
			listNewItem.items[action.payload.item.id] = action.payload.item;
			return {
				...state,
				[action.payload.listId]: listNewItem
			};
		case TOGGLE_DONE_ITEM:
			let listEditItem = state[action.payload.listId];
			let item = listEditItem.items[action.payload.itemId];
			item.isDone = !item.isDone;
			return {
				...state,
				[action.payload.listId]: listEditItem
			};
		case DELETE_ITEM:
			let listDeleteItem = Object.assign({}, state[action.payload.listId]);
			delete listDeleteItem.items[action.payload.itemId];
			return {...state, [action.payload.listId]: listDeleteItem};
		case REORDER_ITEMS:
			let listToReorder = Object.assign({}, state[action.payload.listId]);
			listToReorder.items = reorder(
				listToReorder.items,
				action.payload.sourceIndex,
				action.payload.destinationIndex
			);
			return {...state, [action.payload.listId]: listToReorder};

		default:
			return state;
	}
};