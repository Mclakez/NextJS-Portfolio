// components/PillLink.tsx
import ArrowIcon from "@/components/ArrowIcon";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function PillLink({ href, children }: PillLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full border border-line px-5 py-1.5 transition-colors hover:bg-surface-accent"
    >
      {children} <ArrowIcon />
    </a>
  );
}