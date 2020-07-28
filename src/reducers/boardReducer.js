import {CANCEL_CREATE_NEW_LIST, CREATE_NEW_LIST, GET_BOARD} from '../actions/actionTypes';

const initialState = {
	id: '',
	name: null,
	isCreateListOpen: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_BOARD:
			return {
				...state,
				id:  action.payload.id,
				name: action.payload.name,
				img: action.payload.img,
			};

		case CREATE_NEW_LIST:
			return {
				...state,
				isCreateListOpen: true,
			};

		case CANCEL_CREATE_NEW_LIST:
			return {
				...state,
				isCreateListOpen: false,
			};

		default:
			return state;
	}
}