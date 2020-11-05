import React from "react";
import axios from "axios";
import NotesHolder from './components/NotesHolder';
import Login from './components/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
  return (

      <Router>
        <Route path = '/' exact component = {NotesHolder}/>
        <Route path = '/home/:id' component = {NotesHolder}/>
        <Route path = '/login' component = {Login}/>
      </Router>

      
  );
}

export default App;
