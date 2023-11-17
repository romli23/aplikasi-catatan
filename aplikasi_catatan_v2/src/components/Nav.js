import React from 'react';
import AddNote from './AddNote';

const Nav = ({ }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={AddNote}
				
				className='save'
			>
				Add Note
			</button>
		</div>
	);
};

export default Nav;