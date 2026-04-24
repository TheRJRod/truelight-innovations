import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ColorPicker from "./components/ColorPicker";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "72px" }}>
        <Hero />
        <Services />
        <ColorPicker />
        <BeforeAfter />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
