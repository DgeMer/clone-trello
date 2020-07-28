import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submitCreateNewItem} from '../../../../actions/createNewItem';

class CreateItemForm extends Component {
	constructor(props) {
		super(props);
		this.state = {itemName: ""};
	}

	render() {
		return (
			<div className="form-group">
				<input type="text" className="form-control" placeholder='item todo'
					   value={this.state.itemName} onChange={e => this.updateInput(e.target.value)} onKeyUp={this.onKeyUp}/>
			</div>
		)
	}

	updateInput = itemName => {
		this.setState({itemName});
	};

	onKeyUp = event => {
		if(!this.state.itemName.length) {
			return;
		}
		//enter
		if (event.keyCode === 13) {
			this.props.submitCreateNewItem(this.props.boardId, this.props.listId, this.state.itemName);
			this.setState({itemName: ''});
		}
	};
}

export default connect(null, {submitCreateNewItem})(CreateItemForm);