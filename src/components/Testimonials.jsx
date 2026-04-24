import React, { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sectionRef = useRef(null);
  const autoRotateRef = useRef(null);

  const testimonials = [
    {
      initials: "SE",
      gradient: "linear-gradient(135deg, #3299ff 0%, #00ddff 100%)",
      text: '"Amazing work! Amazing customer service!"',
      name: "Salimah Ehani",
      location: "Corpus Christi, TX",
    },
    {
      initials: "CS",
      gradient: "linear-gradient(135deg, #aa00ff 0%, #ff0099 100%)",
      text: '"WE ABSOLUTELY LOVE OURS!!! Thanks again John & Truelight Innovations!"',
      name: "Charley N Casey Soliz",
      location: "Corpus Christi, TX",
    },
    {
      initials: "LB",
      gradient: "linear-gradient(135deg, #00ff88 0%, #ffaa00 100%)",
      text: '"Amazing quality and one of the most genuine guys you will meet, glad I chose this company!!!"',
      name: "Lowell Brown",
      location: "Corpus Christi, TX",
    },
  ];

  const totalSlides = testimonials.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

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

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    if (!isPaused) {
      autoRotateRef.current = setInterval(nextSlide, 5000);
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [isPaused, currentSlide]);

  return (
    <section
      className="py-24 px-6 max-w-7xl mx-auto fade-in-up"
      ref={sectionRef}
    >
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Trusted by South Texas Homeowners
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Don't just take our word for it. See what our customers have to say.
        </p>
      </div>
      <div
        className="carousel-container max-w-4xl mx-auto relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-slide">
              <div className="bg-surface-container-low p-6 md:p-12 rounded-xl border border-outline-variant/10">
                <div className="flex flex-col gap-6 items-center text-center md:flex-row md:gap-8 md:text-left">
                  <div
                    className="avatar-initials flex-shrink-0"
                    style={{ background: testimonial.gradient, color: "white" }}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-yellow-400"
                          style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="text-base md:text-lg text-on-surface-variant italic mb-4 md:mb-6 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <h4 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="carousel-arrow left"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <span className="material-symbols-outlined text-white">
            chevron_left
          </span>
        </button>
        <button
          className="carousel-arrow right"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <span className="material-symbols-outlined text-white">
            chevron_right
          </span>
        </button>
      </div>

      {/* Carousel Dots */}
      <div className="carousel-dots">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
