import {useState } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SignIn from './Components/SignIn';

function App() {
  const [users,setUsers]=useState([])
 
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/login" element={<Login users={users}/>} />
        <Route path="/signin" element={<SignIn setUsers={setUsers}/>} /> 
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
      </BrowserRouter>


   
    </div>
  );
}

export default App;
