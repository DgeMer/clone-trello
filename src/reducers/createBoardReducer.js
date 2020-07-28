import {CREATE_NEW_BOARD, CANCEL_CREATE_NED_BOARD} from '../actions/actionTypes';

const initialState = {
	isCreateBoardOpen: false,
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CREATE_NEW_BOARD:
			return {
				...state,
				isCreateBoardOpen: true,
			};

		case CANCEL_CREATE_NED_BOARD:
			return {
				...state,
				isCreateBoardOpen: false,
			};

		default:
			return state;
	}
}