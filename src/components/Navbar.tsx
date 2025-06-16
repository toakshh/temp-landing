"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { gsap } from "gsap"
import { navLinks } from "@/constants/content"
import Image from "next/image"
import Button from "./ui/Button"
import { APP_URL } from "@/constants/constant"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navLinksRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial navbar animation on mount
    const tl = gsap.timeline()

    // Animate navbar sliding down
  tl.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        Array.from(logoRef.current?.children ?? []),
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        Array.from(navLinksRef.current?.children ?? []),
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        Array.from(buttonsRef.current?.children ?? []),
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.3"
      )

    // Hover animations
    const navLinks = navLinksRef.current?.querySelectorAll("a") || []
    const logoContainer = logoRef.current

    const handleLinkEnter = (e: Event) => {
      gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: "power2.out" })
    }
    const handleLinkLeave = (e: Event) => {
      gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: "power2.out" })
    }

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkEnter)
      link.addEventListener("mouseleave", handleLinkLeave)
    })

    const handleLogoEnter = () => {
      const icon = logoContainer?.querySelector(".logo-icon")
      if (icon) {
        gsap.to(icon, { rotation: 360, scale: 1.1, duration: 0.6, ease: "back.out(1.7)" })
      }
    }

    const handleLogoLeave = () => {
      const icon = logoContainer?.querySelector(".logo-icon")
      if (icon) {
        gsap.to(icon, { rotation: 0, scale: 1, duration: 0.4, ease: "power2.out" })
      }
    }

    logoContainer?.addEventListener("mouseenter", handleLogoEnter)
    logoContainer?.addEventListener("mouseleave", handleLogoLeave)

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkEnter)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })
      logoContainer?.removeEventListener("mouseenter", handleLogoEnter)
      logoContainer?.removeEventListener("mouseleave", handleLogoLeave)
    }
  }, [])

const toggleMenu = () => {
  const menu = mobileMenuRef.current
  const items = Array.from(mobileMenuItemsRef.current?.children ?? [])

  if (!menu || !mobileMenuItemsRef.current) return

  if (!isMenuOpen) {
    setIsMenuOpen(true)

    // Animate menu container open
    gsap.fromTo(
      menu,
      { height: 0, opacity: 0 },
      { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
    )

    // Animate menu items
    gsap.fromTo(
      items,
      { x: -20, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.1,
      }
    )
  } else {
    // Animate menu items out
    gsap.to(items, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      stagger: 0.05,
      ease: "power2.in",
    })

    // Animate container close after item fade
    gsap.to(menu, {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: "power3.in",
      delay: 0.1,
      onComplete: () => setIsMenuOpen(false),
    })
  }
}



  return (
    <nav ref={navRef} className="bg-black text-white border-b border-gray-800 overflow-hidden w-full items-center flex justify-center fixed top-0 z-50">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10 opacity-50"></div>

      <div className="max-w-7xl sm:py-4 lg:py-4 relative z-10 m-auto w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div ref={logoRef} className="flex items-center space-x-2 cursor-pointer gap-3">
            {/* <div className="logo-icon w-8 h-8 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center transform-gpu">
              <div className="w-4 h-4 bg-white rounded-sm opacity-90"></div>
            </div> */}
            <Image className="logo-icon w-8 h-8 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-lg flex items-center justify-center transform-gpu" src="/ultron_logo_ico.svg" alt="Logo" width={32} height={32} />
            <span className="text-xl font-semibold brand-highlight-text">Ultron AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div ref={navLinksRef} className="ml-10 flex items-baseline space-x-8 gap-3">
              {
                navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-semibold transition-colors duration-200 transform-gpu"
                  >
                    {link.title}
                  </a>
                ))
              }
            </div>
          </div>

          {/* Desktop Action Buttons */}
          <div ref={buttonsRef} className="hidden md:flex items-center space-x-4 gap-3">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-transparent transform-gpu transition-all duration-200 hover:scale-105"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2, ease: "power2.out" })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" })
              }}
              onClick={() => window.open(`${APP_URL}/login`)}
            >
              Sign In
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 transform-gpu transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              variant="brand"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                  duration: 0.2,
                  ease: "power2.out",
                })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  scale: 1,
                  boxShadow: "0 0px 0px rgba(59, 130, 246, 0)",
                  duration: 0.2,
                  ease: "power2.out",
                })
              }}
              onClick={() => window.open(`${APP_URL}/Dashboard`)}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 transform-gpu transition-all duration-200"
              aria-label="Toggle menu"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2, ease: "power2.out" })
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.2, ease: "power2.out" })
              }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden overflow-hidden">
            <div ref={mobileMenuItemsRef} className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
              {
                navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 transform-gpu"
                  >
                    {link.title}
                  </a>
                ))
              }
              
              <div className="pt-4 pb-2 space-y-2">
                <Button
                  onClick={() => window.open(`${APP_URL}/login`)}
                  variant="ghost"
                  className="w-full text-gray-300 hover:text-white hover:bg-gray-800 justify-start transform-gpu transition-all duration-200"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => window.open(`${APP_URL}/login`)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white transform-gpu transition-all duration-200">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
