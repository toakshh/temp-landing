'use client'
import React, { useEffect, useRef } from 'react'
import Button from './ui/Button'

import Image from 'next/image'
import gsap from 'gsap'
import { APP_URL } from '@/constants/constant'


const Hero = () => {
    const heroRef = useRef<HTMLElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const gradientTextRef = useRef<HTMLSpanElement>(null)
    const subtitleRef = useRef<HTMLHeadingElement>(null)
    const buttonRef = useRef<HTMLImageElement>(null)
    const heroImgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
        // Create main timeline
        const tl = gsap.timeline({ delay: 0.3 })

        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current, buttonRef.current], {
            opacity: 0,
            x: -150,
        })
        gsap.set([heroImgRef.current], {
            opacity: 0,
            x: 150,
        })

        gsap.set(gradientTextRef.current, {
            backgroundPosition: "200% center",
        })

        // Entrance animations
        tl.to(titleRef.current, {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power3.out",
        }).to(heroImgRef.current, {
            opacity: 1,
            x: 0,
            duration: 2,
            ease: "power3.out",
        },0)
            .to(
            gradientTextRef.current,
            {
                backgroundPosition: "-200% center",
                duration: 3,
                ease: "power2.inOut",
                repeat: -1,
                yoyo: true,
            },
            "-=0.5",
            )
            .to(
            subtitleRef.current,
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power3.out",
            },
            "0.8",
            ).to(
          buttonRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.4",
        )
        }, heroRef)

        return () => ctx.revert()
    }, [])

  return (
        <section ref={heroRef}  className="w-full max-w-screen-xl mx-auto flex-center gap-4 min-h-[90vh] sm:items-center ">
            <div className="flex flex-col gap-4 md:w-2/3 w-full sm:items-start items-center ">
                <h1 ref={titleRef} className="text-4xl lg:text-7xl font-semibold text-center sm:text-left">Transform Customer Engagement with <span ref={gradientTextRef} style={{backgroundSize: "200% 100%"}} className="animated-text brand-highlight-text">Hyper-Realistic</span> Ai Avatars</h1>
                <h4 ref={subtitleRef} className="text-lg sm:text-xl text-center sm:text-left w-lg">Deploy interactive digital avatars that listen, respond, and build real connctions with your customers.</h4>
                <div ref={buttonRef}>
                    <Button size="lg" className="cta-btn group w-52" onClick={() => window.open(`${APP_URL}/Dashboard`, '_blank')}>
                        <span className="inline-block opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                            →
                        </span>
                        <span className='inline-block transition-transform duration-300 group-hover:translate-x-2'>
                            Get Started
                        </span>
                    </Button>
                </div>
            </div>
            <div className=' self-center flex-center h-full sm:flex hidden'> 
                <Image ref={heroImgRef} src={"/ultronNewRemoved.png"} width={700} height={1200} priority className='hero-avatar' alt="avatar" />
            </div>
        </section>
  )
}

export default Hero