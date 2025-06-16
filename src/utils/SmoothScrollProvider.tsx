'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    ScrollTrigger.refresh()

    return () => {
      // Kill all active ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
