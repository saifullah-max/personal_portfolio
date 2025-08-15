import SectionTitle from "../components/SectionTitle";
import { FaReact, FaNodeJs, FaBriefcase, FaComments } from "react-icons/fa";

export default function About() {
  const features = [
    {
      Icon: FaReact,
      title: "MERN Stack Expertise",
      description:
        "Mastery of React, Node.js, Express, MongoDB & Prisma, delivering full-stack solutions.",
    },
    {
      Icon: FaBriefcase,
      title: "Real-World Experience",
      description:
        "6-8 weeks of rigorous internship work on enterprise projects, sharpening practical skills.",
    },
    {
      Icon: FaComments,
      title: "Clear Communication",
      description:
        "Transparent updates, responsiveness, and client-focused collaboration.",
    },
    {
      Icon: FaNodeJs,
      title: "Continuous Learning",
      description:
        "Deep understanding of Java & OOP principles, preparing for scalable and maintainable systems.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-6 max-w-6xl mx-auto bg-gradient-to-br from-[#1F262B] to-[#2D2D34] rounded-3xl shadow-[inset_0_0_80px_#E07A5F44]"
      aria-label="About Us Section"
    >
      <SectionTitle title="About Us" className="text-[#E07A5F]" />
      <div className="w-24 h-1 bg-[#E07A5F] rounded mx-auto mt-4 mb-12 shadow-md" />

      <div className="bg-[#1F262Bbb] backdrop-blur-md border border-[#E07A5F55] rounded-2xl p-10 flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left shadow-theme">
        {/* Text Side */}
        <div className="md:flex-1 max-w-xl">
          <p className="text-[#E0C5A0cc] text-lg leading-relaxed font-medium break-words">
            DevAgency is led by{" "}
            <strong className="text-[#E07A5F]">Saifullah</strong>, a passionate
            Software Engineer currently enhancing skills through hands-on
            internships and real-world projects. We build scalable web
            applications and admin dashboards that help businesses grow. Our
            focus is on delivering fast, clean, and reliable code — backed by
            clear communication and a client-first mindset.
          </p>

          <p className="mt-6 italic text-[#E07A5Fcc] font-semibold tracking-wide break-words">
            He sometimes jokes he regrets becoming a software engineer because
            perfection keeps him coding past midnight — but hey, that’s how you
            get great work done!
          </p>

          <button
            className="mt-10 px-8 py-3 rounded-full border-2 border-[#E07A5F] text-[#E07A5F] font-semibold hover:bg-[#E07A533] hover:shadow-theme-lg transition focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-2"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll to Contact Section"
          >
            Let's Discuss Your Project
          </button>
        </div>

        {/* Features Side */}
        <div className="md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-xl">
          {features.map(({ Icon, title, description }) => (
            <article
              key={title}
              tabIndex={0}
              role="region"
              aria-label={title}
              className="bg-[#1F262B99] backdrop-blur-sm border border-[#E07A5F55] rounded-xl p-6 flex flex-col items-center text-center shadow-theme hover:shadow-theme-lg transition-transform duration-300 hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-1"
            >
              <Icon className="text-[#E07A5F] text-5xl mb-4" />
              <h4 className="text-lg sm:text-xl font-bold text-[#E07A5F] mb-2 tracking-wide break-words">
                {title}
              </h4>
              <p className="text-[#E0C5A0cc] text-sm leading-relaxed break-words">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shadow-theme {
          box-shadow: 0 0 8px #e07a5f44, 0 0 20px #E07A588, 0 0 35px #e07a5faa;
        }
        .shadow-theme-lg {
          box-shadow: 0 0 15px #e07a5f99, 0 0 40px #e07a5fcc, 0 0 60px #e07a5fee;
        }
      `}</style>
    </section>
  );
}
