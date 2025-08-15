export default function SectionTitle({ title }) {
  return (
    <h2
      className="
        text-4xl md:text-5xl font-extrabold text-center 
        text-[#E07A5F] uppercase tracking-[0.25em]
        relative select-none mb-10
      "
    >
      <span className="relative z-10">{title}</span>
      <span
        className="
          absolute left-1/2 -translate-x-1/2 bottom-[-6px]
          w-16 h-[3px] rounded-full
          bg-gradient-to-r from-transparent via-[#E07A5F] to-transparent
          shadow-[0_0_8px_#E07A5F88]
        "
      />
    </h2>
  );
}
