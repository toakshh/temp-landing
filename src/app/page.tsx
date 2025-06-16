'use client'
import Action from "@/components/Action";
import AiCards from "@/components/AiCards";
import Hero from "@/components/Hero";
import Usecase from "@/components/Usecase";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import 'highlight.js/styles/monokai-sublime.css'
import Footer from "@/components/Footer";
import IntegrationSection from "@/components/Integration";

export default function Home() {
      const backgroundRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Animated background lines
        const tl = gsap.timeline({ repeat: -1,yoyo: true })

        gsap.set([".bg-line-1", ".bg-line-2", ".bg-line-3"], {
          x: "-100vw",
          opacity: 0.3,
        })

        tl.to(".bg-line-1", {
        x: "100vw",
        duration: 6,
        opacity: 1,
        ease: "none",
        })
        .to(
            ".bg-line-2",
            {
            x: "-100vw",
            duration: 8,
            ease: "none",
            opacity: 1,
            },
            "-=6",
        )
        .to(
            ".bg-line-3",
            {
            x: "100vw",
            duration: 2,
            ease: "none",
            opacity: 1,
            },
            "-=8",
        )

        // Text color animation
        gsap.to(".animated-text", {
        backgroundPosition: "200% center",
        duration: 3,
        repeat: -1,
        ease: "none",
        })

        // Floating animation for avatar
        gsap.to(".hero-avatar", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        })
    }, [])

  return (
    <main className="flex flex-col h-screen relative">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 w-screen ">
        <div className="bg-line-1 absolute top-1/5 -left-full w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>
        <div className="bg-line-2 absolute top-1/2 right-full w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-40"></div>
        <div className="bg-line-3 absolute top-3/4 -left-full w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <Hero />
      <Usecase />
      <Action />
      <AiCards />
      <IntegrationSection />
      <Footer />
    </main>
  );
}
