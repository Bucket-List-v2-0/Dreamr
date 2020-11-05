import React from "react";
import axios from "axios";
import NotesHolder from './components/NotesHolder';
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (

      <Router>
        <Switch>
        <Route path = '/' exact component = {NotesHolder}/>
        <Route path = '/home/:id' component = {NotesHolder}/>
        <Route exact path = '/login' component = {Login}/>
        </Switch>
      </Router>

      
  );
}

export default App;
