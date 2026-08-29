import { createFileRoute } from "@tanstack/react-router";
import { Book } from "@/components/book";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import {
  About,
  Corridor,
  Fleet,
  How,
  Journeys,
  MobileBookBar,
  Packages,
} from "@/components/sections";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <Hero />
      <main>
        <Journeys />
        <About />
        <Packages />
        <Fleet />
        <How />
        <Corridor />
        <Book />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
