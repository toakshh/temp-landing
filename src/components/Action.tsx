import React from 'react'
import OptimizedVideo from './ui/OptimizedVideo'

const Action = () => {
  return (
    <section className='w-full max-w-screen-xl mx-auto ai-cards-bg my-14'>
        <div className=' flex-center bg-gray-600 aspect-video '>
            <OptimizedVideo className='max-w-screen w-full h-full object-cover ' video="/videos/shortDemo.webm" fallBackSrc="/videos/shortDemo.mp4" />
        </div>
    </section>
  )
}

export default Action