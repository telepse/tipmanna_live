import { Countdown } from "@/components/countdown";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-6">
      <Countdown targetDate="2025-11-17T00:00:00" />
      <Hero />
    </section>
  );
}
