import store from './../store';
import {GET_LISTS, DELETE_LIST, REORDER_LISTS} from "./actionTypes";

export const getLists = (boardId) => {
	const listsData = store.getState().listsData;
	const lists = listsData[boardId] || [];
	return {
		type: GET_LISTS,
		payload: lists
	};
};

export const deleteList = (boardId, listId) => {
	return {
		type: DELETE_LIST,
		payload: {boardId, listId}
	}
};

export const reorderLists = (boardId, sourceIndex, destinationIndex) => {
	return {
		type: REORDER_LISTS,
		payload: {boardId, sourceIndex, destinationIndex}
	}
};