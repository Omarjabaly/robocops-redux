import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cardlist from '../components/Cardlist';
import { setSearchField, requestRobots } from '../actions';
import 'tachyons';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

const mapStateToProps = (state) => {

	return {	searchField: state.searchRobots.searchField,
				isPending: state.getRobots.isPending,
				robots: state.getRobots.robots,
				error: state.getRobots.error
			 }
}

const mapDispatchToProps = (dispatch) => {

	return  ({ 
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onGetRobots: () => dispatch(requestRobots())
		})
}

class App extends Component {

	componentDidMount() {																																							
		this.props.onGetRobots();
	}


	render() {

		const { searchField, onSearchChange, robots, isPending } = this.props;

		var filteredRobots = robots.filter((robot) => {
				return robot.name.toLowerCase().includes(searchField.toLowerCase()) 
				}
			)

		
		return ( 

 			<div className ='tc'>
				<h3 className='f1 ma3'>Robocops</h3>
				<Searchbox searchChange={onSearchChange}/>
 				{ (isPending) 
 					? 
 						<div className = 'flex justify-center f4'>
 							<h1>Loading....</h1>  
 						</div>

 					: 	
			 			<div className ='tc'>

							<ErrorBoundary>
								<Scroll>
									<Cardlist robots={filteredRobots} />
								</Scroll>
							</ErrorBoundary>
			 			</div>
				}

			</div>
		);				

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
