import React, { Component } from 'react';

class ErrorBoundry extends Component{
	constructor(props) { // to have acces to the props you need to include them as parameter
		super(props);  
		this.state = {
			hasError: false
		}

	}
	componentDidCatch(error,info) {
		this.setState({hasError: true})
	}

	render() {
		if(this.state.hasError){
			return<h1>'Oooops an erro occurred'</h1>;
		} else {
			return this.props.children
		}
	}

}

export default ErrorBoundry;