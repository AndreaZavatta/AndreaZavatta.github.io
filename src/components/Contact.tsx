import React, { useState } from 'react';
import { Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'zavattaandrea@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800/90 relative overflow-hidden">
          
          {/* Subtle glow accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Get in Touch
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Let's connect.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              I am open to Software Engineering opportunities, backend &amp; fullstack challenges, and interesting open-source initiatives. Feel free to reach out directly.
            </p>

            {/* Email Action Box */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm font-mono text-zinc-300">
                <span className="truncate mr-3">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-1.5 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/10 shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Email</span>
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/andreazavatta/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-medium transition-all group cursor-pointer"
              >
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://github.com/AndreaZavatta"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-medium transition-all group cursor-pointer"
              >
                <GitHubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                <span>Follow on GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
