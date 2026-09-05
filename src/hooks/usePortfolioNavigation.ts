import { useLayoutEffect, useRef, useState } from 'react'

export function parseHash(hash: string) {
  const match = /^#\/project\/([^/]+)(?:\/([^/]+))?$/.exec(hash)
  return match ? { slug: match[1], section: match[2] } : null
}

function findTarget(hash: string) {
  const route = parseHash(hash)
  return document.getElementById(route ? route.section || 'project-overview' : hash.slice(1) || 'profile')
}

export default function usePortfolioNavigation() {
  const [hash, setHash] = useState(() => window.location.hash)
  const [scrollRequest, setScrollRequest] = useState(0)
  const currentHash = useRef(hash)
  const returnPoint = useRef<{ hash: string; y: number; focusId: string } | null>(null)
  const restore = useRef(false)

  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    const onHashChange = () => {
      const next = window.location.hash
      const wasDetail = !!parseHash(currentHash.current)
      const isDetail = !!parseHash(next)
      if (!wasDetail && isDetail) {
        returnPoint.current = {
          hash: currentHash.current,
          y: window.scrollY,
          focusId: document.activeElement instanceof HTMLElement ? document.activeElement.id : '',
        }
      }
      restore.current = wasDetail && !isDetail && next === returnPoint.current?.hash
      currentHash.current = next
      setHash(next)
    }
    const onSameHashClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null
      if (link?.getAttribute('href') === (window.location.hash || '#')) {
        event.preventDefault()
        restore.current = false
        setScrollRequest((value) => value + 1)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    document.addEventListener('click', onSameHashClick)
    return () => {
      window.removeEventListener('hashchange', onHashChange)
      document.removeEventListener('click', onSameHashClick)
      window.history.scrollRestoration = previousRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (restore.current && returnPoint.current) {
        const point = returnPoint.current
        window.scrollTo({ top: point.y, behavior: 'instant' })
        document.getElementById(point.focusId)?.focus({ preventScroll: true })
        restore.current = false
      } else {
        const target = findTarget(hash)
        if (target) {
          const route = parseHash(hash)
          if (!hash || hash === '#profile' || hash === '#main-content' || (route && (!route.section || route.section === 'project-overview'))) {
            window.scrollTo({ top: 0, behavior: 'instant' })
          } else {
            target.scrollIntoView({ block: 'start', behavior: 'instant' })
          }
          if (hash) target.focus({ preventScroll: true })
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' })
        }
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, scrollRequest])

  const route = parseHash(hash)
  const backHref = returnPoint.current ? returnPoint.current.hash || '#' : `#project-${route?.slug || 'kice'}`

  return { hash, route, backHref }
}
