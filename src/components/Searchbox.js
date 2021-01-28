import React from 'react';


const Searchbox = ({searchChange}) => {

	return (

		<div className='ma4'>
			<label>
				insert robot name 
				<input onChange={searchChange} type='text' placeholder='Search Robocops' />
			</label>
		</div>

	);

}


export default Searchbox;
