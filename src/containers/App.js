import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {robots} from '../robots.js';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch(`https://jsonplaceholder.typicode.com/users`)  // fetch is a native window method
		.then(response => {   
			return response.json();   // read and parse the data using json
		})
		.then(users => {
			this.setState({robots : users})  // set the state of robots by assigning the fetched users to it
	    })
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render () {
		const filteredRobots = this.state.robots.filter((robot, i) => {
			return robots[i].name.toLowerCase().includes(this.state.searchField.toLowerCase())
		})
		if(this.state.robots.length === 0) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<Header searchChange={this.onSearchChange} searchField={this.state.searchField} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
					<Footer />
				</div>
			)
		}
	}
}

export default App;