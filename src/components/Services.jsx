import React, { useEffect, useRef } from "react";

const Services = () => {
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

    const fadeInElements = sectionRef.current?.querySelectorAll(".fade-in-up");
    fadeInElements?.forEach((el) => fadeInObserver.observe(el));

    return () => fadeInObserver.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-24 px-6 max-w-7xl mx-auto"
      ref={sectionRef}
    >
      <div className="mb-16 fade-in-up">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Illuminating Innovation
        </h2>
        <p className="text-on-surface-variant max-w-lg">
          Our systems combine cutting-edge LED technology with
          professional-grade durability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="group bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden fade-in-up stagger-1">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
          <div className="mb-6 inline-flex p-3 bg-surface-container-highest rounded-xl text-primary">
            <span className="material-symbols-outlined text-3xl">
              auto_awesome
            </span>
          </div>
          <h3 className="font-display text-xl font-bold mb-3">Permanent LED</h3>
          <p className="text-on-surface-variant leading-relaxed">
            Installed once, enjoyed forever. Discreet tracks that blend
            seamlessly into your roofline during the day.
          </p>
        </div>

        {/* Service 2 */}
        <div className="group bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden fade-in-up stagger-2">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
          <div className="mb-6 inline-flex p-3 bg-surface-container-highest rounded-xl text-primary">
            <span className="material-symbols-outlined text-3xl">palette</span>
          </div>
          <h3 className="font-display text-xl font-bold mb-3">
            Customizable Lighting
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            16 million colors at your fingertips. Preset patterns for holidays,
            game days, and every special moment.
          </p>
        </div>

        {/* Service 3 */}
        <div className="group bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden fade-in-up stagger-3">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
          <div className="mb-6 inline-flex p-3 bg-surface-container-highest rounded-xl text-primary">
            <span className="material-symbols-outlined text-3xl">
              energy_savings_leaf
            </span>
          </div>
          <h3 className="font-display text-xl font-bold mb-3">
            Energy Efficient
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            Ultra-low consumption LED bulbs designed to last 50,000+ hours with
            minimal environmental impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
