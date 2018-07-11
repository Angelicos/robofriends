import React from 'react';


const Searchbox = ({searchField, searchChange}) => {
	return (
		<div>
		   <input onChange={searchChange}
			   className='pa3 b--green bg-lightest-blue ba'
			   type="search" 
			   paceholder="Search robots" />
		</div>
	)
}

export default Searchbox;