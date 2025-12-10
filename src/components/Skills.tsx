import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'Angular 13+', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Svelte', level: 60 },
      ],
    },
    {
      title: 'Languages & Core',
      skills: [
        { name: 'TypeScript', level: 95 },
        { name: 'JavaScript (ES6+)', level: 98 },
        { name: 'HTML5/CSS3', level: 98 },
        { name: 'RxJS', level: 90 },
      ],
    },
    {
      title: 'UI & Styling',
      skills: [
        { name: 'Tailwind CSS', level: 95 },
        { name: 'SCSS/SASS', level: 92 },
        { name: 'Angular Material', level: 90 },
        { name: 'Bootstrap', level: 88 },
      ],
    },
    {
      title: 'Tools & Backend',
      skills: [
        { name: 'Git/GitLab', level: 95 },
        { name: 'Webpack/Babel', level: 85 },
        { name: 'Node.js', level: 70 },
        { name: 'Jest/Testing Library', level: 85 },
      ],
    },
  ];

  const technologies = [
    'Angular 13+', 'React.js', 'TypeScript', 'JavaScript', 'Next.js', 'RxJS',
    'Tailwind CSS', 'Redux', 'Redux Toolkit', 'GraphQL', 'REST APIs', 'Git',
    'Webpack', 'Babel', 'ESLint', 'Jest', 'React Testing Library', 'Figma',
    'SCSS', 'Bootstrap', 'Material UI', 'Angular Material', 'PrimeNG',
    'Node.js', 'MongoDB', 'MySQL', 'Postman', 'CI/CD', 'Responsive Design',
    'Three.js', 'GSAP', 'Lottie', 'Performance Optimization', 'Accessibility',
  ];

  return (
    <section id="skills" className="py-32 px-6 relative bg-zinc-100 dark:bg-zinc-900/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Skills & <span className="text-cyan-500 dark:text-cyan-400">Technologies</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, high-performance web applications with focus on 
            clean architecture, optimized rendering, and immersive user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="p-6 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl backdrop-blur-sm shadow-sm dark:shadow-none"
            >
              <h3 className="mb-6 text-cyan-600 dark:text-cyan-400">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-900 dark:text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500 dark:text-zinc-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 border border-cyan-200 dark:border-cyan-800/30 rounded-2xl backdrop-blur-sm"
        >
          <h3 className="text-center mb-8">
            Visual Experience & <span className="text-cyan-600 dark:text-cyan-400">3D Animations</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-300 dark:border-cyan-500/30">
                <span className="text-2xl">🌀</span>
              </div>
              <h4 className="mb-2">3D Components</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Three.js & Spline for rotating containers, floating icons, and interactive globes
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 rounded-lg flex items-center justify-center border border-purple-300 dark:border-purple-500/30">
                <span className="text-2xl">🎥</span>
              </div>
              <h4 className="mb-2">Smooth Motion</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                GSAP + ScrollTrigger for parallax, reveals & 60FPS performance
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-lg flex items-center justify-center border border-blue-300 dark:border-blue-500/30">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="mb-2">Micro-Interactions</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                Lottie animations, ripple effects, skeleton loaders & SVG path animations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-8 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900/80 dark:to-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-2xl backdrop-blur-sm shadow-sm dark:shadow-none"
        >
          <h3 className="text-center mb-8">Complete Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.02 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-full text-zinc-700 dark:text-zinc-300 text-sm hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all cursor-default shadow-sm dark:shadow-none"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
