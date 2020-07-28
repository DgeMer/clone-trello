import React, {Component} from 'react';
import {connect} from 'react-redux'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import CreateItemForm from './createItem/createItemForm';
import Item from "./item";
import BiTrash from "./biTrash";
import {deleteList} from '../../../actions/lists';

class List extends Component {
	render() {
		const {boardId, list} = this.props;
		const itemKeys = Object.keys(list.items || {});

		return (
			<div className="card">
				<div className="card-header">{list.name}
					<span className='float-md-right align-text-bottom cp' onClick={this.handleDeleteList}><BiTrash/></span>
				</div>
				<div className="card-body">
					<DragDropContext onDragEnd={this.props.onDragEnd}>
						<Droppable key={list.id} droppableId={`${list.id}`}>
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									{itemKeys.map((itemKey, index) => (
										<Draggable
											key={itemKey}
											draggableId={itemKey}
											index={index}
										>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													style={this.props.getItemStyle(
														snapshot.isDragging,
														provided.draggableProps.style
													)}
												>
													<Item key={itemKey} listId={list.id} item={list.items[itemKey]}/>
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>

					<CreateItemForm listId={list.id} boardId={boardId}/>
				</div>
			</div>
		);
	}

	handleDeleteList = () => {
		this.props.deleteList(this.props.boardId, this.props.list.id);
	}
}

export default connect(null, {deleteList})(List);