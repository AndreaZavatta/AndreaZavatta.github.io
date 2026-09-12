import React from 'react';
import { Terminal, Database, Globe, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories = [
    {
      name: 'Programming Languages',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      skills: ['Java', 'Scala', 'Python', 'Apex', 'TypeScript', 'JavaScript', 'SQL', 'SOQL', 'C++'],
    },
    {
      name: 'Backend & Distributed Systems',
      icon: <Database className="w-4 h-4 text-blue-400" />,
      skills: [
        'Distributed Systems',
        'Scalable Architecture',
        'Microsoft 365 Agents',
        'Microsoft Teams Integration',
        'Node.js',
        'WebSockets',
        'Redis (Pub/Sub & Caching)',
        'Governor Limits Optimization',
        'Microservices Architecture',
        'RESTful API Design',
        'MongoDB',
      ],
    },
    {
      name: 'Frontend & UI Engineering',
      icon: <Globe className="w-4 h-4 text-purple-400" />,
      skills: [
        'Lightning Web Components (LWC)',
        'Visualforce',
        'Vue.js 3',
        'React',
        'Tailwind CSS',
        'Vite',
        'HTML5 / Semantic Web',
        'Responsive Design',
      ],
    },
    {
      name: 'Cloud, DevOps & Tooling',
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      skills: [
        'Cloud Deployment',
        'CI/CD Pipelines',
        'Production Logging & Observability',
        'Docker & Docker Compose',
        'Automated Unit Testing',
        'Salesforce Administration',
        'Git & GitHub Actions',
        'Jira / Agile Workflow',
        'Linux / Bash',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Technical Competencies
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
            Skills &amp; Technologies
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
            Core toolset and technologies I work with across systems and web applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700/80 shadow-xs transition-all space-y-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm sm:text-base">
                  {cat.name}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
