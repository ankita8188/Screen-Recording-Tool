"use client"

import React from 'react'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      axios
        .post('http://localhost:5000/user/authenticate', values)
        .then((res) => {

          toast.success('Logged in successfully!');
          console.log(res)
          localStorage.setItem('email', res.data.email);
          localStorage.setItem('name', res.data.name);
          localStorage.setItem('token', res.data.token);
          window.location.replace("/")
          resetForm();
        })
        .catch((err) => {
          console.error(err);
          toast.error('Invalid username or password.');
          setSubmitting(false);
        });
    },
  });
  return (
    <div className='bg-blue-400'>
      <section className='bd-white  min-h-screen flex items-center justify-center'>
        <div className='bg-cyan-500 flex rounded-2xl  shadow-lg max-w-3xl p-3'>
          <div className='sm:w-1/2 px-16'>
            <h2 className='font-bold text-2xl text-center pt-8 '>Login</h2>
            <p className='text-sm mt-4'>If already a member, easily log in </p>
            <form action="" className='flex flex-col  ' onSubmit={loginForm.handleSubmit}>
              <input className='p-2 mt-8 rounded-xl' type="email"
                id='email'
                onChange={loginForm.handleChange}
                value={loginForm.values.email} placeholder='Username' />
              <input className='p-2 mt-8 rounded-xl ' type="password"
                id='password'
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
                placeholder='Password' />

              <button type='submit' className='bg-blue-900 text-white py-2 rounded-xl mt-4'>Login</button>
            </form>
            <div className='mt-6 grid gird-cols-3 items-center text-grey-400'>
              <hr className='border-grey-400' />
              <p className='text-center'>OR</p>
              <hr className='border-grey-400' />
            </div>
            <button className='bg-white border py-2 w-full rounded-xl mt-5'>Login with Google</button>
            <p className='mt-4 text-xs border-b py-5'>Forget Password?</p>
            <div className='mt-3 text-xs flex justify-between items-center'>
              <p>Don't have an account?</p>
              <button className='py-2 px-5 bg-white border rounded-xl ' onClick={()=>{router.push("/signup")}} > Register </button>
            </div>
          </div>
          <div className='sm:block hidden w-1/2 '>
            <img src="view2.jpg" alt="" className='  rounded-2xl' /></div>
        </div>

      </section>
    </div>
  )
}

export default Login
