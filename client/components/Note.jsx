import React, {useContext} from 'react';
import NotesContext from '../context.jsx';



const Note = ({note}) => {

  // dispatch comes from app component
  const {dispatch} = useContext(NotesContext);

  // note object is passed as the payload 

  return (
    <div className="note">
      <p className='CatAndDes'><strong>Category:</strong></p><br></br><p className='small-font'>{note.category}</p>
      <p className='CatAndDes'><strong>Description:</strong> </p><br></br><p className='small-font'>{note.description}</p>
      <div className="btn-container">
        <button className="edit" onClick={() => dispatch({ type: 'SET_CURRENT_NOTE', payload: note})}>Edit</button>
        <button className="delete" onClick={() => dispatch({type: 'DELETE_CURRENT_NOTE', payload: note._id})}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
