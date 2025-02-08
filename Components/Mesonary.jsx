import React from 'react'

const Mesonary = () => {
  return (
    <>
  {/* Masonry Cards */}
  <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}
    <div className="grid sm:grid-cols-12 gap-6">
      <div className="sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Workplace personalities
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Women in engineering
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-span-12 md:col-span-4">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Caputure Moments
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Easily Record
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-span-12 sm:col-span-6 md:col-span-4">
        {/* Card */}
        <a
          className="group relative block rounded-xl overflow-hidden focus:outline-none"
          href="#"
        >
          <div className="aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden">
            <img
              className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover"
              src="https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              alt="Masonry Cards Image"
            />
          </div>
          <div className="absolute bottom-0 start-0 end-0 p-2 sm:p-4">
            <div className="text-sm font-semibold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-neutral-800 dark:text-neutral-200">
              Time Saving
            </div>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>
  {/* End Masonry Cards */}
</>

  )
}

export default Mesonary;
