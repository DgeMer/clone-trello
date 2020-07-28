import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Head from "./head";
import NotFound from "./notFound";
import Boards from "./boards";
import Board from "./boards/board/board";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Head/>
				<div className='container-fluid mt-4'>
					<Switch>
						<Route exact path="/" component={Boards}/>
						<Route exact path="/board/:id" component={Board}/>
						<Route component={NotFound} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
