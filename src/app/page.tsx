import CardsServices from "./components/cardsServices";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProfileCard from "./components/About";
import ProjectsCarousel from "./components/ProjectsCarousel";


export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
    <Header/>
    <Hero/>
    <CardsServices/>
    <ProfileCard/>
    <ProjectsCarousel/>

    </main>
  );
}
