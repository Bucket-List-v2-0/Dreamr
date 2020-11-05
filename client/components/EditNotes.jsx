import React, { useContext, useState, useRef, useEffect } from 'react';
import NotesContext from '../context.jsx';





const EditNotes = () => {
  const {state, dispatch} = useContext(NotesContext);
  const [value, setvalue] = useState(state.currentNote.text); // since we want the current note text

  let ref = useRef(); 

  useEffect(() => {
    // run effet when component renders
    ref.current.focus();
  }, []);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      alert('cannot add a blank note');
    } else {
      dispatch({type: 'UPDATE_NOTE', payload: value});
      setvalue('');
    }
  };



  return (
    <div className='note-form'>
      <form onSubmit={handleSubmit} action="">
    <textarea ref={ref} onChange={handleChange} value={value} name='' id='' cols='30' rows='10'/>
      <div style={{textAlign: 'right'}}>
        <button>Update Note</button>
      </div>
      </form>
    </div>
  );
}

export default EditNotes;
