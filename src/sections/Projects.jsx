import SectionTitle from "../components/SectionTitle";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const flagship = [
    {
      title: "PegaHCM",
      role: "Enterprise HR Management System",
      desc: "Streamlined HR operations with an all-in-one platform for attendance, leave, onboarding, and asset management. Empowered managers with real-time dashboards and notifications to boost team productivity.",
      tech: ["React", "Tailwind", "Node", "Prisma", "MySQL"],
      demo: null,
    },
    {
      title: "AI-Powered LMS",
      role: "Learning Management System",
      desc: (
        <>
          Developed a smart education platform with AI-assisted grading and
          multilingual support, helping instructors save time and deliver
          personalized learning experiences.
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
          Created powerful dashboards to help Fleetbold’s admin and managers
          track vehicles, expenses, and workflows efficiently.
          <br />
          <em className="text-sm text-gray-400">
            *Note: The public fleetbold.com website is separate; our work
            focused on internal dashboards for streamlined operations.
          </em>
        </>
      ),
      tech: ["React", "Tailwind", "Node"],
      demo: "https://fleetbold.com/",
    },
    {
      title: "32beat Writer",
      role: "Live Platform for Writers & Music Fans",
      desc: "Enhanced user experience by building and maintaining critical features like profile editing and seamless navigation, connecting writers with their communities.",
      tech: ["React", "Next.js", "Tailwind", "Node"],
      demo: "https://32beatwriters.com/",
    },
    {
      title: "GoldTrust",
      role: "Feature Development & User Experience",
      desc: "Designed and built secure identity verification flows and improved gold listing management, making it easier for users to invest confidently.",
      tech: ["React", "Node", "Tailwind"],
      demo: null,
    },
    {
      title: "Pareeshay Traders",
      role: "Client E-commerce Website",
      desc: (
        <>
          Developed a responsive and user-friendly e-commerce website using
          WordPress, custom HTML, CSS, and vanilla JavaScript. Delivered smooth
          navigation, clean product listings, and secure checkout functionality
          tailored to client requirements.
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
        {flagship.map(({ title, role, desc, tech, demo }) => (
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
            {/* Shimmer overlay */}
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
                  className="
                    inline-flex items-center gap-1 border border-[#E07A5F] text-[#1F262B]
                    bg-[#E07A5F] px-5 py-2 rounded-full font-semibold
                    hover:bg-[#f0a97d] transition focus:outline-none
                    focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-1
                  "
                >
                  View Demo <FaExternalLinkAlt />
                </a>
              ) : (
                <span className="italic text-[#aa775f88] text-sm">
                  Demo / screenshots available on request
                </span>
              )}

              <button
                className="
                  ml-auto text-[#E07A5F] font-semibold hover:underline transition
                  focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-1
                "
                aria-label={`Discuss project ${title}`}
              >
                Discuss this
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Collaborations */}
      <section className="mt-28 border-t border-[#E07A5F] pt-16">
        <h4 className="text-2xl font-bold mb-4 text-[#E07A5F] tracking-wide">
          Past Collaborations
        </h4>
        <div className="w-20 h-1 bg-[#E07A5F] rounded mb-14 shadow-md" />

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
          {collaborations.map(({ title, role, desc, tech, demo }) => (
            <a
              key={title}
              href={demo || "#"}
              target={demo ? "_blank" : undefined}
              rel="noopener noreferrer"
              tabIndex={0}
              aria-label={`${title} - ${role} (link)`}
              className="
                relative group block bg-[#1F262B] bg-opacity-70 backdrop-blur-lg border border-[#E07A5F]
                rounded-3xl p-8 shadow-[0_0_8px_#E07A5F44]
                hover:shadow-[0_0_18px_#E07A5F88] transition-transform duration-400
                hover:scale-[1.03] transform will-change-transform
                focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-1
                overflow-hidden min-h-[250px]
              "
            >
              {/* Shimmer overlay */}
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
            </a>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
