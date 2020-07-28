import React from 'react';
import CreateList from './createList';
import CreateListForm from "./createListForm";

const CreateListContainer = ({board}) => (
	<React.Fragment>
		{board.isCreateListOpen ? <CreateListForm boardId={board.id}/> : <CreateList/>}
	</React.Fragment>
);

export default CreateListContainer;