import React, {useContext} from 'react';
import NotesContext from '../context.jsx';
import Note from './Note.jsx';


// need use context becasue we need to go into our state and grab the notes arr and render for each note object we wnt to create a note objec  


const NoteList = () => {

  const { state } = useContext(NotesContext); // this state comes from provider on app.js file which in turn comes from notes reducer 

  // note arg in map func is the note object passed down from the state 
  return (
    <div className="notes-container">
      {state.notes.map((note) => {
        return <Note note={note} key={note._id} />
      })}
    </div>
  );
}

export default NoteList;
