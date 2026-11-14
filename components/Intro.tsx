// components/Intro.tsx
import ArrowIcon from "./ArrowIcon";

const links = [
  { label: "Mail", href: "mailto:fadairomarvellous@gmail.com" },
  { label: "GitHub", href: "https://github.com/Mclakez" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/fadairo-marvellous-6ab4b1238",
  },
  { label: "X", href: "https://x.com/FadairoMarvel" },
];

export default function Intro() {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
        Fadairo Marvellous
      </h1>
      <p className="mt-2 text-ink-muted">Building things</p>

      <h2 className="mt-10 text-xl font-semibold">Fullstack Web Developer</h2>
      <p className="mt-3 max-w-prose leading-relaxed text-ink-soft">
        I’m Marvellous, a full-stack developer who builds web apps with React,
        Next.js, and TypeScript on the frontend, and Node.js and Express on the
        backend. I care about clean code and good-looking, usable interfaces,
        because I think they should work together. I enjoy watching anime,
        reading manhwa, and reading in my free time.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {links.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 rounded-full border border-line px-5 py-1.5 transition-colors hover:bg-surface-alt"
            >
              {link.label} <ArrowIcon />
            </a>
          );
        })}
      </div>
    </section>
  );
}