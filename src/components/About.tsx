import React from 'react';
import { Code2, Server, Cpu, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      title: 'Object-Oriented & Type-Safe Architecture',
      description:
        'Deep understanding of clean design patterns, SOLID principles, domain modeling, and strict type safety across Java and TypeScript.',
    },
    {
      icon: <Server className="w-5 h-5 text-blue-400" />,
      title: 'Backend & Distributed Services',
      description:
        'Experienced in architecting real-time WebSockets, microservices with Redis and MongoDB, asynchronous queues, and REST APIs.',
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: 'Modern Fullstack Ecosystems',
      description:
        'Building responsive, fast, and accessible user interfaces with Vue, React, Tailwind CSS, coupled with robust server runtimes.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: 'DevOps & Containerization',
      description:
        'Deploying scalable environments with Docker, reverse proxies (Traefik), CI/CD pipelines, and automated GitHub workflows.',
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
            Engineering for reliability, clarity, and scale.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I am a Software Engineer dedicated to crafting maintainable and robust systems. Whether it is engineering complex state management in multiplayer real-time applications like <strong className="text-zinc-200">Pixie</strong> or modeling strict rule verification engines in <strong className="text-zinc-200">OOP21-Chess</strong>, I prioritize clean architectural boundaries and code clarity.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            I believe that great software is born out of continuous learning, open-source collaboration, and rigorous attention to developer ergonomics and system performance.
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
