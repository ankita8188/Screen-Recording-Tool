"use client"
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import Link from 'next/link';



const Signup = () => {

  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);

      axios.post('http://localhost:5000/user/add', values)
        .then((result) => {
          toast.success('Registered successfully');
          resetForm();
          router.push('/login');
        }).catch((err) => {
          console.log(err);
          toast.error(err?.response?.data?.message || 'Something went wrong');
          setSubmitting(false);
        });
    },

  });




  return (
    <div>
      <section className='bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen flex items-center justify-center'>
        <div className='bg-cyan-500 flex rounded-2xl shadow-lg max-w-3xl p-3'>
          <div className='sm:w-1/2 px-16'>
            <h2 className='font-bold text-2xl text-center pt-8'>SignUp</h2>

            <form onSubmit={signupForm.handleSubmit} className='flex flex-col'>
              <input className='p-2 mt-8 rounded-xl' type="text"
                id='name'
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
                name='name' placeholder='Name' />

              <input className='p-2 mt-8 rounded-xl w-full' type="email"
                id='email'
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
                name='email' placeholder='Email' />


              <input className='p-2 mt-8 rounded-xl' type="password"
                id='password'
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
                name='password' placeholder='Password' />

              <input className='p-2 mt-8 rounded-xl w-full' type="password"
                id='confirmPassword'
                onChange={signupForm.handleChange}
                value={signupForm.values.confirmPassword}

                name='confirmPassword' placeholder='Confirm Password' />
              <button type='submit' className='bg-blue-900 text-white py-2 rounded-xl mt-4'>Submit</button>
            </form>

            <div className='mt-6 grid grid-cols-3 items-center text-grey-400'>
              <hr className='border-grey-400' />
              <p className='text-center'>OR</p>
              <hr className='border-grey-400' />
            </div>

            <button className='bg-white border py-2 w-full rounded-xl mt-5'>Login with Google</button>
          </div>

          <div className='sm:block hidden w-1/2'>
            <img src="view2.jpg" alt="" className='rounded-2xl' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup;
