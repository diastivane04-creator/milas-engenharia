type Props = {
  eyebrow: string;
  title: string;
  tone?: "light" | "dark";
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  tone = "light",
  description,
  align = "left",
}: Props) {
  const isDark = tone === "dark";
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p
        className={`eyebrow mb-4 ${
          isDark ? "text-moss-light" : "text-moss-dark"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`font-display font-bold text-4xl sm:text-5xl leading-[1.05] text-balance ${
          isDark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl font-body text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-paper/75" : "text-ink/70"}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
