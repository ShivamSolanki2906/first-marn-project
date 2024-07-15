import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user')
    if(auth)
        {
            navigate('/')
        }
  })
  const userLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result) {
      localStorage.setItem("user", JSON.stringify(result));
      // localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("sdfgbnmj,mh");
    }
  };
  return (
    <>
      <div className="input-warp">
        <p className="page-heading">Login</p>
        <div className="input-fild">
          <input
            type="text"
            placeholder="Enter Your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="signup-btn-wrap">
          <button className="Add-btn" onClick={userLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Login;
