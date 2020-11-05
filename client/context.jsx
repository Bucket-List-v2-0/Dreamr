import React from 'react';

//adding the users id from window.location.href
const NotesContext = React.createContext({
  currentNote: null,
  notes: []
});


export default NotesContext;