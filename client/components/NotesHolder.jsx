import React, { useContext, useReducer } from 'react';
import NotesContext from './context.jsx';
import notesReducer from './reducer.jsx';
import Nav from './components/Nav.jsx';
import AddNote from './components/AddNote.jsx';
import NoteList from './components/NoteList.jsx';
import EditNotes from './components/EditNotes.jsx';

// reducer gives us back state and a dispatch function
  // dispatch has two properties: type and a payload 



  const NotesHolder = () =>  {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);


  // we wrap all child components with provider so we can pass down the state
  return (
   <NotesContext.Provider value={{state, dispatch}}>
     <Nav />
     {state.currentNote === null ? (
       <React.Fragment>
        <AddNote />
        <NoteList />
       </React.Fragment>
     ) : <EditNotes /> }
    
   </NotesContext.Provider>
  );
}





export default NotesHolder;