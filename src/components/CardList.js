import React from 'react';
import Card from './Card';

const CardList = (props) => {
	const {robots}= props;
	const cardsArray = robots.map((robot, i) => {
		if (true) {
			throw new Error ('Noooo!');
		} else {
		return <Card 
				key={robots[i].id}
				email={robots[i].email} 
				id={robots[i].id} 
				name={robots[i].name} 
				/>
		}
	})
	return (
		<div>
			{cardsArray}
		</div>
	)
}

export default CardList;
