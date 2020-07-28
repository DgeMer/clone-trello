import React, {Component} from 'react';
import {connect} from 'react-redux';
import CreateBoard from "./createBoard";
import CreateBoardForm from './createBoarForm';

class CreateBoardContainer extends Component {
	render() {
		return (
			<React.Fragment>
				{this.props.newBoard.isCreateBoardOpen ? <CreateBoardForm/> : <CreateBoard/>}
			</React.Fragment>
		);
	}
}

function mapStateToProps({newBoard}) {
	return {newBoard}
}

export default connect(mapStateToProps)(CreateBoardContainer);