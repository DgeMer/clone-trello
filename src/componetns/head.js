import React from 'react';
import {Link} from 'react-router-dom';

const Head = () => (
	<nav className="navbar navbar-light bg-light">
		<Link className="navbar-brand" to='/'>Clone trello</Link>
	</nav>
);

export default Head;