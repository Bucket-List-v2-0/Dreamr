import React, { useContext, useState, useRef, useEffect } from 'react';
import NotesContext from '../context.jsx';





const AddNote = () => {

  const { dispatch } = useContext(NotesContext); 
  const [value, setValue] = useState(''); // this is local state for our add component
  // set state is for updating state which is defualt of an empty string




  let ref = useRef(); // we want a reference to it so that we focus on that specific input 


  useEffect(() => {
    // when this component renders, useEffect will run whatever is inside the function
    ref.current.focus() //focuses on input so we can go straight to typing on it 
  }, []); // add an arr as a second argument since we only wnat this to run onetime ie

  const handleChange = (e) => {
    // whenever we type we want ot update local state
    setValue(e.target.value);


  };

  const handleSubmit = (e) => {
    // will run when we submit our new note
    e.preventDefault();

    //prevent person from not typing. can also put require in input attribute
    if (value.trim() === '') {
      alert('Cannot add a blank note');
    } else {
      // if it is a valid note then 
      dispatch({type: 'ADD_NOTE', payload: value});
      setValue(''); 
    }
  };

  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} action="">
        <input type="text" ref={ref} onChange={handleChange} value={value} />
        <button>Add Note</button>
      </form>
    </div>
  );
}

export default AddNote;
