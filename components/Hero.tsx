import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{' '}
            is a place to wriute, read, and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img 
        className='hidden md:inline-flex h-28 lg:h-48'
        src='https://logowiki.net/uploads/logo/m/medium-1.svg' 
        alt='' />
      
    </div>
  )
}

export default Hero
