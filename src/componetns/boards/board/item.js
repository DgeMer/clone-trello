import React, {Component} from 'react';
import {connect} from 'react-redux'
import {toggleDoneItem, deleteItem} from '../../../actions/item';
import BiTrash from "./biTrash";

class Item extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.item;
	}
	render() {
		let className = ['form-control'];
		if (this.state.isDone) {
			className.push('itemIsDone');
		}
		return (
			<div className="input-group mb-4">
				<div className="input-group-prepend">
					<div className="input-group-text">
						<input type="checkbox" checked={this.state.isDone} onChange={this.handleIsDoneChange}/>
					</div>
				</div>
				<input type="text" className={className.join(' ')} defaultValue={this.state.name}/>
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="button" onClick={this.handleDelete}>
						<BiTrash/>
					</button>
				</div>

			</div>
		);
	}

	handleIsDoneChange = () => {
		this.setState({isDone: !this.state.isDone});
		this.props.toggleDoneItem(this.props.listId, this.props.item.id);
	};

	handleDelete = () => {
		this.props.deleteItem(this.props.listId, this.props.item.id);
	}
}

export default connect(null, {toggleDoneItem, deleteItem})(Item);