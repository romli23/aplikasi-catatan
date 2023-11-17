import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Nav from './components/Nav';
import Note from './components/Note'

const App = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: 'Ini adalah catatan Pertama',
			date: '15/04/2023',
		},
		{
			id: nanoid(),
			text: 'Ini adalah catatan kedua',
			date: '21/04/2023',
		},
		{
			id: nanoid(),
			text: 'Ini adalah catatan ketiga',
			date: '28/04/2023',
		},
		{
			id: nanoid(),
			text: 'Ini adalah catatan keempat!',
			date: '30/04/2023',
		},
	]);



	

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className='nav'>
			<div className='container'>
				<Nav handleAddNote={addNote} />
				<Note  notes={Note}/>
				<NotesList
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;