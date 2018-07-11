import React from 'react';
import Searchbox from './Searchbox';


const Header = ({searchField, searchChange}) => {
	return (
		<div className="header tc">
			<h1 className="f1">Robofriends</h1>
			<Searchbox searchField={searchField} searchChange={searchChange} />
		</div>
	)
}

export default Header;

