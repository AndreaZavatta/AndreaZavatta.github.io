import React from 'react';
import { Briefcase, GraduationCap, Calendar, ArrowUpRight } from 'lucide-react';

export const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'September 2025 — Present',
      role: 'Software Engineer',
      company: 'Technogym · Integration & Digital Enablement',
      description: [
        'Took full end-to-end project ownership, engineering intelligent agent solutions with Python and Microsoft 365 Agents ecosystem.',
        'Architected a custom conversational agent integrated within Microsoft Teams capable of natural language Q&A, automated tool execution, and proactive reminders.',
        'Designed and selected scalable cloud infrastructure, implementing robust CI/CD delivery pipelines for continuous deployment.',
        'Established comprehensive production logging, error diagnostics, and observability to monitor performance and resolve runtime anomalies.',
        'Translated complex stakeholder and customer requirements into modular, testable, and maintainable software, while providing ongoing development for targeted Salesforce features.',
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
      role: 'Digital Customer Platform Application Analyst (Salesforce Developer)',
      company: 'Technogym · Digital Customer Platform',
      description: [
        'Worked as a Salesforce Developer & Application Analyst, mastering platform architecture from both development and administration perspectives.',
        'Engineered custom solutions and interactive interfaces using Apex, SOQL, Lightning Web Components (LWC), and Visualforce pages.',
        'Optimized code, database queries, and transaction processing to strictly adhere to Salesforce governor limits and multi-tenant performance standards.',
        'Transformed complex business requirements into modular, testable, and maintainable code engineered for future scalability and evolving needs.',
        'Ensured software quality with comprehensive automated unit testing, CI/CD deployment pipelines, and agile sprint collaboration via Jira.',
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
      period: 'University Education',
      degree: 'Computer Science and Engineering',
      institution: 'Alma Mater Studiorum – Università di Bologna',
      details: 'Focused on Algorithms, Software Architecture, Distributed Systems, Networking, and Databases.',
    },
  ];

  return (
    <section id="experience" className="py-20 border-t border-zinc-800/80 scroll-mt-16">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
            Career &amp; Background
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-1">
            Experience &amp; Education
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Summary of professional experience and academic background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Work / Engineering Experience Timeline (2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Work Experience</span>
            </div>

            <div className="relative pl-6 border-l border-zinc-800 space-y-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-zinc-900 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors" />

                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-medium text-emerald-400 mb-3">
                    {exp.company}
                  </div>

                  <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-400 mb-4 list-disc list-inside">
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
                        className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
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
            <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Education</span>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/70 space-y-2"
                >
                  <span className="text-xs text-zinc-500 font-mono block">
                    {edu.period}
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs text-zinc-300">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              ))}

              {/* LinkedIn Full Resume Callout */}
              <div className="p-5 rounded-xl bg-zinc-900/30 border border-dashed border-zinc-800 text-xs text-zinc-400 space-y-3">
                <p>
                  Looking for detailed employment history, certifications, or recommendations?
                </p>
                <a
                  href="https://www.linkedin.com/in/andreazavatta/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>View Complete LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
