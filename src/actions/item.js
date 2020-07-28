import {TOGGLE_DONE_ITEM, DELETE_ITEM, REORDER_ITEMS} from "./actionTypes";

export const toggleDoneItem = (listId, itemId) => {
	return {
		type: TOGGLE_DONE_ITEM,
		payload: {listId, itemId}
	}
};

export const deleteItem = (listId, itemId) => {
	return {
		type: DELETE_ITEM,
		payload: {listId, itemId}
	}
};

export const reorderItems = (boardId, listId, sourceIndex, destinationIndex) => {
	return {
		type: REORDER_ITEMS,
		payload: {boardId, listId, sourceIndex, destinationIndex}
	}
};