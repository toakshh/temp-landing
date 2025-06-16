"use client"

import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "cta" | "brand"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

export default function Button({ variant = "default", size = "md", className = "", children, ...props }: ButtonProps) {
  const baseStyles =
    "rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none transform-gpu text-center hover:cursor-pointer flex-center text-center"

  const variants = {
    default: "btn-blue-gradient text-white hover:bg-blue-700 shadow-sm",
    ghost: "bg-transparent text-current hover:bg-gray-800 hover:text-white outline outline-gray-300/60 ",
    outline: "border border-gray-600 bg-transparent text-current hover:bg-gray-800 hover:text-white",
    cta: "btn-cta",
    brand: "btn-brand",
  }

  const sizes = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
