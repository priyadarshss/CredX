import Image from 'next/image'

export const LandingFeatures = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Features
      </h2>
      <div>
        <div className='mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4'>
          <div className='group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/4341/4341139.png'
                className='w-12'
                width='512'
                height='512'
                alt='AI illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  AI Credit Score
                </h5>
                <p className='text-gray-300'>
                  Generate credit scores for Ethereum and Polygon wallet
                  addresses.
                </p>
              </div>
              <a
                href='#'
                className='flex items-center justify-between group-hover:text-secondary'
              >
                <span className='text-sm'>Learn More</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/4341/4341134.png'
                className='w-12'
                width='512'
                height='512'
                alt='Reasons illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  Reasons for Scores
                </h5>
                <p className='text-gray-300'>
                  Understand the factors affecting credit scores and receive
                  explanations.
                </p>
              </div>
              <a
                href='#'
                className='flex items-center justify-between group-hover:text-secondary'
              >
                <span className='text-sm'>Learn More</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/4341/4341160.png'
                className='w-12'
                width='512'
                height='512'
                alt='Improvement illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  Score Improvement
                </h5>
                <p className='text-gray-300'>
                  Receive tips and suggestions to improve your credit score.
                </p>
              </div>
              <a
                href='#'
                className='flex items-center justify-between group-hover:text-secondary'
              >
                <span className='text-sm'>Learn More</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='group relative bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-gray-800'>
              <Image
                src='https://cdn-icons-png.flaticon.com/512/4341/4341025.png'
                className='w-12'
                width='512'
                height='512'
                alt='More features illustration'
              />

              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  More Features
                </h5>
                <p className='text-gray-300'>
                  Explore additional features and capabilities coming to our platform soon.
                </p>
              </div>
              <a
                href='#'
                className='flex items-center justify-between group-hover:text-secondary'
              >
                <span className='text-sm'>Learn More</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 0100, 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
