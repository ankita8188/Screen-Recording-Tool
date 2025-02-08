"use client"
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Newslatter = () => {
  const [inView, setInView] = useState(false);

  // This function will be used to detect when the component is in the viewport
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("newsletter");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setInView(true);
        }
      }
    };

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-black py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <motion.div
          id="newsletter"
          className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          <div className="mb-4 sm:mb-8">
            <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">
              Get the latest updates
            </h2>
            <p className="text-center text-gray-500">Sign up for our newsletter</p>
          </div>

          {/* Form starts here */}
          <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5" method="POST">
            <div className="w-full flex gap-2">
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                required
                aria-label="Email address"
                className="bg-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.button
                type="submit" 
                className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Send
              </motion.button>
            </div>
          </form>
          <p className="text-center text-xs text-gray-400">
            {"Thank for subscribe"}
            <a
              href="#"
              className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Term of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Newslatter;