import React from 'react';

import {  useNavigate } from 'react-router-dom';
const navigate = useNavigate()

const Header = () => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() => navigate('/AddNote')}
					
				className='save'
			>
				Tambah Catatan
			</button>
		</div>
	);
};

export default Header;