"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-in" | "slide-in-left" | "slide-in-right" | "fade-in-up"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fade-in", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true)
              }, delay)
            } else {
              setIsVisible(true)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return (
    <div ref={elementRef} className={`${animation} ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  )
}

export default ScrollAnimation
