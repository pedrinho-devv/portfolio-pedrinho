"use client";

import CardsServices from "./components/cardsServices";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfileCard from "./components/About";
import TechnologySection from "./components/infor";
import ProjectsCarousel from "./components/ProjectsCarousel";
import ContactSection from "./components/contact";
import useLenis from "./hooks/useLenis";

export default function Home() {
  useLenis();

  return (
    <main className="flex min-h-screen w-full flex-col">
      <Header />
      <Hero />
      <CardsServices />
      <ProfileCard />
      <TechnologySection />
      <ProjectsCarousel />
      <ContactSection />
    </main>
  );
}
