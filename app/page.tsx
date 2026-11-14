import Image from "next/image";
import { LuDownload } from "react-icons/lu";
import Intro from "@/components/Intro"
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import ThemeToggle from "@/components/Themetoggle";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-surface font-sans">
      <main className="mx-auto w-full max-w-3xl bg-surface-alt px-8 py-32 text-ink md:px-16">
        <div className="mb-8 flex justify-start">
          <ThemeToggle />
        </div>
        <Intro />
        <Projects/>
        <section className="mt-12 md:mt-24">
          <h2 className="mb-10 text-2xl font-semibold">Technologies</h2>
          <Technologies />
        </section>
        
        <section className="mt-12 md:mt-24">
          <a
            href="/Fadairo-Marvellous CV.pdf"
            download="Fadairo-Marvellous-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-surface transition-opacity hover:opacity-80"
          >
            <LuDownload className="size-4" aria-hidden="true" />
            Download resume
          </a>
        </section>
        
      </main>
    </div>
  );
}
