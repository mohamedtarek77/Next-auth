

"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast   from "react-hot-toast";



export default function LoginPage() {


    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const [error,setError] =React.useState('')


    const validateEmail = (email:any) => {
        // You can implement your email validation logic here
        // For a simple check, we are using a regular expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password:any) => {
        // You can implement your password validation logic here
        // For a simple check, we are requiring a minimum length of 8 characters
        return password.length >= 8;
    };


    const onLogin = async () => {

        try {
            if (!validateEmail(user.email)) {
                setError("Invalid email address");
                return;
            }

            if (!validatePassword(user.password)) {
                setError("Password must be at least 8 characters long");
                return;
            }


            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);

            toast.success("Login success");

            router.push("/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error("Login failed. Please check your email and password.");

            // toast.error(error.message);
            // Show the forgot password button on login failure
             setError("You have entered a wrong password");
        } finally {
            setLoading(false);
        }
    }

    const forgotPassword = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);

            // document.getElementById("forgot").innerHTML = "Check your email to rest the password";
            console.log("forgot password check your email", response.data);

            toast.success("Check your email to reset the password");

            
            setError("");


        } catch (error: any) {
            // console.log("Login failed", error.message);
            toast.error(error.message);

            console.log("Forgot password failed", error.message);
            toast.error("Forgot password failed. Please try again.");
        } finally {
            setLoading(false);
        }
    }



    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]); 

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <div className="flex flex-col items-center justify-center h-auto w-80 bg-lime-500 border-2 rounded-lg border-lime-900 my-10 py-10">
                <h1>{loading ? "Processing" : "Login"}</h1>
                <hr />
                {!loading &&
                    <>
                        <label htmlFor="email">email</label>
                        <input
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            id="email"
                            type="text"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            placeholder="email"
                            required  
                        />
                        <label htmlFor="password">password</label>
                        <input
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            id="password"
                            type="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            placeholder="password"
                            required  
                        />
                        <button
                            onClick={onLogin}
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Log In </button>
                       
                       {error&& <>
                       
                        <button
                            onClick={forgotPassword }
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">forgot password ?</button>


                        <p id="forgot" > </p>
                       </>}
               

                        <p className="py-2">Don't have an account?</p>

                        <button

                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">


                            <Link href="/signup">Sign Up</Link>
                        </button>



                    </>

                }


            </div>
        </div>
    )

}
