import React, { useState, useEffect, useRef } from 'react'

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#3299ff')
  const sectionRef = useRef(null)

  const colors = [
    { hex: '#3299ff', name: 'Sky Blue' },
    { hex: '#ff3366', name: 'Crimson Red' },
    { hex: '#00ff88', name: 'Emerald Green' },
    { hex: '#ffaa00', name: 'Sunset Orange' },
    { hex: '#aa00ff', name: 'Royal Purple' },
    { hex: '#00ddff', name: 'Cyan' },
    { hex: '#ff0099', name: 'Hot Pink' },
    { hex: '#ffffff', name: 'Pure White' },
    { hex: '#ffff00', name: 'Golden Yellow' },
    { hex: '#ff6600', name: 'Burnt Orange' },
    { hex: '#6600ff', name: 'Deep Purple' },
    { hex: '#00ff00', name: 'Lime Green' },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          fadeInObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (sectionRef.current) {
      fadeInObserver.observe(sectionRef.current)
    }

    return () => fadeInObserver.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto fade-in-up" ref={sectionRef}>
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          16 Million Colors at Your Command
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Customize your home's lighting for any occasion. From subtle elegance to bold celebrations, your imagination is the only limit.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* House Illustration */}
        <div className="relative">
          <svg viewBox="0 0 400 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 150 L200 50 L350 150 L350 280 L50 280 Z" fill="#1c2026" stroke="#404753" strokeWidth="2"/>
            <path d="M40 150 L200 40 L360 150 L350 150 L200 50 L50 150 Z" fill="#262a31" stroke="#404753" strokeWidth="2"/>
            <rect x="170" y="210" width="60" height="70" fill="#31353c" stroke="#404753" strokeWidth="2"/>
            <rect x="80" y="170" width="50" height="50" fill="#31353c" stroke="#404753" strokeWidth="2"/>
            <rect x="270" y="170" width="50" height="50" fill="#31353c" stroke="#404753" strokeWidth="2"/>
            <g id="house-lights">
              <path className="house-light" d="M50 150 L200 50" stroke={selectedColor} strokeWidth="4" fill="none" strokeLinecap="round" style={{ color: selectedColor }}/>
              <path className="house-light" d="M200 50 L350 150" stroke={selectedColor} strokeWidth="4" fill="none" strokeLinecap="round" style={{ color: selectedColor }}/>
              <line className="house-light" x1="50" y1="280" x2="350" y2="280" stroke={selectedColor} strokeWidth="4" strokeLinecap="round" style={{ color: selectedColor }}/>
              <circle className="house-light" cx="105" cy="195" r="3" fill={selectedColor} style={{ color: selectedColor }}/>
              <circle className="house-light" cx="295" cy="195" r="3" fill={selectedColor} style={{ color: selectedColor }}/>
            </g>
            <rect x="0" y="280" width="400" height="20" fill="#10141a"/>
          </svg>
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-primary/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Color Picker */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-6 text-white">
            Choose Your Color
          </h3>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {colors.map((color) => (
              <div
                key={color.hex}
                className={`color-swatch ${selectedColor === color.hex ? 'active' : ''}`}
                style={{ backgroundColor: color.hex, color: color.hex }}
                title={color.name}
                onClick={() => setSelectedColor(color.hex)}
              ></div>
            ))}
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <p className="text-sm text-on-surface-variant mb-4">
              <span className="material-symbols-outlined text-primary inline align-middle mr-2">
                palette
              </span>
              Preset patterns for holidays, sports teams, special events, or create your own custom scenes.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs text-on-surface-variant">
                🎄 Christmas
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs text-on-surface-variant">
                🎃 Halloween
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs text-on-surface-variant">
                🇺🇸 Patriotic
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs text-on-surface-variant">
                🏈 Game Day
              </span>
              <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs text-on-surface-variant">
                🎂 Birthday
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ColorPicker
