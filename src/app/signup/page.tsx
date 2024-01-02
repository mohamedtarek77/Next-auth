"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import axios from "axios";
import { toast } from "react-hot-toast";

export default function Signup() {

  const router = useRouter!();
  const [user, setUser] = useState!({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState!(false);

  const [loading, setLoading] = useState!(false);


  const [error, setError] = useState({
    emailError: "",
    passwordError: ""
  })


  const validateEmail = (email: any) => {
    // You can implement your email validation logic here
    // For a simple check, we are using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: any) => {
    // You can implement your password validation logic here
    // For a simple check, we are requiring a minimum length of 8 characters
    return password.length >= 8;
  };

  useEffect!(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else { setButtonDisabled(true) }
  }, [user]);

  const onSignup = async () => {

    try {

      if (!validateEmail(user.email)) {
        // setError({ ...error, emailError: 'Invalid email address' });

        setError((prev)=>{
          return(
            {...prev,emailError:"Invalid email address"}
          )
        });

       
        // setError((prev)=>{
        //   return(
        //     {...prev,emailError:""}
        //   )
        // });


        return;
      }

      if(validateEmail(user.email)){
          setError((prev)=>{
          return(
            {...prev,emailError:""}
          )
        });
      }

      if (!validatePassword(user.password)) {

        // setError({ ...error, emailError: 'Password must be at least 8 characters long' });
        setError((prev)=>{
          return(
            {...prev,passwordError:"Password must be at least 8 characters long"}
          )
        });

        return;
      }

      if(validatePassword(user.password)){
        setError((prev)=>{
        return(
          {...prev,passwordError:""}
        )
      });
    }

      setLoading(true);

      const response = await axios.post("api/users/signup", user)


      console.log("Signup successful", response.data)

      router.push("/login")
    } catch (error: any) {
      console.log("signUp  failed ", error.message);
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center h-auto w-80 bg-lime-500 border-2 rounded-lg border-lime-900 my-10 py-10">

        <h1 className="text-center text-white text-2xl">{loading ? "processing" : "sign up"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 
          text-black"
          id="username"
          type="text"
          value={user.username}
          // onChange={(e) => setUser({ ...user, username: e.target.value })}
          onChange={(e) => setUser( (prev)=> ({ ...prev, username: e.target.value }) )}


          placeholder="username"
          required  
        ></input>
        <label htmlFor="email">email</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          required  
        ></input>
        {error.emailError && <p className="text-red-800">{error.emailError}</p>}

        <label htmlFor="password">password</label>
        <input
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          required  
        ></input>

        {error.passwordError && <p className="text-red-800">{error.passwordError}</p>}

        <button
          onClick={onSignup}

          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
        >

          {/* {buttonDisabled?"No signUp":"signUp"} */}
          Sign Up

        </button>

        <p>Already have an account? <span className="text-white font-bold	"> <Link href="/login">log In</Link></span></p>

      </div>
    </div>
  );
}
