import React from 'react';
import { Code2, Server, Cpu, GitBranch } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-blue-400" />,
      title: 'Distributed Systems & Scalable Backends',
      description:
        'Studying distributed consensus, replication, concurrent computation, and backend scalability designed to handle millions of concurrent users.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: 'Object-Oriented & Functional Paradigms',
      description:
        'Blending clean OOP principles, domain-driven design, and strict type safety in Java with pure functional paradigms and immutability in Scala.',
    },
    {
      icon: <GitBranch className="w-5 h-5 text-indigo-400" />,
      title: 'Impactful & Domain-Driven Projects',
      description:
        'Channeling engineering into personal passions—from game engines and simulation dynamics (PlagueSim, OOP21-Chess) to real-time microservices.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: 'Containerization & DevOps',
      description:
        'Deploying resilient containerized architectures with Docker, reverse proxies (Traefik), Redis caching, and automated CI/CD pipelines.',
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="space-y-4 max-w-3xl mb-12">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Background &amp; Philosophy
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Engineering for scale, resilience, and personal pride.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I am a Software Engineer dedicated to crafting maintainable and robust backend systems. Whether it is modeling strict rule verification engines in <strong className="text-zinc-200">OOP21-Chess</strong>, engineering infectious simulation dynamics in <strong className="text-zinc-200">PlagueSim</strong> with Scala, or handling real-time microservices in <strong className="text-zinc-200">Pixie</strong>, I prioritize clean architectural boundaries and scalable computation.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I believe that great software is born at the intersection of rigorous distributed engineering and personal passion—building resilient systems that perform under massive scale and create a real, proud impact.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700/80 transition-all flex flex-col justify-between"
            >
              <div className="p-2.5 w-fit rounded-lg bg-zinc-800/80 border border-zinc-700/50 mb-3">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-zinc-100 mb-1.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
