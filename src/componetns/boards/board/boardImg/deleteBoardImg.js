import React from 'react';

const DeleteBoardImg = ({isImg, handleDeleteImg}) => (
	<React.Fragment>
		{isImg ? <div className="border border-secondary p-2 rounded cp ml-2" onClick={handleDeleteImg}>Delete background</div> : ''}
	</React.Fragment>
);

export default DeleteBoardImg;