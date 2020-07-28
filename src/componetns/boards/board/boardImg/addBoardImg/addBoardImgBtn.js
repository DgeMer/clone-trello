import React, {Component} from 'react';

class AddBoardImgBtn extends Component {
	render() {
		return (
			<div className="border border-secondary p-2 rounded cp" onClick={this.props.handleOpenFormAddBoardImg}>Add background</div>
		)
	}
}

export default AddBoardImgBtn;