import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Entoss Pomfret Systems Pvt Ltd (MyCargo)',
      period: 'Feb 2025 – Aug 2025',
      description: 'Built a global container shipping & tracking platform using Angular 16+. Improved performance by 30% with OnPush, lazy loading & RxJS optimization. Integrated real-time APIs for ports, carriers, and dynamic pricing.',
      technologies: ['Angular 16+', 'TypeScript', 'RxJS', 'Angular Material', 'Figma'],
    },
     {
      title: 'Freelance Frontend Developer',
      company: 'Remote',
      period: 'Apr 2024 – Jan 2025',
      description: 'Created a full e-commerce platform using React, Next.js & TypeScript. Reduced page load time by 40% using dynamic imports & image optimization. Delivered end-to-end architecture with Redux Toolkit for scalable state management.',
      technologies: ['React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS'],
    },
    {
      title: 'Software Engineer',
      company: 'FxBytes Technologies Pvt Ltd',
      period: 'Oct 2021 – Mar 2024',
      description: 'Developed large-scale SPAs in Angular and React. Implemented advanced routing, guards, reactive form modules & multi-step flows. Built reusable UI libraries and boosted user retention by 20% using mobile-first responsive layouts.',
      technologies: ['Angular13+', 'React', 'TypeScript','JavaScript', 'Bootstrap', 'Redux', 'SCSS', 'Webpack', 'Tailwind CSS', 'NodeJS'],
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 relative bg-zinc-100 dark:bg-zinc-900/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Work <span className="text-cyan-500 dark:text-cyan-400">Experience</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A track record of building scalable, maintainable applications across various industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full -translate-x-1/2 ring-4 ring-white dark:ring-zinc-950" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-6 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 transition-all shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <h3 className="mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-full text-cyan-700 dark:text-cyan-400 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
