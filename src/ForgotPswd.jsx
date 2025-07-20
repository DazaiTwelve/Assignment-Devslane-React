import React, { useMemo } from 'react'; // Import useMemo
import * as Yup from 'yup';
import { Formik } from 'formik';
import Button from './Button'; 
import { Link } from 'react-router-dom';

function ForgotPswd() {
  const forgotpassSchema = useMemo(() => Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  }), []); 

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>
        <Formik
          initialValues={{ email: '' }} 
          validationSchema={forgotpassSchema} 
          onSubmit={(values, { setSubmitting }) => {
            console.log("Submitting email for password reset:", values.email);
            setTimeout(() => {
              alert(`Password reset link sent to: ${values.email}`);
              setSubmitting(false); // Enable the button again
            }, 1500);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  id="email" 
                  name="email" 
                  type="email" 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your email"
                  onChange={handleChange('email')} 
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                disabled={isSubmitting} 
              >
                {isSubmitting ? 'Sending...' : 'Reset Password'}
              </Button>
            </form>
          )}
        </Formik>
        <p className="mt-4 text-center text-sm text-gray-600">
          Remember your password? <Link to="/log-in" className="font-medium text-blue-600 hover:text-blue-500">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPswd;