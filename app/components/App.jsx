import AltContainer from 'alt/AltContainer';
import React from 'react';
import Lanes from './Lanes.jsx';
import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


import { Grid, Row, Col } from 'react-bootstrap';
import LayoutNavBar from './layout/LayoutNavBar.jsx';
import LayoutSideBar from './layout/LayoutSideBar.jsx';


@DragDropContext(HTML5Backend)
export default class App extends React.Component {
	render() {
		const notes = this.props.notes;
		return (
			<div>
				<LayoutNavBar />
				<Grid fluid>
					<Row>
						<LayoutSideBar />
					</Row>
				</Grid>
			</div>


			/*<div>
				<button className="add-note" onClick={this.addItem}>+</button>
				<AltContainer
					stores={[LaneStore]}
					inject={
						{ items: () => LaneStore.getState().lanes || [] }
					}
				>
					<Lanes />
				</AltContainer>
			</div>*/
		);
	}
	addItem() {
		console.log('addItem');
		LaneActions.create({ name: 'New Lane' });
	}
}