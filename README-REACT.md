# TrueLight Innovations - React Version

This is the React version of the TrueLight Innovations landing page, converted from the original HTML/CSS/JavaScript implementation while maintaining all functionality and animations.

## Features

- ✨ **Navbar Light Beam Animation** - Multi-colored light beams cascade from navbar on page load
- 🎨 **Interactive Color Picker** - Live demonstration of 16 million color options with SVG house illustration
- 🔄 **Before/After Comparison** - Hover/tap reveal effect showing lighting transformation
- 📜 **Scroll Animations** - Smooth fade-in effects as sections enter viewport
- 💬 **Auto-Rotating Carousel** - Customer testimonials with swipe support
- 📱 **Fully Responsive** - Mobile-optimized with touch interactions
- ♿ **Accessibility** - Respects `prefers-reduced-motion` settings

## Tech Stack

- **React 18.3** - UI framework
- **Vite 5.4** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS (loaded via CDN)
- **Vanilla CSS** - Custom animations and transitions

## Project Structure

```
truelight-innovations/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navbar with light beam animation
│   │   ├── Hero.jsx             # Hero section with CTA
│   │   ├── Services.jsx         # Service cards with scroll animations
│   │   ├── ColorPicker.jsx      # Interactive color demo
│   │   ├── BeforeAfter.jsx      # Before/after comparison
│   │   ├── Testimonials.jsx     # Carousel with auto-rotation
│   │   ├── About.jsx            # About section
│   │   ├── Contact.jsx          # Contact form
│   │   └── Footer.jsx           # Footer
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles and animations
├── index-react.html             # HTML template for React
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── public/                      # Static assets (images)
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Component Overview

### Header.jsx

- Animated navbar with multi-colored light beams on page load
- Uses `useEffect` hook to create DOM elements for beams
- Responsive design with fewer beams on mobile

### ColorPicker.jsx

- Interactive color swatches (12 preset colors)
- SVG house illustration with LED lights
- `useState` for selected color management
- Real-time color updates on click

### BeforeAfter.jsx

- Hover effect for desktop (CSS)
- Tap/click toggle for mobile (React state)
- Smooth opacity and scale transitions
- Fallback images if custom photos not available

### Testimonials.jsx

- Auto-rotating carousel (5-second interval)
- `useState` for current slide tracking
- `useEffect` for auto-rotation with cleanup
- Touch/swipe support for mobile
- Pause on hover
- Navigation arrows and dot indicators

### Services.jsx, About.jsx, Contact.jsx

- Intersection Observer for scroll-triggered animations
- `useRef` for DOM references
- `useEffect` for observer setup and cleanup

## Key React Patterns Used

1. **Hooks:**
   - `useState` - Component state management
   - `useEffect` - Side effects (animations, observers, timers)
   - `useRef` - DOM element references

2. **Event Handlers:**
   - Click events for color picker and carousel navigation
   - Touch events for mobile swipe gestures
   - Mouse events for hover effects

3. **Lifecycle Management:**
   - Cleanup functions in `useEffect` for observers and intervals
   - Proper unmounting of event listeners

4. **Conditional Rendering:**
   - Responsive behavior based on screen size
   - Accessibility features (reduced motion)

## Image Assets

Place these images in the `public/` folder:

- `truelightlogo.avif` - Company logo
- `truelightHero.jpg` - Hero background image
- `before.jpg` - Before lighting installation
- `after.jpg` - After lighting installation

The app includes fallback images if custom photos are not available.

## Customization

### Testimonials

Edit the `testimonials` array in `src/components/Testimonials.jsx`:

```javascript
const testimonials = [
  {
    initials: "SE",
    gradient: "linear-gradient(135deg, #3299ff 0%, #00ddff 100%)",
    text: '"Your testimonial here"',
    name: "Customer Name",
    location: "City, TX",
  },
  // Add more...
];
```

### Colors

Modify the `colors` array in `src/components/ColorPicker.jsx`:

```javascript
const colors = [
  { hex: "#3299ff", name: "Sky Blue" },
  // Add more colors...
];
```

### Animation Timing

Adjust timing in `src/index.css`:

- Light beam duration: `.light-beam` animation (2.5s)
- Carousel auto-rotate: `Testimonials.jsx` useEffect (5000ms)
- Scroll fade-in: `.fade-in-up` transition (0.8s)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Performance

- Lazy loading for below-fold images
- CSS animations (GPU-accelerated)
- Intersection Observer for scroll animations
- Cleanup of timers and observers on unmount

## Migration from Original HTML

All functionality from the original HTML/CSS/JavaScript version has been preserved:

- ✅ Light beam animation on page load
- ✅ Color picker with live updates
- ✅ Before/after hover effect
- ✅ Scroll-triggered animations
- ✅ Auto-rotating testimonial carousel
- ✅ Mobile touch support
- ✅ Accessibility features

## License

© 2026 TrueLight Innovations
