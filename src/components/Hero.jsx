import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[751px] flex flex-col justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Premium outdoor lighting"
          className="w-full h-full object-cover opacity-60"
          src="./truelightHero.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container/20 border border-outline-variant/20 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-label uppercase tracking-widest text-primary-fixed">
            #1 in South Texas
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          THE PREMIUM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed-dim">
            OUTDOOR LIGHTING
          </span>{" "}
          <br />
          SOLUTION
        </h1>
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
          Permanent, Customizable &amp; Energy Efficient LED. Elevate your
          property with the gold standard of architectural illumination.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-gradient-to-br from-primary-container to-primary text-on-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all duration-300"
          >
            Get a Quote
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            href="#gallery"
            className="bg-transparent border border-outline-variant/30 text-white px-8 py-4 rounded-full font-bold text-lg backdrop-blur-md hover:bg-white/5 transition-colors"
          >
            View Gallery
          </a>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="feature-beam"></div>
      </div>
    </section>
  );
};

export default Hero;
