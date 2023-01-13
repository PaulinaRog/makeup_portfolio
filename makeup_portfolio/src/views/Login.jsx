import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LeftNav from "../components/nav/LeftNav";
import supabase from "../services/supabaseClient";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [text, setText] = useState(" ");
  const navigate = useNavigate();

  //   const handleSignUp = async () => {
  //     try {
  //       const {
  //         data: { user },
  //         error,
  //       } = await supabase.auth.signUp({
  //         email: emailRef.current.value,
  //         password: passwordRef.current.value,
  //       });

  //       if (error) {
  //         console.log(error);
  //       }
  //       if (user) {
  //         console.log(user);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleLogin = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    if (error) {
      setText("Error! Check email and password, then try again.");
    }
    if (user) {
      navigate("/dashboard");
    }
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login">
      <LeftNav />
      <form className="login-form">
        <div style={{ display: "grid" }}>
          <label className="login-label">e-mail</label>
          <input className="login-input" type="email" ref={emailRef} />
        </div>
        <div style={{ display: "grid" }}>
          <label className="login-label">password</label>
          <input className="login-input" type="password" ref={passwordRef} />
        </div>
        {text ? <p className="text-error">{text}</p> : null}
        <button
          type="submit"
          className="login-button"
          onClick={(e) => {
            e.preventDefault();
            handleLogin();
            // handleSignUp()
          }}
        >
          log in
        </button>
      </form>
      <button
        className="login-button"
        onClick={handleNavigate}
        style={{ position: "absolute", right: "4em", top: "1em" }}
      >
        dashboard
      </button>
    </div>
  );
}
