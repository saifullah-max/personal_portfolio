import { useEffect, useRef, useState } from "react";

// SectionTitle component with copper line
function SectionTitle({ title, className = "" }) {
  return (
    <div className="text-center">
      <h1
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 ${className}`}
      >
        {title}
      </h1>
      <div className="w-24 h-1 bg-[#E07A5F] rounded mx-auto shadow-md" />
    </div>
  );
}

// Animated Lines Background Component
function AnimatedBackground({ isActive }) {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      width = canvas.clientWidth * window.devicePixelRatio;
      height = canvas.clientHeight * window.devicePixelRatio;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const elements = [];
    const numElements = 12;

    for (let i = 0; i < numElements; i++) {
      elements.push({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;

    const animate = () => {
      if (!isActive) {
        animationFrameId.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      time += 0.01;

      ctx.strokeStyle = `rgba(224, 122, 95, ${0.1 + Math.sin(time) * 0.05})`;
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = 0; i < canvas.clientWidth; i += 50) {
        const wave1 = Math.sin((i + time * 50) * 0.01) * 25;
        const wave2 = Math.cos((i + time * 30) * 0.015) * 15;
        ctx.moveTo(i, canvas.clientHeight / 2 + wave1);
        ctx.lineTo(i + 50, canvas.clientHeight / 2 + wave2);
      }
      ctx.stroke();

      elements.forEach((element, i) => {
        elements.forEach((otherElement, j) => {
          if (i !== j) {
            const dx = element.x - otherElement.x;
            const dy = element.y - otherElement.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              const opacity = (1 - distance / 100) * 0.12;
              ctx.strokeStyle = `rgba(224, 122, 95, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(element.x, element.y);
              ctx.lineTo(otherElement.x, otherElement.y);
              ctx.stroke();
            }
          }
        });
      });

      elements.forEach((element, i) => {
        element.x += element.vx + Math.sin(time + element.phase) * 0.2;
        element.y += element.vy + Math.cos(time + element.phase) * 0.15;

        if (element.x < 0 || element.x > canvas.clientWidth) element.vx *= -1;
        if (element.y < 0 || element.y > canvas.clientHeight) element.vy *= -1;

        element.x = Math.max(0, Math.min(canvas.clientWidth, element.x));
        element.y = Math.max(0, Math.min(canvas.clientHeight, element.y));

        const pulseOpacity = element.opacity + Math.sin(time * 2 + i) * 0.08;
        ctx.fillStyle = `rgba(224, 122, 95, ${pulseOpacity})`;
        ctx.beginPath();
        ctx.arc(element.x, element.y, element.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [isActive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}

// Floating Geometric Shapes Component
function FloatingShapes() {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-12 left-12 w-16 h-16 border border-[#E07A5F]/20"
          style={{
            transform: "rotate(45deg)",
            animation: "spin-slow 20s linear infinite",
          }}
        ></div>
        <div
          className="absolute top-24 right-16 w-12 h-12 bg-[#E07A5F]/10 rounded-full"
          style={{
            animation: "float 4s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-24 left-8 w-10 h-10 bg-gradient-to-r from-[#E07A5F]/20 to-transparent"
          style={{
            transform: "rotate(45deg)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute bottom-12 right-12 w-20 h-1 bg-gradient-to-r from-transparent via-[#E07A5F]/30 to-transparent"
          style={{
            animation: "pulse 3s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute top-1/2 left-6 w-6 h-16 bg-gradient-to-b from-[#E07A5F]/20 to-transparent"
          style={{
            animation: "float 4s ease-in-out infinite",
          }}
        ></div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        ::placeholder {
          color: rgba(224, 122, 95, 0.6);
        }
      `}</style>
    </>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "-20px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
      setSubmitResult("success");
    } catch (error) {
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputs = [
    { label: "Your Name", name: "name", type: "text", placeholder: "John Doe" },
    {
      label: "Your Email",
      name: "email",
      type: "email",
      placeholder: "john@example.com",
    },
  ];

  return (
    <div className="min-h-screen text-white py-8 sm:py-12 relative bg-gradient-to-br from-[#1F262B] to-[#2D2D34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <SectionTitle title="Contact Us" className="text-[#E07A5F]" />
      </div>

      <section
        ref={sectionRef}
        id="contact"
        className="px-4 sm:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8"
        style={{ minHeight: "70vh", maxHeight: "600px" }}
      >
        <div className="block md:hidden text-center mb-6 px-4">
          <h2 className="text-2xl font-serif font-bold text-[#E07A5F] mb-2">
            Get In Touch
          </h2>
          <p className="text-[#E0C5A0cc] max-w-sm mx-auto text-sm leading-relaxed">
            Questions, ideas, or collaboration? Send us a message and let's make
            it happen.
          </p>
        </div>

        {/* Form */}
        <div
          className={`flex-1 w-full lg:w-1/2 bg-[#1F262B] rounded-xl p-6 lg:p-8 border border-[#E07A5F]
            shadow-[0_0_8px_#E07A5F44] z-10 relative transition-all duration-1000 ease-out
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-8 opacity-0"
            }`}
        >
          <form onSubmit={handleSubmit} noValidate>
            <p className="text-[#E0C5A0aa] mb-6 max-w-md text-center lg:text-left text-base leading-relaxed">
              Have a project or question? Reach out — we're here to help and
              collaborate.
            </p>

            <div className="grid gap-4">
              {inputs.map(({ label, name, type, placeholder }) => (
                <div key={name} className="flex flex-col">
                  <label
                    htmlFor={name}
                    className="mb-1.5 text-sm text-[#E07A5F] font-semibold"
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="p-3 rounded-lg bg-[#2D2D34] border border-[#E07A5F77] placeholder-[#E07A5F99]
                      focus:outline-none focus:ring-2 focus:ring-[#E07A5F] transition-all duration-300 text-white"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="mb-1.5 text-sm text-[#E07A5F] font-semibold"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className="p-3 rounded-lg bg-[#2D2D34] border border-[#E07A5F77] placeholder-[#E07A5F99]
                    focus:outline-none focus:ring-2 focus:ring-[#E07A5F] transition-all duration-300 text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#E07A5F] hover:bg-[#f0a97d] text-[#1F262B] font-semibold px-8 py-3 rounded-lg
                  shadow-lg transition-all duration-300 hover:shadow-[0_0_12px_#E07A5Faa] transform hover:scale-[1.02]
                  disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          <div className="mt-4 text-center text-sm font-semibold">
            {submitResult === "success" && (
              <p className="text-emerald-400">Message sent successfully! 🎉</p>
            )}
            {submitResult === "error" && (
              <p className="text-rose-400">
                Oops! Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>

        {/* Right side visual */}
        <div
          className={`hidden md:flex flex-1 w-full lg:w-1/2 relative rounded-xl overflow-hidden border border-[#E07A5F33]
            shadow-[0_0_8px_#E07A5F44] p-8 transition-all duration-1000 ease-out
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(31,38,43,0.9), rgba(45,45,52,0.7))",
          }}
        >
          <AnimatedBackground isActive={isVisible} />
          <FloatingShapes />

          <div className="absolute inset-0 bg-gradient-to-tr from-[#E07A5F]/5 via-transparent to-[#E0C5A0]/10 pointer-events-none"></div>
          <div
            className="absolute inset-0 rounded-xl border border-[#E07A5F]/20"
            style={{ animation: "pulse 2s ease-in-out infinite" }}
          ></div>

          <div className="relative z-20 text-center lg:text-left text-white">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-[#E07A5F]">
              Get In Touch
            </h2>
            <p className="text-[#E0C5A0cc] max-w-sm mx-auto lg:mx-0 text-lg leading-relaxed">
              Questions, ideas, or collaboration? Send us a message and let's
              make it happen.
            </p>
          </div>

          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#E07A5F44]"></div>
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#E07A5F44]"></div>
        </div>
      </section>
    </div>
  );
}
