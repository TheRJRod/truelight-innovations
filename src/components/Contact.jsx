import React, { useState, useEffect, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zip: "",
  });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 fade-in-up" ref={sectionRef}>
      <div className="max-w-5xl mx-auto bg-surface-container p-8 md:p-16 rounded-xl border border-outline-variant/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(50,153,255,0.1)_0%,transparent_70%)]"></div>
        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Shine?
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
            Transform your home today. Join the hundreds of South Texas
            homeowners who trust TrueLight for their permanent lighting needs.
          </p>
          <form
            className="max-w-md mx-auto grid grid-cols-1 gap-6"
            onSubmit={handleSubmit}
          >
            <div className="text-left">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-highest border-b border-outline-variant focus:border-primary focus:ring-0 text-white p-4 transition-all duration-300"
                placeholder="John Doe"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="text-left">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                Email Address
              </label>
              <input
                className="w-full bg-surface-container-highest border-b border-outline-variant focus:border-primary focus:ring-0 text-white p-4 transition-all duration-300"
                placeholder="john@example.com"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="text-left">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant mb-2 ml-1">
                Zip Code
              </label>
              <input
                className="w-full bg-surface-container-highest border-b border-outline-variant focus:border-primary focus:ring-0 text-white p-4 transition-all duration-300"
                placeholder="78201"
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
            <button
              className="w-full bg-gradient-to-r from-primary-container to-primary text-on-primary py-5 rounded-full font-bold text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              type="submit"
            >
              Submit Quote Request
            </button>
            <p className="text-xs text-slate-500 mt-4">
              Free on-site consultation within 48 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
