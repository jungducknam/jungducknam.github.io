import { RefObject, useEffect } from 'react'
import gsap from 'gsap'

interface FadeOptions {
  delay?: number
  stagger?: number
}

const useGsapFadeUp = (ref: RefObject<HTMLElement>, options?: FadeOptions) => {
  const delay = options?.delay ?? 0
  const stagger = options?.stagger ?? 0.08

  useEffect(() => {
    const element = ref.current
    if (!element) return

    gsap.set(element, { opacity: 0, y: 16 })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.45,
              delay,
              stagger,
              ease: 'power2.out',
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      gsap.killTweensOf(element)
    }
  }, [ref, delay, stagger])
}

export default useGsapFadeUp
