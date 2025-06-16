import { useCases } from '@/constants/content'
import React from 'react'

const Usecase = () => {
  return (
    <section className=' max-w-screen-xl mx-auto flex flex-col gap-4 items-start w-full bg-background py-10 '>
        <div className='flex flex-col gap-4'>
            <h2 className='md:text-5xl text-2xl font-semibold'>
                Create Your Own AI Avatar in minutes
            </h2>
            <h5 className='text-lg sm:text-xl text-center sm:text-left w-lg'>
                Instantly integrate an AI assistant that reflects your brand&apos;s identity and values.
            </h5>
        </div>

        <div className='grid grid-cols-4 gap-4 mt-8 w-full'>
            {
                useCases.map(({icon: Icon, ...useCase}) => (
                    <div key={useCase.id} className='flex items-center gap-2'>
                        <div className='flex-center p-3 rounded-md bg-background h-20 w-20'>
                            <Icon className='w-12 h-12 ' />
                        </div>
                        <h4 className='text-2xl font-semibold '>{useCase.title}</h4>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Usecase