"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-blue-300 text-black py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <motion.h2
          className="mb-4 text-center text-2xl font-bold bg-black text-gray-800 md:mb-8 lg:text-3xl xl:mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, transition: { duration: 0.8 } } : {}}
          ref={ref}
        >
          Pricing
        </motion.h2>
        <motion.div
          className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          ref={ref}
        >
          {/* Free Trial Plan */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-lg border sm:mt-8"
            variants={cardVariants}
          >
            <div className="h-2 bg-pink-500" />
            <div className="flex flex-1 flex-col p-6 pt-8">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                  Free Trial
                </div>
                <p className="mb-8 px-8 text-center text-gray-500">
                  For individuals and organizations who want to try our system
                </p>
                <div className="space-y-4">
                  {/* Feature List */}
                  {['1.000 MB file storage', '2.000 MB bandwidth per month', '200 tasks per month', 'Community support'].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <circle cx={8} cy={8} r={8} fill="currentColor" className="text-gray-300" />
                        <circle cx={8} cy={8} r={3} fill="currentColor" className="text-gray-500" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  $0 / Free
                </a>
              </div>
            </div>
          </motion.div>

          {/* Team Plan */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-lg border-2 border-indigo-500"
            variants={cardVariants}
          >
            <div className="bg-indigo-500 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">
              Popular Choice
            </div>
            <div className="flex flex-1 flex-col p-6 pt-8">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                  Team
                </div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                  Advanced features for individuals and organizations
                </p>
                <div className="space-y-4">
                  {/* Feature List */}
                  {['Unlimited file storage', '10 GB bandwidth per month', '10.000 tasks per month', 'Email support', '100 Webhooks'].map(
                    (item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 shrink-0"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <circle cx={8} cy={8} r={8} fill="currentColor" className="text-gray-300" />
                          <circle cx={8} cy={8} r={3} fill="currentColor" className="text-gray-500" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  $19
                </a>
              </div>
            </div>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            className="flex flex-col overflow-hidden rounded-lg border lg:mt-8"
            variants={cardVariants}
          >
            <div className="h-2 bg-gray-800" />
            <div className="flex flex-1 flex-col p-6 pt-8">
              <div className="mb-12">
                <div className="mb-2 text-center text-2xl font-bold text-gray-800">
                  Enterprise
                </div>
                <p className="mx-auto mb-8 px-8 text-center text-gray-500">
                  Maximum performance for organizations
                </p>
                <div className="space-y-4">
                  {/* Feature List */}
                  {['Unlimited file storage', 'Unlimited bandwidth per month', '1,000,000 tasks per month', 'Email and phone support', 'Unlimited Webhooks'].map(
                    (item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 shrink-0"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <circle cx={8} cy={8} r={8} fill="currentColor" className="text-gray-300" />
                          <circle cx={8} cy={8} r={3} fill="currentColor" className="text-gray-500" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="mt-auto">
                <a
                  href="#"
                  className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                >
                  $49
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;