"use client";
import Image from "next/image";
import Pre from "../../../public/pre1.jpg";

export default function homePage() {
  return (
    <section className="w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold text-white mb-10">Projetos em Destaque</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Projeto Principal */}
          <div className="col-span-1 xl:col-span-2 relative rounded-2xl overflow-hidden shadow-lg hover:scale-[1.01] transition">
            <Image
              src={Pre}
              alt="Projeto Destaque"
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg">
              <h3 className="text-white text-xl font-semibold">AtomAI</h3>
              <p className="text-sm text-white/70">Social Media Growth Made Easy</p>
            </div>
          </div>

          {/* Miniaturas laterais */}
          <div className="grid grid-cols-1 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
              <Image
                src={Pre}
                alt="Projeto 2"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
              <Image
                src={Pre}
                alt="Projeto 3"
                width={400}
                height={300}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
