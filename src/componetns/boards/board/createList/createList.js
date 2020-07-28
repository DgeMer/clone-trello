import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createNewList} from '../../../../actions/createNewList';

class CreateList extends Component {
	render() {
		return (
			<div className="card cp addList" onClick={() => this.props.createNewList()}>
				<div className="card-body">
					Add a list
				</div>
			</div>
		);
	}
}

export default connect(null, {createNewList})(CreateList);