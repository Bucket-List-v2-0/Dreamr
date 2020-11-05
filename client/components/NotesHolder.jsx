import React, { useContext, useReducer, useEffect, useState } from 'react';
import NotesContext from '../context.jsx';
import notesReducer from '../reducer.jsx';
import AddNote from './AddNote.jsx';
import NoteList from './NoteList.jsx';
import EditNotes from './EditNotes.jsx';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';


// reducer gives us back state and a dispatch function
// dispatch has two properties: type and a payload 
const NotesHolder = () => {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  const [adding, setAdd] = useState(true);



  // console.log('this is the state', state);
  // console.log('this is state.notes', state.notes);

  useEffect(() => {

    axios.get('http://localhost:3000/list/')
      .then(res => {
        console.log('data from request', res.data);
        // let newState = [...state.notes, res.data]; 
        // console.log('this is the new state', newState);
        dispatch({ type: 'DATA_FROM_DB', payload: res.data });
      })

      .catch(err => {
        console.log(err);
      })
  }, [adding])


  function tester(something) {
    setAdd(something)
  }

  // we wrap all child components with provider so we can pass down the state

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {/* {state.currentNote === null ? ( */}
      <React.Fragment>
        <div className="sign-up-title">
          <p>Bucket List V.2.0</p>
        </div>
        <AddNote add={adding} changeAdd={tester} />
        <NoteList />
      </React.Fragment>
      {/* ) : <EditNotes /> } */}

    </NotesContext.Provider>
  );
}





export default NotesHolder;