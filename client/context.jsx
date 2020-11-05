import React from 'react';


const NotesContext = React.createContext({
  currentNote: null,
  notes: []
});


export default NotesContext;