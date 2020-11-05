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

// useEffect(() => {
//   axios
//     .get("/user", {username: user.username, password: user.password } )
//     .then(({ data }) => {
//       return setUser({
//         username: data.user.username,
//         bucket_list: data.user.bucket_list,
//         loggedIn: data.user.loggedIn,
//       });
//     })
//     .catch((err) => console.log(err));
// }, []);

// function logIn(userData) {
//   setUser({
//     username: userData.username,
//     bucket_list: userData.bucket_list,
//     loggedIn: userData.loggedIn,
//   });
// }

// if (user.loggedIn === "true")
//   return <User userName={user.username} logIn={logIn} />;
// return <Login logIn={logIn} />;

export default App;
