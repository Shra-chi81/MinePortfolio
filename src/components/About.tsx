import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Palette, Zap, Users } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices and design patterns.',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces with attention to detail.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional products.',
    },
  ];

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            About <span className="text-cyan-500 dark:text-cyan-400">Me</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            I’m a Frontend Engineer who loves turning complex product ideas into fast, intuitive, and visually sharp web experiences. I specialize in Angular, React, and TypeScript, building apps that handle real-time data, scalable booking systems, and enterprise dashboards without compromising speed or usability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl backdrop-blur-sm hover:border-cyan-500/50 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <feature.icon className="w-12 h-12 text-cyan-500 dark:text-cyan-400 mb-4" />
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900/80 dark:to-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-2xl backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-cyan-500 dark:text-cyan-400 mb-2">3+</div>
              <p className="text-zinc-600 dark:text-zinc-400">Years Experience</p>
            </div>
            <div>
              <div className="text-cyan-500 dark:text-cyan-400 mb-2">5+</div>
              <p className="text-zinc-600 dark:text-zinc-400">Projects Delivered</p>
            </div>
            <div>
              <div className="text-cyan-500 dark:text-cyan-400 mb-2">30%</div>
              <p className="text-zinc-600 dark:text-zinc-400">Avg Performance Gain</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
