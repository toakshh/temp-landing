'use client'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { APP_URL } from '@/constants/constant'

interface CardsProps {
  image: string,
  title: string,
  id: string,
}

const Cards = ({image, title, id}: CardsProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const handleOnClick = () => {
    if( typeof window !== 'undefined' && id) window.open (`${APP_URL}/chat/?avatarId=${id}`, '_blank');
    console.log(id, typeof window)
  }
  return (
    <div key={id} className={`relative w-96 h-80 bg-black rounded-2xl flex-center overflow-hidden hover:drop-shadow-amber-500 hover:scale-110 transition-all duration-300 cursor-pointer `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <Image className={`object-cover w-96 h-80 ${isHovered ? ' opacity-80' : ''}`}  src={image} alt={title} width={320} height={288} />
        <div className={`${isHovered ? 'bottom-6' : '-bottom-10'} absolute  left-0 w-full flex-center transition-all`}>
          <Button className='w-1/2' variant='brand' onClick={handleOnClick}>Talk Now</Button>
        </div>
    </div>
  )
}


export default Cards