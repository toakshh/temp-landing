import React from 'react'
import Cards from './ui/Cards'

const tempCards = [
  {
    id: "6841360500568adf77acf136",
    name: "Jonas",
    title: 'Generate Your Avatar',
    image: '/1.jpg'
  },
  {
    id: "6841f9a800568adf77acfcda",
    title: 'Use with Web SDK',
    name: "Celine",
    image: '/2.jpg'
  },
  {
    id: "6841e1b500568adf77acfc49",
    title: 'Integrate Seamlessly',
    name: "Jaxon",
    image: '/3.jpg'
  },
  {
    id: "6841d83100568adf77acfb3f",
    title: 'Align with Your Brand',
    name: "Teyo",
    image: '/4.jpg'
  },
]
const AiCards = () => {
  return (
    <section className='w-full'>
        <div
          className="absolute left-0 w-screen h-full bg-cover bg-center -z-10"
          style={{ backgroundImage: 'url(/bg-2.jpeg)', backgroundPosition: 'center' }}
        />
      <div className='max-w-screen-xl mx-auto relative flex flex-col gap-4 items-start justify-center  w-full py-10 min-h-screen'>

          <div className='flex flex-col gap-4'>
              <h2 className='md:text-5xl text-2xl font-bold'>
                  Try <span className='brand-highlight-text'>Hyper-Realistic</span> AI Avatars
              </h2>
              <h5 className='text-lg text-gray-300 sm:text-xl text-center sm:text-left w-xl'>
                  Each avatar is unique and can be customized to reflect your brand&apos;s identity and values.
              </h5>
          </div>
          <div className='flex items-start justify-between gap-8 w-full'>
              {
                tempCards?.map((item, index) => (
                  <Cards image={item.image} title={item.title} id={item.id} key={index}/>
                ))
              }
          </div>
      </div>
    </section>
  )
}

export default AiCards