import React, { useEffect, useState, useRef } from 'react'

const Header = () => {
  const beamsContainerRef = useRef(null)

  useEffect(() => {
    const createLightBeams = () => {
      const beamsContainer = beamsContainerRef.current
      if (!beamsContainer) return

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) return

      const numberOfBeams = window.innerWidth < 768 ? 5 : 7
      const containerWidth = beamsContainer.offsetWidth

      const colors = [
        '#3299ff', '#ff3366', '#00ff88', '#ffaa00',
        '#aa00ff', '#00ddff', '#ff0099', '#ffff00',
      ]

      for (let i = 0; i < numberOfBeams; i++) {
        const beam = document.createElement('div')
        beam.className = 'light-beam'
        const position = (containerWidth / (numberOfBeams + 1)) * (i + 1)
        beam.style.left = position + 'px'
        beam.style.animationDelay = (i * 0.15) + 's'

        const color = colors[i % colors.length]
        const r = parseInt(color.slice(1,3), 16)
        const g = parseInt(color.slice(3,5), 16)
        const b = parseInt(color.slice(5,7), 16)
        beam.style.background = `linear-gradient(180deg, ${color} 0%, rgba(${r}, ${g}, ${b}, 0.3) 50%, transparent 100%)`
        beam.style.boxShadow = `0 0 10px ${color}66, 0 0 20px ${color}33`

        const sparkle = document.createElement('div')
        sparkle.className = 'sparkle'
        sparkle.style.animationDelay = (2 + i * 0.15) + 's'
        sparkle.style.background = color
        sparkle.style.boxShadow = `0 0 15px ${color}`

        beam.appendChild(sparkle)
        beamsContainer.appendChild(beam)
      }

      setTimeout(() => {
        beamsContainer.innerHTML = ''
      }, 4000)
    }

    createLightBeams()
  }, [])

  return (
    <header
      style={{ background: '#303030' }}
      className="fixed top-0 w-full z-50 bg-[#10141a]/80 backdrop-blur-2xl no-border shadow-none"
    >
      <div
        ref={beamsContainerRef}
        id="light-beams"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      ></div>
      <nav
        style={{ background: '#303030' }}
        className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto font-manrope tracking-tight relative"
      >
        <div className="flex items-center gap-2">
          <img src="./truelightlogo.avif" style={{ maxWidth: '140px' }} alt="TrueLight Logo" />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="text-blue-400 font-bold border-b-2 border-blue-500 pb-1"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-slate-400 font-medium hover:text-blue-400 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="bg-gradient-to-br from-primary-container to-primary text-on-primary-container px-5 py-2.5 rounded-full font-bold text-sm scale-95 active:scale-90 transition-transform hover:backdrop-blur-3xl"
        >
          Get a Quote
        </a>
      </nav>
    </header>
  )
}

export default Header
