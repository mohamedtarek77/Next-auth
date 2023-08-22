"use client";

import React , {useState, useEffect} from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import axios  from "axios";
import { toast } from "react-hot-toast";

export default function signup() {

  const router = useRouter!();
  const [user, setUser] = React.useState!({
    email: "",
    password: "",
    username: "",
  });
const [buttonDisabled, setButtonDisabled] = useState!(false);

const [loading, setLoading] = useState!(false);

useEffect!(() => {
  if(user.email.length>0 && user.password.length>0 && user.username.length>0){
    setButtonDisabled(false);
  }else{setButtonDisabled(true)}
}, [user]);

  const onSignup = async () => {

    try {
      setLoading(true);

     const response =  await axios.post("api/users/signup",user)


     console.log("Signup successful", response.data)

     router.push("/login")
    } catch (error:any) {
      console.log( "signUp  failed " , error.message);
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">{loading?"processing":"sign up"}</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 
          text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      ></input>
      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      ></input>
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black "
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      ></input>
      <button
        onClick={onSignup}
        
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-600 text-black"
      > {buttonDisabled?"No signUp":"signUp"}
      </button>
      <Link href="/login"> Visit login page </Link>
    </div>
  );
}
