import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createNewBoard} from '../../../actions/createNewBoard';

class CreateBoard extends Component {
	render() {
		return (
			<div className='col mb-4'>
				<div className="card cp" onClick={() => this.props.createNewBoard()}>
					<div className="card-body">
						Create a new board
					</div>
				</div>
			</div>
		)
	}
}

export default connect(null, {createNewBoard})(CreateBoard);