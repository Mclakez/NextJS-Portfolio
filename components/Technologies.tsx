// components/Technologies.tsx
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

type Technology = { name: string; icon: IconType };

const groups: { title: string; items: Technology[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function Technologies() {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold text-ink-muted">{group.title}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {group.items.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex items-center gap-2 rounded-full border border-line bg-surface-alt px-4 py-2 text-sm"
              >
                <Icon className="size-4" aria-hidden="true" />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}