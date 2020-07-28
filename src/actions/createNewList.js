import {v4 as uuidv4} from 'uuid';
import {CREATE_NEW_LIST, CANCEL_CREATE_NEW_LIST, STORE_NEW_LIST} from './actionTypes';

export const createNewList = () => {
	return {
		type: CREATE_NEW_LIST,
	};
};

export const cancelCreateNewList = () => {
	return {
		type: CANCEL_CREATE_NEW_LIST,
	};
};

export const submitCreateNewList = (boardId, listName) => {
	return {
		type: STORE_NEW_LIST,
		payload: {
			boardId,
			list: {
				id: `list_${uuidv4()}`,
				name: listName,
			}
		}
	}
};