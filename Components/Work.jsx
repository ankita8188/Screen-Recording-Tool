import React from 'react'

const Work = () => {
  return (
    <div className="">
  {/* Features */}
  <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
    <div className="min-h-[35vh] md:min-h-[75vh] bg-[url('https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80')] bg-center bg-cover bg-no-repeat relative rounded-xl">
      <div className="absolute bottom-0 start-0 end-0 max-w-xs text-center mx-auto p-6 md:start-auto md:text-start md:mx-0">
        {/* Card */}
        <div className="px-5 py-4 inline-block bg-white rounded-lg md:p-7 dark:bg-neutral-800">
          <div className="hidden md:block">
            <h3 className="text-lg font-bold text-gray-800 sm:text-2xl dark:text-neutral-200">
              How does work?
            </h3>
            <p className="mt-2 text-gray-800 dark:text-neutral-200">
              Learn more about screen Recording.
            </p>
          </div>
          <div className="md:mt-16">
            <a
              className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-white dark:hover:text-neutral-400 dark:focus:text-neutral-400"
              href="#"
            >
              
            </a>
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
  </div>
  {/* End Features */}
</div>

  )
}

export default Work
