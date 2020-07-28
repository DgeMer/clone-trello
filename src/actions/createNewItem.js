import {v4 as uuidv4} from 'uuid';
import {STORE_NEW_ITEM} from './actionTypes';

export const submitCreateNewItem = (boardId, listId, itemName) => {
	return {
		type: STORE_NEW_ITEM,
		payload: {
			boardId,
			listId,
			item: {
				id: `item_${uuidv4()}`,
				name: itemName,
				isDone: false
			}
		}
	}
};