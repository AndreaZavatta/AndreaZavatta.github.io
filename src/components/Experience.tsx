import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'September 2025 — Present',
      role: 'Software Engineer',
      company: 'Technogym · Integration & Digital Enablement',
      description: [
        'Took end-to-end ownership of intelligent agent development using Python and Microsoft 365 Agents, building a custom Microsoft Teams bot for interactive Q&A, autonomous tool execution, and proactive reminders.',
        'Architected scalable cloud deployments with automated CI/CD pipelines, implementing structured logging, error diagnostics, and observability for production stability.',
        'Translated customer and stakeholder needs into modular, testable code designed to scale, while continuing parallel development on targeted Salesforce platform features.',
      ],
      skills: [
        'Python',
        'Microsoft 365 Agents',
        'Microsoft Teams',
        'Cloud Deployment',
        'CI/CD Pipelines',
        'Production Logging',
        'Scalable Architecture',
        'Salesforce',
      ],
    },
    {
      period: 'January 2024 — September 2025',
      role: 'Salesforce Developer',
      company: 'Technogym · Information Technology',
      description: [
        'Engineered enterprise Salesforce solutions and custom user interfaces using Apex, SOQL, Lightning Web Components (LWC), and Visualforce pages.',
        'Optimized code execution and data queries to strictly adhere to Salesforce governor limits, designing modular and testable code structured for future business evolution.',
        'Ensured platform reliability and code quality through comprehensive automated unit testing, CI/CD deployment workflows, and agile sprint delivery via Jira.',
      ],
      skills: [
        'Salesforce',
        'Apex',
        'LWC',
        'SOQL',
        'Visualforce',
        'Governor Limits',
        'Unit Testing',
        'CI/CD',
        'Jira',
        'Salesforce Admin',
      ],
    },
  ];

  const education = [
    {
      period: 'Sep 2024 — Present',
      degree: "Master's Degree, Engineering and Computer Science",
      institution: 'Alma Mater Studiorum – University of Bologna',
      details: 'Focused on Distributed Systems, Backend Scalability, and Advanced Software Architectures.',
    },
    {
      period: 'Sep 2020 — Sep 2024',
      degree: "Bachelor's Degree, Engineering and Computer Science",
      institution: 'Alma Mater Studiorum – University of Bologna',
      details: 'Focused on Algorithms, Object-Oriented Paradigms, Computer Networks, and Operating Systems.',
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-zinc-200 dark:border-zinc-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Career &amp; Background
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
            Experience &amp; Education
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-1">
            Summary of professional experience and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Work / Engineering Experience Timeline (2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              <Briefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Work Experience</span>
            </div>

            <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-900 border-2 border-emerald-500 dark:border-emerald-400 group-hover:bg-emerald-500 dark:group-hover:bg-emerald-400 transition-colors" />

                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-3">
                    {exp.company}
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials (1 column) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              <GraduationCap className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span>Education</span>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/70 space-y-2 shadow-xs"
                >
                  <span className="text-xs text-zinc-500 font-mono block">
                    {edu.period}
                  </span>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-zinc-700 dark:text-zinc-300">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
