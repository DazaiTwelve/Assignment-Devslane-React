import React from "react";
import Button from "./Button";
import { Formik } from "formik";
import * as Yup from "yup";    
import { Link } from "react-router";
import ForgotPswd from "./ForgotPswd";

export default function Login() {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    myPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      
      <Formik
        
        initialValues={{ email: "", myPassword: "" }} 
        validationSchema={loginSchema}                
        onSubmit={(values, { setSubmitting }) => {    
          console.log("Login form submitted with values:", values);
          console.log("Email:", values.email);
          console.log("Password:", values.myPassword);
          
          alert(`Attempting to log in with:\nEmail: ${values.email}\nPassword: ${values.myPassword}`);
          setSubmitting(true);
          setTimeout(() => {
            setSubmitting(false);
          }, 1500); 
        }}
      >
       
        {({ handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting }) => (
          <form
            onSubmit={handleSubmit} 
            className="flex flex-col p-5 bg-white rounded-md shadow-md w-96"
          >
            <img src="/logo.png" alt="SnowDen Logo"  />
            <h1 className="self-center mb-4 text-2xl font-bold">
              Login to SnowDen@Shop
            </h1>

            {/* Email Input */}
            <div className="mb-2">
              <input
                value={values.email} 
                onChange={handleChange} 
                onBlur={handleBlur}    
                id="email-address"
                name="email"          
                type="email"
                required
                autoComplete="email"
                placeholder="Email or Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Display email error if field is touched and has an error */}
              {touched.email && errors.email && (
                <div className="mt-1 text-sm text-red-600">{errors.email}</div>
              )}
            </div>
  
            {/* Password Input */}
            <div className="mb-4">
              <input
                value={values.myPassword} 
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"             
                name="myPassword"        
                type="password"
                required
                autoComplete="current-password"
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {touched.myPassword && errors.myPassword && (
                <div className="mt-1 text-sm text-red-600">{errors.myPassword}</div>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting} 
              className="self-end mt-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>

            <div className="mt-4 text-sm text-center">
              <Link to="/*/forgotpswd" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}