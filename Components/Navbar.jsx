"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage user login status
  const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

  // Toggle the login/logout state
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
const logout=()=>{
  localStorage.removeItem('email')
  router.push('/')
}
  return (
    <div className="bg-white text-black">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="flex items-center justify-between md:py-8">
          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black  md:text-3xl" aria-label="logo">
           <img height={50} width={50} src="logo.jpg" alt="" />
            RecPro
          </a>

          {/* Navigation */}
          <nav className="hidden gap-12 lg:flex">
            <a href="#" onClick={()=>{router.push("/")}} className="text-lg font-semibold text-indigo-500">Home</a>
            <a href="#" onClick={()=>{router.push("/features")}} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Feature</a>
            <a href="#" onClick={()=>{router.push("/pricing")}} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a>

            <a href="#" onClick={()=>{router.push("/Record-manage")}} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Recorded Data</a>
            <a href="#" onClick={()=>{router.push("/about")}} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</a>
            <a href="#" onClick={()=>{router.push("/Contact")}} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact</a>

            {/* Login/Logout Button or User Profile */}
            {!localStorage.getItem('email') ? (
              <button onClick={()=>{router.push("/login")}} className="text-lg font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600">
                Login
              </button>
            ) : (
              <div
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <button className="text-lg font-semibold text-black">
                 Hi  {localStorage.getItem('name')}{/* Replace with user's name */}
                </button>

                {menuOpen && (
                  <motion.div
                    className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md p-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-200">
                        <Link href="/Profile-user">Profile</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-200">
                        <a href="" onClick={logout}>Logout</a> {/* Implement logout functionality */}
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            )}
          </nav>
        </header>
      </div>
    </div>
  );
};


export default Navbar
