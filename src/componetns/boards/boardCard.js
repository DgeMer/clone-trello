import React from 'react';
import {Link} from 'react-router-dom';

const BoardCard = ({board}) => {
	return (
		<div className='col mb-4'>
			<div className="card boardCard bg-light" style={{backgroundImage: `url(${board.img})`}}>
				<Link to={`/board/${board.id}`}>
					<div className="card-body text-light font-weight-bolder text-shadow">
						{board.name}
					</div>
				</Link>

			</div>
		</div>
	);
};

export default BoardCard;