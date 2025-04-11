// pages/index.tsx
import { BentoGrid, BentoCard } from "../../components/magicui/bento-grid";
import { CodeIcon, PaletteIcon, BugIcon, RocketIcon } from "lucide-react";
import { SparklesCore } from "../../components/magicui/sparklesscore";

export default function HomePage() {
  return (
    <section className="p-8 bg-[#1E1E1E] min-h-screen">
      <BentoGrid className="grid-cols-4 auto-rows-[200px]">
        {/* Card maior - ocupa 2 colunas e 2 linhas */}
        <BentoCard
          name="Meus Projetos"
          className="col-span-2 row-span-2"
          background={
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              speed={2}
            />
          }
          Icon={CodeIcon}
          description="Veja alguns dos projetos e ideias que desenvolvi."
          href="/projetos"
          cta="Ver todos"
        />

        {/* Card pequeno */}
        <BentoCard
          name="Designs"
          className="col-span-1"
          background={
            <SparklesCore
              background="transparent"
              minSize={0.3}
              maxSize={0.9}
              speed={2.5}
            />
          }
          Icon={PaletteIcon}
          description="Criações de UI/UX e protótipos."
          href="/design"
          cta="Explorar"
        />

        {/* Card pequeno */}
        <BentoCard
          name="Experimentos"
          className="col-span-1"
          background={
            <SparklesCore
              background="transparent"
              minSize={0.2}
              maxSize={1.2}
              speed={1.5}
            />
          }
          Icon={BugIcon}
          description="Testes, ideias malucas e playgrounds."
          href="/experimentos"
          cta="Testar"
        />

        {/* Card médio */}
        <BentoCard
          name="Sobre mim"
          className="col-span-2"
          background={
            <SparklesCore
              background="transparent"
              minSize={0.5}
              maxSize={1}
              speed={2}
            />
          }
          Icon={RocketIcon}
          description="Conheça minha trajetória e motivações."
          href="/sobre"
          cta="Ler mais"
        />
      </BentoGrid>
    </section>
  );
}
