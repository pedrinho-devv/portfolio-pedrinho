// pages/index.tsx
import { BentoGrid, BentoCard } from "../../components/magicui/bento-grid";
import { CodeIcon, PaletteIcon, BugIcon} from "lucide-react";
import { SparklesCore } from "../../components/magicui/sparklesscore";

export default function HomePage() {
  return (
    <section className="p-6 bg-[#1E1E1E] min-h-screen">
      <BentoGrid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[200px] gap-4">
        {/* Card grande (2 col x 2 row) */}
        <BentoCard
          name="Projetos"
          className="lg:col-span-3 lg:row-span-2"
          background={<SparklesCore background="transparent" minSize={0.4} maxSize={1} speed={2} />}
          Icon={CodeIcon}
          description="Veja alguns dos projetos e ideias que desenvolvi."
          href="/projetos"
          cta="Ver todos"
        />

        {/* Card médio (2 col) */}
        <BentoCard
          name="Design"
          className="lg:col-span-3"
          background={<SparklesCore background="transparent" minSize={0.4} maxSize={1} speed={2.5} />}
          Icon={PaletteIcon}
          description="UI/UX e prototipagem visual."
          href="/design"
          cta="Explorar"
        />

        {/* Card pequeno */}
        <BentoCard
          name="Experimentos"
          className="lg:col-span-2"
          background={<SparklesCore background="transparent" minSize={0.5} maxSize={1.2} speed={1.5} />}
          Icon={BugIcon}
          description="Testes e playgrounds criativos."
          href="/experimentos"
          cta="Testar"
        />

     
     
      </BentoGrid>
    </section>
  );
}
