import axios from "axios";


export default function reducer(state, action) {

  // userReducer takes in two things: 
  // 1. reducer function 
  // 2. initial state

  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        // what we want to do is update current note
        // that payload is the note object that we passed down when we clicked on that edit button
        currentNote: action.payload
      }

    case 'DELETE_CURRENT_NOTE':

      const deletedNotes = state.notes.filter(note => note._id !== action.payload);

      axios.delete(`http://localhost:3000/list/${action.payload}`)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));

      return {
        // since we are updating the notes array we just need to reassign it to the 
        // value of the deletedNotes 
        notes: deletedNotes
      }

    case 'ADD_NOTE':
      const { category, description } = action.payload;
      const newBucket = { category, description };


      console.log('we are adding')
      axios.post('http://localhost:3000/list/', newBucket)
        .then(res => {
          console.log('we are in the reducer and added', res);

        })
        .catch(err => console.log(err));

      const addedNotes = [...state.notes, newBucket];
      return {
        ...state,
        notes: addedNotes // updated notes with addedNotes variable. did not need since we're using useEffect on home page and setting state as the dependency array
      }

    case 'UPDATE_NOTE':
      const updatedNote = {
        ...state.currentNote,
        text: action.payload
      }

      // need the index of the notes so that we know where in the array that note resides 
      const updatedNoteIndex = state.notes.findIndex(
        note => note.id === state.currentNote.id
      )

      const updatedNotes = [
        // we want to spread out
        ...state.notes.slice(0, updatedNoteIndex), // grab all notes up to but not including that note index
        updatedNote,
        ...state.notes.slice(updatedNoteIndex + 1) // pass in rest of notes
      ];

      return {
        currentNote: null,
        notes: updatedNotes
      }


    case 'DATA_FROM_DB':
      return {
        ...state,
        notes: action.payload
      }


    default:
      return state;
  }




};