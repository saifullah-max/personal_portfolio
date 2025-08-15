import SectionTitle from "../components/SectionTitle";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPuzzlePiece,
  FaCloud,
  FaChartLine,
  FaLock,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Responsive, blazing-fast, and scalable web applications.",
      icon: FaLaptopCode,
    },
    {
      title: "Mobile Apps",
      desc: "Smooth, cross-platform mobile experiences.",
      icon: FaMobileAlt,
    },
    {
      title: "Custom Solutions",
      desc: "Tailored tools crafted just for your business.",
      icon: FaPuzzlePiece,
    },
    {
      title: "Cloud Integration",
      desc: "Scalable cloud-native architectures.",
      icon: FaCloud,
    },
    {
      title: "Data Analytics",
      desc: "Unlock powerful insights from your data.",
      icon: FaChartLine,
    },
    {
      title: "Security Services",
      desc: "Fortify your digital presence.",
      icon: FaLock,
    },
  ];

  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const cardWidth = 288;
  const gap = 32;
  const scrollAmount = cardWidth + gap;

  const scrollLeft = () => {
    if (containerRef.current) {
      setIsPaused(true);
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
      setTimeout(() => setIsPaused(false), 3000);
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      setIsPaused(true);
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(() => setIsPaused(false), 3000);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationFrame;
    const speed = 0.5;
    const singleSetWidth = (cardWidth + gap) * services.length;
    const totalScrollWidth = singleSetWidth * 2;

    const step = () => {
      if (!isPaused) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= totalScrollWidth) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section
      id="services"
      aria-label="Our Services"
      className="relative py-20 px-4 max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-[#1F262B] to-[#2D2D34]"
    >
      <SectionTitle title="Our Services" />
      <div className="w-24 h-1 bg-[#E07A5F] rounded mx-auto mt-3 mb-12" />

      <div className="relative">
        {/* Glass Buttons */}
        <button
          aria-label="Scroll left"
          onClick={scrollLeft}
          className="absolute top-1/2 -left-10 transform -translate-y-1/2 
          p-3 rounded-full backdrop-blur-md bg-white/10 border border-[#E07A5F50] 
          hover:bg-[#E07A5F]/80 hover:text-[#1F262B] transition z-10 shadow-lg"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          aria-label="Scroll right"
          onClick={scrollRight}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 
          p-3 rounded-full backdrop-blur-md bg-white/10 border border-[#E07A5F50] 
          hover:bg-[#E07A5F]/80 hover:text-[#1F262B] transition z-10 shadow-lg"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Scroll Container */}
        {/* Scroll Container */}
        <div
          ref={containerRef}
          className="flex gap-8 overflow-x-hidden cursor-pointer" // removed whitespace-nowrap
          onMouseEnter={() => setIsPaused(false)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...services, ...services].map(({ title, desc, icon }, i) => (
            <div
              key={title + "-" + i}
              className="flex-shrink-0 w-72 h-auto rounded-3xl
      bg-[#1F262B] bg-opacity-90 backdrop-blur-md
      border border-[#E07A5F]
      p-6 inline-block align-top flex flex-col items-center text-center
      transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
              role="listitem"
              style={{ userSelect: "none" }}
            >
              <div
                className="flex items-center justify-center rounded-full bg-[#E07A5F] w-16 h-16 mb-5"
                style={{ boxShadow: "0 0 10px #E07A5F99" }}
              >
                {React.createElement(icon, { size: 36, color: "#1F262B" })}
              </div>

              <h3 className="text-2xl font-semibold text-[#F4F1DE] mb-3 tracking-wide whitespace-normal break-words">
                {title}
              </h3>

              <p className="text-[#E0C5A0cc] text-sm tracking-wide leading-relaxed whitespace-normal break-words">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
