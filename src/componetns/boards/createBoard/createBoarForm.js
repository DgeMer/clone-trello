import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cancelCreateNewBoard, submitCreateNewBoard} from "../../../actions/createNewBoard";

class CreateBoardForm extends Component {
	constructor(props) {
		super(props);
		this.state = {boardName: "" };
	}

	render() {
		return (
			<div className='col mb-4'>
				<div className="card cp">
					<div className="card-body">
						<div className="form-group">
							<label htmlFor="boardName">Board name</label>
							<input type="text" className="form-control" id="boardName" placeholder='Board name'
								   value={this.state.boardName} onChange={e => this.updateInput(e.target.value)} onKeyUp={this.onKeyUp}/>
						</div>
						<div className='btn-group'>
							<button className="btn btn-outline-primary" onClick={this.handleAdd}>Create</button>
							<button className="btn btn-outline-secondary" onClick={() => this.props.cancelCreateNewBoard()}>Cancel</button>
						</div>

					</div>
				</div>
			</div>
		)
	}

	updateInput = boardName => {
		this.setState({boardName});
	};

	onKeyUp = event => {
		//enter
		if (event.keyCode === 13) {
			this.handleAdd();
		}
	};

	handleAdd = () => {
		if(!this.state.boardName.length) {
			return;
		}
		this.props.submitCreateNewBoard(this.state.boardName);
		this.setState({boardName: ""});
		this.props.cancelCreateNewBoard();
	};
}

export default connect(null, {cancelCreateNewBoard, submitCreateNewBoard})(CreateBoardForm);