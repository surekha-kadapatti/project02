import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Home = (props) => {
    const user=JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("authenticated"))
        navigate('/login')
    },[])

    const handleSignOut=()=>{
        localStorage.clear();
        navigate('/login');
    }
  return (
    <div>
        <h1>Home</h1>

        <h3>Email : {user?.email} </h3>
        
        <button type='button' onClick={handleSignOut}> Sign Out</button>
        <br></br>
        <a href='/profile'>Go To Profile Page</a>

    </div>
  )
}

export default Home