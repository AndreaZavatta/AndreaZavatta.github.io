import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-zinc-900 bg-zinc-950 text-xs text-zinc-500">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-end">
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
