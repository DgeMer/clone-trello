import React, {Component} from 'react';

class AddBoardImgForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgUrl: ''
		};
	}

	render() {
		return (
			<div className="form-row">
				<div className="col">
					<label htmlFor="fileBoardImg" className="col-sm-10 col-form-label border border-secondary rounded cp">Upload image</label>
					<div className="col-sm-8">
						<input type="file" className="form-control-file d-none" id="fileBoardImg" onChange={this.props.handleUploadImg}/>
					</div>
				</div>
				<div className="mr-4 pt-1">or</div>
				<div className="col">
					<input type="url" className="form-control" placeholder="Img url" value={this.state.imgUrl} onChange={this.onChangeImgUrl} onKeyUp={this.onKeyUp}/>
				</div>
			</div>
		)
	}

	onChangeImgUrl = (event) => {
		this.setState({imgUrl: event.target.value});
	};

	onKeyUp = (event) => {
		if(!this.state.imgUrl.length) {
			return
		}

		if (event.keyCode === 13) {
			this.props.handleAddImgByUrl(this.state.imgUrl);
		}
	};
}

export default AddBoardImgForm;