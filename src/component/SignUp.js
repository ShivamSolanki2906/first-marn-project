import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const navegat = useNavigate();

   useEffect(() => {
    const auth = localStorage.getItem('user')
    if(auth)
      {
        navegat('/')
      }
   } , [])

  const signUpGetValue = async () => {

    if (!name || !email || !password) {
      setError(true);
      return false;
    }

    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/singin", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result))
    // localStorage.setItem('token',JSON.stringify(result.auth))
    navegat("/");

   
  };

  return (
    <>
      <div className="input-warp">
        <p className="page-heading">Sing Up</p>
        <div className="input-fild">
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
          />
           {error && !name && (
            <span className="valid-fild" style={{ color: "red" }}>
              Enter Your Name
            </span>
          )}
          <input
            type="text"
            placeholder="Enter Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
            {error && !email && (
            <span className="valid-fild" style={{ color: "red" }}>
              Enter your email
            </span>
          )}
          <input
            type="text"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !password && (
            <span className="valid-fild" style={{ color: "red" }}>
              Enter Password
            </span>
          )}
        </div>
        <div className="signup-btn-wrap">
          <button className="Add-btn" onClick={signUpGetValue}>
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
