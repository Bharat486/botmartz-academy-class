import { useState, useEffect, useRef } from 'react'

/**
 * Intersection Observer hook for scroll-triggered animations
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(el) // only trigger once
        }
      },
      { threshold: 0.15, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

/**
 * Mouse position hook for 3D card tilt
 */
export function useMouseTilt(strength = 8) {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.innerWidth < 768) return // no tilt on mobile

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      setStyle({
        transform: `perspective(800px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale3d(1.02, 1.02, 1.02)`,
        transition: 'transform 0.1s ease-out',
      })
    }

    const handleLeave = () => {
      setStyle({
        transform: 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)',
        transition: 'transform 0.4s ease-out',
      })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  return [ref, style]
}

/**
 * Staggered children animation
 */
export function useStagger(isVisible, count, baseDelay = 100) {
  return Array.from({ length: count }, (_, i) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.5s ease ${i * baseDelay}ms, transform 0.5s ease ${i * baseDelay}ms`,
  }))
}
