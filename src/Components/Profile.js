import React, { useState } from "react";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user?.password);
  const [edit, setEdit] = useState(false);

  const handleSave= () =>{
    localStorage.setItem("user",JSON.stringify({email:email,password:password}))
    setEdit(false);
  }

  const handleEdit = () => {setEdit(true)};
  return (
    <div>
      <h1>Profile</h1>
      {edit ? (
        <div>
          <label>Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      ) : (
        <>
          <h3>Email : {email} </h3>
          <h3>Password: {password}</h3>
        </>
      )}
      <button type="button" onClick={edit?handleSave:handleEdit}>
        {edit?"Save":"Edit"}
      </button>
      <br></br>

      <a href="/">Go To Home Page</a>
    </div>
  );
};

export default Profile;
