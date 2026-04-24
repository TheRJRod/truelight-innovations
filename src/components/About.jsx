import React, { useEffect, useRef } from "react";

const About = () => {
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
      className="py-24 bg-surface-container-low relative overflow-hidden fade-in-up"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="aspect-square rounded-xl overflow-hidden shadow-2xl relative z-10">
            <img
              alt="Professional installation"
              className="w-full h-full object-cover"
              src="./innerImage.jpg"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-0"></div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            South Texas' Elite Installers
          </h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
            Based in the heart of South Texas, TrueLight Innovations isn't just
            about lights—we're about transformation. We understand the unique
            architectural styles and environmental demands of our region,
            ensuring every installation is built to endure the Texas heat and
            coastal humidity.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                verified
              </span>
              <div>
                <h4 className="font-bold text-white">Unmatched Reliability</h4>
                <p className="text-sm text-on-surface-variant">
                  Lifetime warranty on tracks and 5-year bulb replacement.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: '"FILL" 1' }}
              >
                stars
              </span>
              <div>
                <h4 className="font-bold text-white">White-Glove Service</h4>
                <p className="text-sm text-on-surface-variant">
                  From design consultation to professional cleanup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
