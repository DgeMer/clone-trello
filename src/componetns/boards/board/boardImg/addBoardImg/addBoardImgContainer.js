import React from 'react';
import AddBoardImgBtn from './addBoardImgBtn';
import AddBoardImgForm from './addBoardImgForm';

const AddBoardImgContainer = ({isAddImgOpen, handleOpenFormAddBoardImg, handleUploadImg, handleAddImgByUrl}) => (
	<React.Fragment>
		{isAddImgOpen ?
			<AddBoardImgForm handleUploadImg={handleUploadImg} handleAddImgByUrl={handleAddImgByUrl}/>
			: <AddBoardImgBtn handleOpenFormAddBoardImg={handleOpenFormAddBoardImg}/>}
	</React.Fragment>
);

export default AddBoardImgContainer;