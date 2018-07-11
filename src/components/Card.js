import React from 'react';

const Card = (props) => {
	const {name, email, id} = props; // destructuring
	return (
		<div className="card bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5 tc">
			<img width="200px" height="200px" alt={name} src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h3>{name}</h3>
				<div>{email}</div>	
			</div>		
		</div>
	);
}

export default Card;