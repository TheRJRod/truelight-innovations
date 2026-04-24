import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ background: "#303030" }}
      className="w-full mt-auto tonal-shift from surface to surface-container-low"
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <img
            src="./truelightlogo.avif"
            style={{ maxWidth: "140px" }}
            alt="TrueLight Logo"
          />
          <p className="font-inter text-sm tracking-wide text-slate-500 text-center md:text-left">
            © 2026 TrueLight Innovations.
          </p>
        </div>
        <div className="flex gap-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
