import React, { useContext, useReducer, useEffect} from 'react';
import NotesContext from '../context.jsx';
import notesReducer from '../reducer.jsx';
import AddNote from './AddNote.jsx';
import NoteList from './NoteList.jsx';
import EditNotes from './EditNotes.jsx';
import axios from 'axios';


// reducer gives us back state and a dispatch function
  // dispatch has two properties: type and a payload 
  const NotesHolder = () =>  {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);

  // console.log(state);

  useEffect(() => {
    axios.get('http://localhost:3000/list/')
    .then(res => {
      console.log('result from db' ,res.data);
      // let newState = [...state.notes, res.data]; 
      // return {
      //   ...state, 
      //   notes: newState
      // }
    })
    .catch(err =>{
      console.log(err);
    })
  },[])

  // we wrap all child components with provider so we can pass down the state
  return (
   <NotesContext.Provider value={{state, dispatch}}>
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