import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';

import {getBoard, deleteBoard, saveBoardImg, deleteBoardImg} from '../../../actions/board';
import {reorderLists} from '../../../actions/lists';
import {reorderItems} from '../../../actions/item';
import {getBase64} from '../../../utils/helpers';

import CreateListContainer from './createList/createListContainer';
import List from "./list";
import BiTrash from "./biTrash";
import AddBoardImgContainer from './boardImg/addBoardImg/addBoardImgContainer';
import DeleteBoardImg from "./boardImg/deleteBoardImg";

class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			img: this.props.board.img || '',
			isAddImgOpen: false
		};
	}

	componentDidMount() {
		this.props.getBoard(this.props.match.params.id);
		this.setImageToBody();
	}

	render() {
		const {board, boardData} = this.props;
		if(!board || !board.id) {
			return <Redirect to='/'/>
		}

		const listKeys = Object.keys(boardData);
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<span className="navbar-brand mr-auto">{board.name}</span>

					<AddBoardImgContainer
						isAddImgOpen={this.state.isAddImgOpen}
						handleOpenFormAddBoardImg={this.openFormAddBoardImg}
						handleUploadImg={this.uploadImg}
						handleAddImgByUrl={this.addImgByUrl}
					/>
					<DeleteBoardImg isImg={!!this.state.img} handleDeleteImg={this.deleteImg}/>

					<span className='float-md-right align-text-bottom cp ml-2' onClick={this.handleDeleteBoard}><BiTrash/></span>
				</nav>

				<div className='boardListsContainer card-group mt-4'>
					<DragDropContext onDragEnd={this.onDragEnd}>
						<Droppable droppableId="droppable" direction="horizontal">
							{(provided, snapshot) => (
								<div
									ref={provided.innerRef}
									className='boardListsGroup'
									{...provided.droppableProps}
								>
									{listKeys.map((listKey, index) => (
										<Draggable key={listKey} draggableId={listKey} index={index}>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													className='boardList col mb-8'
													style={this.getItemStyle(
														snapshot.isDragging,
														provided.draggableProps.style
													)}
												>
													<List key={listKey} list={boardData[listKey]} boardId={board.id} onDragEnd={this.onDragEnd} getItemStyle={this.getItemStyle}/>
												</div>
											)}
										</Draggable>
									))}
									{provided.placeholder}
								</div>
							)}

						</Droppable>
					</DragDropContext>
					<CreateListContainer board={board}/>
				</div>
			</div>
		);
	}

	onDragEnd = (result) => {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const sInd = result.source.droppableId;
		const dInd = result.destination.droppableId;
		const isBoardLists = !/list/.test(sInd);

		// lists
		if (isBoardLists && sInd === dInd) {
			this.props.reorderLists(this.props.board.id, result.source.index, result.destination.index);
			return;
		}

		// inside list
		if (sInd === dInd) {
			this.props.reorderItems(this.props.board.id, sInd, result.source.index, result.destination.index);
			return;
		}

		//TODO add move item between lists
	};

	getItemStyle = (isDragging, draggableStyle) => ({
		// styles we need to apply on draggables
		...draggableStyle,
	});

	handleDeleteBoard = () => {
		this.props.deleteBoard(this.props.board.id);
		this.props.history.push("/");
	};

	uploadImg = async (event) => {
		let encoded = await getBase64(event.target.files[0]);
		this.setState({
			img: encoded,
		});
		this.saveImg();
	};

	addImgByUrl = (imgUrl) => {
		this.setState({
			img: imgUrl,
		});
		this.saveImg();
	};

	saveImg = () => {
		this.props.saveBoardImg(this.props.board.id, this.state.img);
		this.setState({isAddImgOpen: false});
		this.setImageToBody();
	};

	deleteImg = () => {
		this.setState({
			img: '',
		});
		this.props.deleteBoardImg(this.props.board.id);
		this.setImageToBody();
	};

	openFormAddBoardImg = () => {
		this.setState({
			isAddImgOpen: true
		});
	};

	setImageToBody = () => {
		setTimeout(() => {
			const bgClassName = 'boardBg';
			if (this.state.img) {
				document.body.classList.add(bgClassName);
			} else {
				document.body.classList.remove(bgClassName);
			}

			document.body.style.backgroundImage = `url(${this.state.img})`;
		}, 200);

	}
}

function mapStateToProps({board, boardData}) {return {board, boardData}}

export default connect(mapStateToProps,{getBoard, deleteBoard, saveBoardImg, deleteBoardImg, reorderLists, reorderItems})(Board);