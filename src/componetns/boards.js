import React, {Component} from 'react';
import {connect} from "react-redux";
import CreateBoardContainer from './boards/createBoard/createBoardContainer'
import BoardCard from "./boards/boardCard";

class Boards extends Component {
	componentDidMount() {
		document.body.style.backgroundImage = null;
		document.body.classList.remove('boardBg');
	}

	render() {
		return (
			<div className='row row-cols-1 row-cols-md-6'>
				<CreateBoardContainer/>
				{this.props.boards.map(board => {
					return <BoardCard key={board.id} board={board}/>
				})}
			</div>
		)
	}
}

function mapStateToProps({boards}) {
	return {boards}
}

export default connect(mapStateToProps)(Boards);