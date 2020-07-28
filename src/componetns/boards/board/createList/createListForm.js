import React, {Component} from 'react';
import {connect} from 'react-redux';
import {cancelCreateNewList, submitCreateNewList} from '../../../../actions/createNewList';

class CreateListForm extends Component {
	constructor(props) {
		super(props);
		this.state = {listName: "" };
	}

	render() {
		return (
			<div className="card cp addList">
				<div className="card-body">
					<div className="form-group">
						<input type="text" className="form-control" id="listName" placeholder='List name'
							   value={this.state.listName} onChange={e => this.updateInput(e.target.value)} onKeyUp={this.onKeyUp}/>
					</div>
					<div className='btn-group'>
						<button className="btn btn-outline-primary" onClick={this.handleAdd}>Create</button>
						<button className="btn btn-outline-secondary" onClick={() => this.props.cancelCreateNewList()}>Cancel</button>
					</div>
				</div>
			</div>
		);
	}

	updateInput = listName => {
		this.setState({listName});
	};

	onKeyUp = event => {
		//enter
		if (event.keyCode === 13) {
			this.handleAdd();
		}
	};

	handleAdd = () => {
		if(!this.state.listName.length) {
			return;
		}
		this.props.submitCreateNewList(this.props.boardId, this.state.listName);
		this.setState({listName: ""});
		this.props.cancelCreateNewList();
	};
}

export default connect(null, {cancelCreateNewList, submitCreateNewList})(CreateListForm);