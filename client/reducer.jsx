

export default function reducer(state, action) {

  // userReducer takes in two things: 
  // 1. reducer function 
  // 2. initial state

  switch(action.type) {
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        // what we want to do is update current note
        // that payload is the note object that we passed down when we clicked on that edit button
        currentNote: action.payload
      }

      case 'DELETE_CURRENT_NOTE':
        const deletedNotes = state.notes.filter(note => note.id !== action.payload);

        return {
          ...state,
          // since we are updating the notes array we just need to reassign it to the 
          // value of the deletedNotes 
          notes: deletedNotes
        }

        case 'ADD_NOTE':
          const newNote = {
            category: action.payload.category,
            description: action.payload.description
          }
            
          const addedNotes = [...state.notes, newNote];
          return {
            ...state, 
            notes: addedNotes // updated notes with addedNotes variable 
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



    default: 
      return state; 
  }




};