// components/Projects.tsx
import Image from "next/image";
import projects from "@/data.json";
import PillLink from "./PillLink";

export default function Projects() {
  return (
    <ul className="flex flex-col gap-10 mt-12 md:mt-24">
      {projects.map((project) => (
        <li
          key={project.title}
          className="overflow-hidden rounded-lg border border-line bg-surface-alt"
        >
          <div className="relative aspect-[2/1] md:aspect-video">
            <Image
              src={`/${project.image}`}
              alt={`Screenshot of ${project.title}`}
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-4 md:p-6">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 line-clamp-3 leading-relaxed text-ink-soft md:line-clamp-none">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded bg-surface-accent px-2 py-0.5 font-mono text-sm text-ink-muted"
                >
                  {technology}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <PillLink href={project.github}>GitHub</PillLink>
              <PillLink href={project.link}>Live site</PillLink>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}