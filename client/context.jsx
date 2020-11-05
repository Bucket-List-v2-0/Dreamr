import React from 'react';


// useEffect(() => {
//   axios.get('/list')
//   .then(res =>{
    
//   })

const NotesContext = React.createContext({
  currentNote: null,
  notes: []
});


export default NotesContext;