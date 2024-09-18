import React from 'react'
import { Button } from '../ui/button'
const Hero = () => {
  return (
    <div className='w-[80%] m-auto flex justify-between align-top mb-40 mt-60'>

        <div className='max-w-lg'>
            <div className='text-5xl font-semibold leading-[60px]'>
                Easily Collect Feedback from your Users
            </div>
            <div className='text-2xl font-normal text-gray-600 my-10 leading-9'>
                Integrate our lightweight widget with a simple script and manage all your feedback in one place.
            </div>
            <Button className='bg-green-500/95 px-10 py-6 text-lg'>Try for free</Button>
        </div>

        <div className='relative max-w-[720px] h-fit '>
          <div className='absolute top-20 -left-4 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob'></div>
          <div className='absolute top-20 -right-4 w-[500px] h-[500px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000'></div>
          <div className='absolute bottom-30 left-40 w-[400px] h-[400px] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob  animation-delay-4000'></div>
          <video className='relative rounded-xl'
            src="/assets/video.mp4" 
            width="680px"
            height="680px"
            autoPlay
            loop 
            muted>
          </video>
          
        </div>

        
        
    </div>
  )
}

export default Hero
