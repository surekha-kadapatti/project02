import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';

const SignIn = (props) => {
    const {setUsers}=props;
    const [errorMessages, setErrorMessages] = useState({});
    const email=useRef()
    const password=useRef();
    const navigate=useNavigate();
    
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
    
    
    
      // Compare user info
    
      if(!email.current.value.match(emailRegex)){
        setErrorMessages({ name: "email", message: errors.email });
    
      }
      
        if (password.current.value.length<8) {
          // Invalid password
          setErrorMessages({ name: "password", message: "password is too short" });
        } else {
        //   localStorage.setItem("user",JSON.stringify({email:email.current.value,password:password.current.value}))
          setUsers((prev)=>[...prev,{email:email.current.value,password:password.current.value}])
          navigate("/login")
        }
    //   else {
    //     // Username not found
    //     setErrorMessages({ name: "email", message: errors.email });
    //   }
    
         };
    
      return (
        <div className="form">
            <h1>Sign In</h1>
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
        <a href='/login'>Have a Account? Go To Login</a>
      </div>
      )
}

export default SignIn