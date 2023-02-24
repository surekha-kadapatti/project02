import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const Login = (props) => {
    const {users}=props;

    const [errorMessages, setErrorMessages] = useState({});
const email=useRef()
const password=useRef();
const navigate=useNavigate();
console.log(users,'users');

const emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  
  const errors = {
    email: "invalid email",
    password: "invalid password"
  };


    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        
        console.log(!emailRegex.test(email));

    const userData = users?.find((item)=>item?.email===email.current.value)    



  // Compare user info

  if(!email.current.value.match(emailRegex)){
    setErrorMessages({ name: "email", message: errors.email });

  }
  if(userData?.email!==email.current.value){
    setErrorMessages({ name: "email", message: "This email is not registered" });

  }
  
    
    if(userData.password!==password.current.value){
        setErrorMessages({ name: "email", message: errors.email });
    
      }
      else {
        localStorage.setItem("authenticated","true")
        localStorage.setItem("user",JSON.stringify({email:email.current.value,password:password.current.value}))

      navigate("/")
    }
//   else {
//     // Username not found
//     setErrorMessages({ name: "email", message: errors.email });
//   }

     };

  return (
    <div className="form">
        <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <label>Email </label>
        <input type="email" ref={email} name="email" required />
        {renderErrorMessage("email")}
      </div>
      <br></br>
      <div className="input-container">
        <label>Password </label>
        <input type="password" ref={password} name="password" required />
        {renderErrorMessage("password")}
      </div>
      <br></br>
      <div className="button-container">
        <input type="submit" />
      </div>
    </form>
    <a href='/signin'>Create Account? Go To Sign In </a>
  </div>
  )
}

export default Login;