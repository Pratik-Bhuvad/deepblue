import React from 'react'

const News = () => {
  return (
    <div className="bg-white pb-10">
      <div className=" px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">News Related Sustainable Ocean Development And Discoveries</h2>

        <div className="mt-6 px-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          <div className="group relative p-2 border-2 rounded-md">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-400 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img alt="" src="https://media.wired.com/photos/66a1270879d6a178ea5764e2/191:100/w_1280,c_limit/crab-coral-hires.jpg"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="https://www.wired.com/story/dark-oxygen-deep-sea-polymetallic-nodules-discovery/" target='_blank' className='font-bold text-base'>
                    <span aria-hidden="true" className="absolute inset-0" />
                    The Mysterious Discovery of ‘Dark Oxygen’ on the Ocean Floor
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
