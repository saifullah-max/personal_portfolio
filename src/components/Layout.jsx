import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Footer from "./Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar open={sidebarOpen} setOpen={setSidebarOpen} isMobile={isMobile} />
      <main
        className={`
          transition-[margin] duration-300 ease-in-out
          bg-[#1F262B] min-h-screen
          pt-12 px-6
          ${isMobile ? "ml-0" : sidebarOpen ? "ml-56" : "ml-16"}
        `}
      >
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
