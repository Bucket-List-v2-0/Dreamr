import React, { useContext, useState } from 'react';
import NotesContext from '../context.jsx';





const AddNote = (props) => {
  // console.log('inside add')
  // console.log(props)
  const { dispatch } = useContext(NotesContext);
  // const [category, setFirst] = useState('')
  // const [description , setSecond] = useState('')
  const [bucket, setBucket] = useState({
    category: '',
    description: '',
  }); // this is local state for our add component
  // set state is for updating state which is defualt of an empty string




  // let ref = useRef(); // we want a reference to it so that we focus on that specific input 


  // useEffect(() => {
  //   // when this component renders, useEffect will run whatever is inside the function
  //   ref.current.focus() //focuses on input so we can go straight to typing on it 
  // }, []); // add an arr as a second argument since we only wnat this to run onetime ie

  const handleChange = (e) => {
    const { name, value } = e.target;
    // whenever we type we want ot update local state
    setBucket({
      ...bucket,
      [name]: value
    });

  };

  const handleSubmit = async (e) => {
    // will run when we submit our new note


    // const { category, description } = bucket; 

    // axios.post('/listing/', { category : categroy, description: description })
    // .then(() => console.log('added bucketlist item'))
    // .catch(err => console.log(err))
    await dispatch({ type: 'ADD_NOTE', payload: bucket });
    console.log('changed list')
    props.changeAdd(!props.add)
    setBucket({
      category: '',
      description: '',
    });
    e.preventDefault();
  };



  return (
    <div className="note-form">
      <form onSubmit={handleSubmit} >
        <input type="text" required placeholder='Categories' name='category' onChange={handleChange} value={bucket.category} />
        <input type="text" placeholder='Description' name='description' onChange={handleChange} value={bucket.description} />
        <button />
      </form>
    </div>
  );
}


export default AddNote;
