export default function Hero({ sidebarOpen }) {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        marginLeft: sidebarOpen ? 0 : 34,
        transition: "margin-left 0.4s ease",
      }}
      className="min-h-[90vh] py-24 px-6 sm:px-12"
    >
      <div
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        style={{
          background:
            "linear-gradient(180deg, #1F262B 0%, #2D2D34 50%, #1F262B 100%)",
        }}
      >
        {/* Left Content */}
        <div>
          <p
            className="mb-6 uppercase font-semibold tracking-widest select-none"
            style={{ color: "#E07A5F", letterSpacing: "0.2em" }}
          >
            Innovate • Build • Scale
          </p>
          <h1
            className="mb-8 font-extrabold leading-tight"
            style={{ fontSize: "3.5rem", lineHeight: 1.1, color: "#F4F1DE" }}
          >
            Crafting <span style={{ color: "#E07A5F" }}>bold</span>,{" "}
            <span style={{ color: "#CCCCCC" }}>impactful</span> digital
            experiences.
          </h1>
          <p
            className="text-lg max-w-md leading-relaxed"
            style={{ color: "#CCCCCC", fontSize: "1.125rem", lineHeight: 1.6 }}
          >
            From startups to enterprises, we design & develop next-level apps
            and dashboards with speed, precision, and a relentless focus on what
            matters — your success.
          </p>
        </div>

        {/* Right Card */}
        <div
          className="rounded-3xl p-10 border-2"
          style={{
            backgroundColor: "#1F262B",
            borderColor: "#E07A5F",
            color: "#CCCCCC",
            userSelect: "none",
          }}
        >
          <div className="flex items-center gap-5">
            <div
              className="rounded-full flex items-center justify-center font-extrabold shadow-xl"
              style={{
                width: 96,
                height: 96,
                background: "linear-gradient(45deg, #E07A5F, #CCCCCC)",
                color: "#1F262B",
                fontSize: "2rem",
                fontWeight: "900",
                boxShadow: "0 0 10px #E07A5F88",
              }}
            >
              DA
            </div>
            <div>
              <h3
                className="text-2xl font-extrabold"
                style={{ color: "#F4F1DE" }}
              >
                DevAgency
              </h3>
              <p className="mt-1 font-semibold" style={{ color: "#E07A5F" }}>
                Bold solutions. Real growth.
              </p>
            </div>
          </div>

          <blockquote
            className="mt-8 italic text-lg leading-relaxed"
            style={{ color: "#999999", fontStyle: "italic" }}
          >
            "Not just service providers — your committed growth partners."
          </blockquote>

          <p
            className="mt-6 italic pl-4 border-l-4"
            style={{
              borderColor: "#E07A5F",
              color: "#888888",
              fontStyle: "italic",
            }}
          >
            From concept to launch, we focus on delivering stress-free,
            client-first experiences — helping you win in the digital world.
          </p>
        </div>
      </div>
    </section>
  );
}
