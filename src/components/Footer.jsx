export default function Footer() {
  return (
    <footer className="bg-[#1F262B] border-t border-[#E07A5F33] py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <p className="text-[#E0C5A0cc] text-sm tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-[#E07A5F] font-semibold">DevAgency</span>. All
          rights reserved.
        </p>

        <div className="flex gap-6">
          {[
            { label: "GitHub", href: "https://github.com/" },
            { label: "LinkedIn", href: "https://linkedin.com/" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-[#E0C5A0cc] hover:text-[#E07A5F] transition-all duration-300 
                hover:scale-105 font-medium
              "
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
