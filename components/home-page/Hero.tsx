import React from 'react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className='w-[90%] m-auto flex flex-col md:flex-row gap-16 md:gap-5 lg:gap-10 md:justify-between md:align-top mb-40 mt-32 md:mt-60 align-middle justify-center'>
      
      {/* Text Section */}
      <div className='md:w-[100%] lg:max-w-lg text-center md:text-left pb-20'>
        <div className='text-3xl lg:text-4xl font-semibold leading-[40px]'>
          Easily Collect Feedback from your Users
        </div>
        <div className='text-xl lg:text-2xl font-normal text-gray-600 my-5 lg:my-10 leading-7 lg:leading-9'>
          Integrate our lightweight widget with a simple script and manage all your feedback in one place.
        </div>
        <Button className='bg-green-500/95 px-8 md:px-10 py-4 lg:py-6 text-md lg:text-lg'>
          Try for free
        </Button>
      </div>

      {/* Video and Background Animations */}
      <div className='relative max-w-[720px] h-fit'>
        {/* Background blobs */}
        <div className='absolute top-20 -left-4 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[350px] xl:h-[350px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob'></div>
        <div className='absolute top-20 -right-4 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] xl:w-[350px] xl:h-[350px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000'></div>
        <div className='absolute bottom-20 left-20 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] xl:w-[300px] xl:h-[300px] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-4000'></div>

        {/* Video */}
        <video className='relative rounded-xl'
          src="/assets/video.mp4" 
          width="100%"
          height="auto"
          autoPlay
          loop 
          muted>
        </video>
      </div>
      
    </div>
  );
};

export default Hero;



// import React from 'react'
// import { Button } from '../ui/button'
// const Hero = () => {
//   return (
//     <div className='w-[90%] m-auto flex flex-col md:flex-row gap-20 md:gap-10 md:justify-between md:align-top mb-40 mt-32 md:mt-60 align-middle justify-center'>

//         <div className='max-w-lg text-center md:text-left pb-20'>
//             <div className='text-3xl md:text-4xl font-semibold leading-[40px]'>
//                 Easily Collect Feedback from your Users
//             </div>
//             <div className='text-xl md:text-2xl font-normal text-gray-600 my-5 md:my-10 leading-7 md:leading-9'>
//                 Integrate our lightweight widget with a simple script and manage all your feedback in one place.
//             </div>
//             <Button className='bg-green-500/95 px-8 md:px-10 py-4 md:py-6 text-md md:text-lg'>Try for free</Button>
//         </div>

//         <div className='relative max-w-[720px] h-fit '>
//           <div className='absolute top-20 -left-4 w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob'></div>
//           <div className='absolute top-20 -right-4 w-[200px] h-[200px] lg:w-[350px] lg:h-[350px]  bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000'></div>
//           <div className='absolute bottom-30 left-40 w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob  animation-delay-4000'></div>
//           <video className='relative rounded-xl'
//             src="/assets/video.mp4" 
//             width="720px"
//             height="720px"
//             autoPlay
//             loop 
//             muted>
//           </video>
          
//         </div>

        
        
//     </div>
//   )
// }

// export default Hero
