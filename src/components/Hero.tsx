import React from 'react';
import { ArrowUpRight, Mail, Sparkles, MapPin } from 'lucide-react';
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
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Software Engineering Opportunities</span>
            </div>

            {/* Title & Tagline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Andrea Zavatta
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-zinc-400 font-medium leading-relaxed">
                Software Engineer passionate about backend systems, distributed architectures, and collaborative web tools.
              </p>
            </div>

            {/* Short narrative */}
            <p className="text-sm sm:text-base text-zinc-400/90 leading-relaxed">
              With a solid foundation in Object-Oriented design, modern TypeScript, and cloud-native services, I focus on building reliable software with clean architectures and great developer ergonomics.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                Italy / Remote
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Specialized in Java &amp; TypeScript Ecosystems
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-sm hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                View Projects
              </a>
              <a
                href="https://www.linkedin.com/in/andreazavatta/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-sm hover:bg-zinc-800/80 hover:border-zinc-700 transition-all flex items-center gap-1.5 group cursor-pointer"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-800/80 hover:border-zinc-700 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="relative group self-center md:self-auto">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
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
