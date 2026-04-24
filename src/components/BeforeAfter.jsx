import React, { useState, useEffect, useRef } from "react";

const BeforeAfter = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [showAfterLabel, setShowAfterLabel] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeInObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      fadeInObserver.observe(sectionRef.current);
    }

    return () => fadeInObserver.disconnect();
  }, []);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsTouched(!isTouched);
      setShowAfterLabel(!isTouched);
    }
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      setShowAfterLabel(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setShowAfterLabel(false);
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 px-6 max-w-7xl mx-auto fade-in-up"
      ref={sectionRef}
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          See The Transformation
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Experience the dramatic difference permanent LED lighting makes. Hover
          to reveal the magic.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div
          className={`before-after-container aspect-video relative rounded-xl shadow-2xl ${isTouched ? "touched" : ""}`}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Before Image */}
          <img
            src="/before.jpg"
            alt="House before lighting installation"
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=675&fit=crop";
            }}
          />
          {/* After Image */}
          <img
            src="/after.jpg"
            alt="House with TrueLight LED installation"
            className="after-image w-full h-full object-cover rounded-xl"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=675&fit=crop";
            }}
          />
          {/* Labels */}
          <div className="image-label top-4 left-4">Before</div>
          <div
            className="image-label top-4 right-4"
            style={{
              opacity: showAfterLabel ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            After
          </div>
          {/* Overlay Text */}
          <div className="overlay-text absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
            <div className="text-center">
              <span className="material-symbols-outlined text-6xl text-white mb-2 animate-pulse">
                touch_app
              </span>
              <p className="text-white text-xl font-bold">
                Hover to See the Magic
              </p>
              <p className="text-white/80 text-sm mt-2 md:hidden">
                Tap to reveal
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-on-surface-variant mt-6">
          Real TrueLight installation • Professional results guaranteed
        </p>
      </div>
    </section>
  );
};

export default BeforeAfter;
