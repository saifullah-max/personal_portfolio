import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [message, setMessage] = useState("");
  const [selectedScreenshots, setSelectedScreenshots] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const flagship = [
    {
      title: "PegaHCM",
      role: "Enterprise HR Management System",
      desc: "Solely designed and developed a comprehensive HR platform from scratch...",
      tech: ["React", "Tailwind", "Node", "Prisma", "MySQL"],
      demo: "https://pegahcm.peakcodestudio.com",
      credentials: {
        email: "mike@example.com",
        password: "mike123",
        note: "For admin access, please reach out via the contact form below.",
      },
      screenshots: [
        "/images/adminDashboard.PNG",
        "/images/employee.PNG",
        "/images/AttendanceActions.PNG",
        "/images/salaryForm.PNG",
        "/images/notificationPage.PNG",
        "/images/userDashboard1.PNG",
        "/images/dashboard2.PNG",
        "/images/userAttendance.PNG",
        "/images/userProfile.PNG",
      ],
    },
    {
      title: "AI-Powered LMS",
      role: "Learning Management System",
      desc: (
        <>
          Contributed to AI-assisted grading and multilingual content delivery
          features, enabling instructors to save time and provide personalized
          learning. Implemented data processing logic and optimized API
          performance for faster feedback generation.
          <br />
          <em className="text-sm text-gray-400">
            *Note: Deployment and hosting were done personally for demonstration
            only; no client credentials or live data are used.
          </em>
        </>
      ),
      tech: ["React", "Node", "MongoDB", "OpenAI API"],
      demo: null,
    },
  ];

  const collaborations = [
    {
      title: "Fleetbold",
      role: "Admin & Manager Dashboards",
      desc: (
        <>
          Developed the expense tracking and workflow modules within Fleetbold’s
          internal dashboards. Implemented dynamic data tables, filtering, and
          role-based access control for efficient management.
          <br />
          <em className="text-sm text-gray-400">
            *Note: The public fleetbold.com website is separate; my work focused
            on internal dashboards for streamlined operations.
          </em>
        </>
      ),
      tech: ["React", "Tailwind", "Node"],
      demo: "https://fleetbold.com/",
    },
    {
      title: "32beat Writer",
      role: "Live Platform for Writers & Music Fans",
      desc: "Implemented profile editing, improved navigation flow, and fixed UI inconsistencies to enhance the user experience and keep the platform engaging for writers and readers.",
      tech: ["React", "Next.js", "Tailwind", "Node"],
      demo: "https://32beatwriters.com/",
    },
    {
      title: "GoldTrust",
      role: "Feature Development & User Experience",
      desc: "Built the secure identity verification workflow and optimized gold listing management features, ensuring smooth user onboarding and improved listing reliability.",
      tech: ["React", "Node", "Tailwind"],
      demo: null,
    },
    {
      title: "Pareeshay Traders",
      role: "Client E-commerce Website",
      desc: (
        <>
          Developed a responsive e-commerce storefront with custom product
          listing layouts and secure checkout functionality. Integrated
          performance optimizations to ensure fast loading times on all devices.
          <br />
          <em className="text-sm text-gray-400">
            Live demo at{" "}
            <a
              href="https://pareeshaytraders.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#E07A5F]"
            >
              https://pareeshaytraders.com/
            </a>
          </em>
        </>
      ),
      tech: ["WordPress", "HTML", "CSS"],
      demo: "https://pareeshaytraders.com/",
    },
  ];

  const navigate = useNavigate();

  // Auto-clear popup after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section
      id="projects"
      aria-label="Projects and Case Studies"
      className="relative py-20 px-6 max-w-7xl mx-auto rounded-3xl
                 bg-gradient-to-br from-[#1F262B] to-[#2D2D34]"
    >
      <SectionTitle
        title="Projects & Case Studies"
        subtitle="Crafting solutions with impact"
        className="text-[#E07A5F]"
      />

      <div className="w-24 h-1 bg-[#E07A5F] rounded mx-auto mt-4 mb-14 shadow-md" />

      {/* Flagship Projects */}
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {flagship.map(
          ({ title, role, desc, tech, demo, credentials, screenshots }) => (
            <article
              key={title}
              tabIndex={0}
              aria-label={`${title} - ${role}`}
              className="
              relative group bg-[#1F262B] bg-opacity-70 backdrop-blur-lg border border-[#E07A5F]
              rounded-3xl p-8 shadow-[0_0_8px_#E07A5F44]
              hover:shadow-[0_0_18px_#E07A5F88] transition-transform duration-400
              hover:scale-[1.03] transform will-change-transform flex flex-col
              overflow-hidden min-h-[350px]
            "
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 40%, rgba(224, 122, 95, 0.08) 50%, transparent 60%)",
                  transform: "translateX(-100%)",
                  animation: "shimmer 8s linear infinite",
                }}
              />

              <h3 className="relative text-3xl font-extrabold mb-4 text-[#E07A5F] tracking-wide cursor-default select-none leading-snug">
                {title}
                <span
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-[#E07A5F] to-transparent rounded transition-all duration-400 group-hover:w-16"
                  aria-hidden="true"
                />
              </h3>

              <p className="text-sm text-[#E07A5Fcc] mb-6 font-semibold tracking-wide">
                {role}
              </p>

              <p className="flex-grow text-[#E0C5A0cc] leading-relaxed text-base break-words whitespace-pre-wrap relative z-10">
                {desc}
              </p>

              <div className="flex flex-wrap gap-3 mt-8 mb-10 relative z-10">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold
                             bg-gradient-to-tr from-[#E07A521] to-[#E07A533]
                             text-[#E07A5F]
                             rounded-full px-3 py-1 select-none tracking-wide
                             shadow-[0_0_3px_#E07A5F77]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-auto relative z-10">
                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-[#E07A5F] font-semibold hover:underline transition"
                  >
                    View App
                  </a>
                ) : (
                  <a
                    href={`/project/${title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center gap-1 border border-[#E07A5F] text-[#1F262B]
               bg-[#E07A5F] px-5 py-2 rounded-full font-semibold
               hover:bg-[#f0a97d] transition focus:outline-none
               focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-1"
                  >
                    View App
                  </a>
                )}

                {title === "PegaHCM" && (
                  <div className="mt-4 text-sm text-[#E0C5A0cc] bg-[#2D2D34] border border-[#E07A5F44] rounded-lg p-4">
                    <p className="mb-1 font-semibold text-[#E07A5F]">
                      Demo Credentials:
                    </p>
                    <p>
                      <span className="font-medium">Email:</span>{" "}
                      {credentials.email}
                    </p>
                    <p>
                      <span className="font-medium">Password:</span>{" "}
                      {credentials.password}
                    </p>
                    <p className="mt-2 italic text-[#E07A5Faa]">
                      {credentials.note}
                    </p>

                    {/* Button to open screenshots */}
                    <button
                      onClick={() => setSelectedScreenshots(screenshots)}
                      className="mt-3 px-4 py-2 bg-[#E07A5F] text-[#1F262B] rounded-full text-sm font-semibold hover:bg-[#f0a97d] transition"
                    >
                      View Screenshots
                    </button>
                  </div>
                )}

                <button
                  onClick={() => {
                    navigate(`/?project=${encodeURIComponent(title)}`, {
                      replace: false,
                    });
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="ml-auto text-[#E07A5F] font-semibold hover:underline transition"
                >
                  Discuss this
                </button>
              </div>
            </article>
          )
        )}
      </div>

      {/* Collaborations */}
      <section className="mt-28 border-t border-[#E07A5F] pt-16">
        <h4 className="text-2xl font-bold mb-4 text-[#E07A5F] tracking-wide">
          Past Collaborations
        </h4>
        <div className="w-20 h-1 bg-[#E07A5F] rounded mb-14 shadow-md" />

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {collaborations.map(({ title, role, desc, tech, demo }) => {
            const handleNoDemo = () => {
              setMessage(`⚠️ No live demo available for "${title}".`);
            };

            const CardWrapper = demo ? "a" : "div";
            const wrapperProps = demo
              ? {
                  href: demo,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {
                  onClick: handleNoDemo,
                  role: "button",
                  tabIndex: 0,
                  onKeyDown: (e) => e.key === "Enter" && handleNoDemo(),
                };

            return (
              <CardWrapper
                key={title}
                {...wrapperProps}
                className="
        relative group block bg-[#1F262B] bg-opacity-70 backdrop-blur-lg border border-[#E07A5F]
        rounded-3xl p-8 shadow-[0_0_8px_#E07A5F44]
        hover:shadow-[0_0_18px_#E07A5F88] transition-transform duration-400
        hover:scale-[1.03] transform will-change-transform
        focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-1
        overflow-hidden min-h-[250px] cursor-pointer
      "
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 40%, rgba(224, 122, 95, 0.08) 50%, transparent 60%)",
                    transform: "translateX(-100%)",
                    animation: "shimmer 8s linear infinite",
                  }}
                />

                <div className="relative flex justify-between items-center z-10">
                  <div>
                    <h5 className="text-xl font-bold flex items-center gap-3 text-[#E07A5F] tracking-wide select-none leading-snug">
                      <span className="w-4 h-4 bg-[#E07A5F] rounded-full inline-block shadow-sm" />
                      {title}
                    </h5>
                    <p className="text-sm text-[#E0C5A099] mt-1 font-semibold tracking-wide">
                      {role}
                    </p>
                  </div>
                  {demo && (
                    <FaExternalLinkAlt
                      className="text-[#E07A5F] opacity-80 z-10"
                      size={18}
                    />
                  )}
                </div>

                <p className="text-[#E0C5A088] mt-6 leading-relaxed text-base break-words whitespace-pre-wrap tracking-wide relative z-10">
                  {desc}
                </p>

                <p className="mt-6 text-xs italic text-[#aa775f88] relative z-10">
                  Tech:{" "}
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="inline-block bg-gradient-to-tr from-[#E07A521] to-[#E07A533] text-[#E07A5F]
                       rounded-full px-3 py-1 mr-2 select-none tracking-wide shadow-[0_0_3px_#E07A5F77]"
                    >
                      {t}
                    </span>
                  ))}
                </p>
              </CardWrapper>
            );
          })}
        </div>
      </section>

      {/* Floating Message Popup */}
      {message && (
        <div
          className="fixed bottom-6 right-6 bg-[#E07A5F] text-white px-6 py-3 rounded-lg shadow-lg z-50 
                     animate-fade-in-out text-sm font-medium"
        >
          {message}
        </div>
      )}

      {selectedScreenshots && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#1F262B] p-6 rounded-2xl max-w-5xl w-full relative flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setSelectedScreenshots(null)}
              className="absolute top-3 right-3 text-white text-2xl hover:text-[#E07A5F] transition"
            >
              ✕
            </button>

            <h4 className="text-xl font-bold text-[#E07A5F] mb-4">
              PegaHCM Screenshots
            </h4>

            {/* Main Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={selectedScreenshots[activeIndex || 0]}
                alt="Main Screenshot"
                className="max-h-[70vh] rounded-lg border border-[#E07A5F55] shadow-lg transition-all duration-300 object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="mt-6 flex gap-3 overflow-x-auto pb-2 justify-center">
              {selectedScreenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Screenshot ${i + 1}`}
                  className={`h-20 w-32 object-cover rounded-md cursor-pointer border transition
              ${
                i === (activeIndex || 0)
                  ? "border-[#E07A5F] ring-2 ring-[#E07A5F]"
                  : "border-transparent hover:border-[#E07A5F88]"
              }
            `}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes fadeInOut {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          10%,
          90% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
        .animate-fade-in-out {
          animation: fadeInOut 3s ease forwards;
        }
      `}</style>
    </section>
  );
}
