import React, { useState, useEffect, useRef } from "react";

const BeforeAfter = () => {
  const [showAfter, setShowAfter] = useState(false);
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
          Experience the dramatic difference permanent LED lighting makes.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Mobile Toggle Buttons */}
        <div className="md:hidden flex gap-2 mb-4">
          <button
            onClick={() => setShowAfter(false)}
            className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${
              !showAfter
                ? "bg-primary text-on-primary"
                : "bg-surface-container-low text-on-surface-variant border border-outline-variant/30"
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`flex-1 py-3 px-6 rounded-lg font-bold transition-all ${
              showAfter
                ? "bg-primary text-on-primary"
                : "bg-surface-container-low text-on-surface-variant border border-outline-variant/30"
            }`}
          >
            After
          </button>
        </div>

        {/* Mobile: Toggle Between Images */}
        <div className="md:hidden aspect-video relative rounded-xl shadow-2xl overflow-hidden">
          <img
            src={showAfter ? "/after.jpg" : "/before.jpg"}
            alt={showAfter ? "House with TrueLight LED installation" : "House before lighting installation"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = showAfter
                ? "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=675&fit=crop"
                : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=675&fit=crop";
            }}
          />
          <div className="image-label top-4 left-4">
            {showAfter ? "After" : "Before"}
          </div>
        </div>

        {/* Desktop: Hover Effect */}
        <div
          className="hidden md:block before-after-container aspect-video relative rounded-xl shadow-2xl"
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
          <div className="image-label top-4 right-4 after-label">
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
