import React, { useContext, useRef } from "react";
import MainContext from "../context/MainContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const refs = {
    regName: useRef(),
    regPassOne: useRef(),
    regPassTwo: useRef(),
    regAge: useRef(),
    loginName: useRef(),
    loginPass: useRef(),
  };
  const nav = useNavigate();

  const { setUser, socket } = useContext(MainContext);

  const http = async (url, data) => {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const res = await fetch("http://localhost:4000" + url, options);
    return res.json();
  };

  const register = async () => {
    const user = {
      username: refs.regName.current.value,
      passOne: refs.regPassOne.current.value,
      passTwo: refs.regPassTwo.current.value,
      age: refs.regAge.current.value,
    };

    const result = await http("/register", user);
    console.log(result);
  };

  const login = async () => {
    const user = {
      username: refs.loginName.current.value,
      password: refs.loginPass.current.value,
    };

    const result = await http("/login", user);
    console.log(result);
    if (!result.error) {
      setUser(result.data);
      socket.emit("login", result.data);
      nav("/app");
    }
  };

  return (
    <div>
      <div className="login">
        <div className="inps">
          <input ref={refs.regName} type="text" placeholder="username" />
          <input ref={refs.regPassOne} type="text" placeholder="pass 1" />
          <input ref={refs.regPassTwo} type="text" placeholder="pass 2" />
          <input ref={refs.regAge} type="text" placeholder=" Age" />
          <button onClick={register}>Register</button>
        </div>

        <div className="inps">
          <input ref={refs.loginName} type="text" placeholder="username" />
          <input ref={refs.loginPass} type="text" placeholder="pass" />
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
