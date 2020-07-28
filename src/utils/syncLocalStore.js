const localStorageBoardsKey = 'boards';

export const syncDataChange = (storeState) => {
	try {
		localStorage.setItem(localStorageBoardsKey, JSON.stringify(storeState));
	} catch (err) {
		new Error(err);
	}
};

export const loadData = () => {
	try {
		const boardState = localStorage.getItem(localStorageBoardsKey);
		if (boardState === null) {
			return [];
		}
		return JSON.parse(boardState)
	} catch (err) {
		return [];
	}
};