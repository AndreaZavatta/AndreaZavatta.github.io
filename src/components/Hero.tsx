import React from 'react';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { LinkedInIcon } from './Icons';
import profileImage from '../assets/profileImage.jpeg';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Subtle radial background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Main Info */}
          <div className="space-y-6 max-w-2xl">
            {/* Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Andrea Zavatta
              </h1>
            </div>

            {/* Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Hi 👋, I'm a Software Engineer from Italy striving to build impactful projects that I can genuinely be proud of—often connecting software engineering with my personal passions, such as sports and hobbies like chess.
              </p>
              <p>
                My greatest technical strengths lie in <span className="text-zinc-900 dark:text-zinc-200 font-medium">Java</span> and <span className="text-zinc-900 dark:text-zinc-200 font-medium">Scala</span>, honed throughout my university path and software projects. I enjoy designing clean, robust software across both <span className="text-zinc-900 dark:text-zinc-200 font-medium">Object-Oriented</span> and <span className="text-zinc-900 dark:text-zinc-200 font-medium">Functional programming</span> paradigms, with a strong interest in understanding distributed systems and how large-scale architectures scale.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>Italy</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 font-semibold text-sm dark:hover:bg-white shadow-sm dark:hover:shadow-lg dark:hover:shadow-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="https://www.linkedin.com/in/andreazavatta/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center gap-1.5 group cursor-pointer shadow-xs"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative group self-center md:self-auto">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-xl dark:shadow-2xl">
              <img
                src={profileImage}
                alt="Andrea Zavatta"
                className="w-full h-full object-cover grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
