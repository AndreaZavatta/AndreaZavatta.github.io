import React from 'react';
import { ExternalLink, Star, GitFork, FolderGit2 } from 'lucide-react';
import type { Project } from '../types';
import { GitHubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const LANGUAGE_COLORS: Record<string, string> = {
  Java: 'bg-orange-500',
  TypeScript: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  Python: 'bg-emerald-400',
  'C++': 'bg-pink-500',
  'C#': 'bg-purple-500',
  Go: 'bg-cyan-400',
  Rust: 'bg-amber-600',
  Scala: 'bg-red-500',
  HTML: 'bg-red-500',
  Vue: 'bg-emerald-500',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const languageColor = LANGUAGE_COLORS[project.language] || 'bg-zinc-400';

  return (
    <article className="group relative flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700/80 hover:bg-zinc-900 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-black/40">
      <div>
        {/* Card Header: Icon, Name, Stats */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-zinc-800/70 border border-zinc-700/50 text-zinc-300 group-hover:text-emerald-400 transition-colors">
              <FolderGit2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-100 text-lg group-hover:text-white tracking-tight flex items-center gap-2">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline focus:outline-none"
                >
                  {project.name}
                </a>
              </h3>
              {project.owner && (
                <span className="text-xs text-zinc-500 font-mono">
                  {project.owner}
                </span>
              )}
            </div>
          </div>

          {/* Top-Right Stats Badges */}
          <div className="flex items-center gap-2.5 text-xs text-zinc-400 bg-zinc-950/70 px-2.5 py-1 rounded-full border border-zinc-800">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400/20" />
              {project.stars}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-3 h-3 text-zinc-400" />
              {project.forks}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-5 mt-2">
          {project.description}
        </p>
      </div>

      {/* Footer: Tags & Links */}
      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-zinc-800/40 text-zinc-500">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs">
          {/* Primary Language */}
          <div className="flex items-center gap-1.5 text-zinc-400 font-medium">
            <span className={`w-2 h-2 rounded-full ${languageColor}`}></span>
            <span>{project.language}</span>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-300 hover:text-white font-medium transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
