import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import throttle from 'lodash/throttle';

import rootReducer from './reducers/rootReducer';
import {loadData, syncDataChange} from './utils/syncLocalStore';

const initialBoardsState = loadData();
const store = createStore(
	rootReducer,
	{boards: initialBoardsState}, // sets initial state
	composeWithDevTools() // makes debugging through Redux Dev Tools possible
);

store.subscribe(throttle(() => {
	syncDataChange(store.getState().boards);
}, 500));

export default store;