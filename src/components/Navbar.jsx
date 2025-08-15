import {
  FiMenu,
  FiX,
  FiHome,
  FiBriefcase,
  FiFolder,
  FiUser,
  FiMail,
} from "react-icons/fi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const navIcons = {
  hero: <FiHome size={20} />,
  services: <FiBriefcase size={20} />,
  projects: <FiFolder size={20} />,
  about: <FiUser size={20} />,
  contact: <FiMail size={20} />,
};

export default function Navbar({ open, setOpen, isMobile }) {
  const links = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "Projects", to: "projects" },
    { name: "About", to: "about" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      {/* Overlay behind sidebar on mobile */}
      {isMobile && open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          aria-hidden="true"
        />
      )}

      <nav
        className={`
          fixed top-0 left-0 h-full bg-[#1F262B] text-[#E0C5A0cc] flex flex-col justify-between
          shadow-lg transition-all duration-500 z-50 border-r border-[#E07A5F22]
          ${
            isMobile
              ? open
                ? "w-56"
                : "w-0 overflow-hidden"
              : open
              ? "w-56 px-6 py-10"
              : "w-16 px-3 py-10 overflow-hidden"
          }
        `}
        aria-label="Sidebar Navigation"
      >
        {/* Brand */}
        <div
          onClick={() => {
            scroll.scrollToTop({ smooth: true });
            if (!isMobile) setOpen(true);
            else setOpen(false);
          }}
          tabIndex={0}
          role="button"
          aria-label="Scroll to top"
          className="flex flex-col items-center cursor-pointer select-none mb-10"
        >
          <div
            className={`
              rounded-full flex items-center justify-center
              shadow-lg w-14 h-14 mb-3 transition-transform duration-300
              bg-gradient-to-br from-[#E07A5F] to-[#E07A5Faa]
              ${open ? "scale-100" : "scale-75"}
            `}
          >
            <span className="text-[#F4F1DE] font-extrabold text-3xl tracking-wider">
              DA
            </span>
          </div>
          {open && !isMobile && (
            <>
              <h1 className="text-xl font-semibold text-[#F4F1DE] tracking-wide">
                DevAgency
              </h1>
              <p className="text-xs text-[#A08E76] mt-1 uppercase font-mono">
                Your Digital Partner
              </p>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4">
          {links.map(({ name, to }) => (
            <li key={to} className="relative group">
              <ScrollLink
                to={to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-20}
                onClick={() => isMobile && setOpen(false)}
                className={`
                  flex items-center gap-4 cursor-pointer select-none rounded-md px-3 py-2
                  transition-all duration-300
                  hover:bg-[#E07A5F22] hover:text-[#E07A5F]
                  ${open ? "justify-start" : "justify-center"}
                `}
                activeClass="!text-[#E07A5F] font-semibold before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:bg-[#E07A5F]"
                tabIndex={0}
                role="link"
              >
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 text-[#E07A5F]">
                  {navIcons[to]}
                </span>
                {open && <span className="font-medium text-base">{name}</span>}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Collapse/Expand Toggle (hide on mobile) */}
        {!isMobile && (
          <button
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            onClick={() => setOpen(!open)}
            className="self-center mt-10 p-2 bg-[#2D2D34] border border-[#E07A5F33] rounded-md shadow-lg hover:bg-[#E07A5F22] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-2"
          >
            {open ? (
              <FiX size={24} className="text-[#E07A5F]" />
            ) : (
              <FiMenu size={24} className="text-[#E07A5F]" />
            )}
          </button>
        )}

        {/* Mobile hamburger button (show only on mobile & closed) */}
        {isMobile && !open && (
          <button
            aria-label="Open sidebar"
            onClick={() => setOpen(true)}
            className="fixed top-4 left-4 p-2 bg-[#2D2D34] border border-[#E07A5F33] rounded-md shadow-lg hover:bg-[#E07A5F22] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#E07A5F] focus:ring-offset-2 z-50"
          >
            <FiMenu size={24} className="text-[#E07A5F]" />
          </button>
        )}
      </nav>
    </>
  );
}
