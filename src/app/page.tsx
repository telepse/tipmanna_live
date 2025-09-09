import { Countdown } from "@/components/countdown";
import { Hero } from "@/components/hero";
import { RadialGradient } from "@/components/radial-gradient";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center gap-6 p-4">
      <RadialGradient />

      <Countdown targetDate="2025-11-17T00:00:00" />

      <Hero />
    </section>
  );
}
