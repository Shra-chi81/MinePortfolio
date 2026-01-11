import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import mycargoImg from '../styles/image/featured-image-2.jpg';
import bookmeripujaImg from '../styles/image/spritual.png';


export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'MyCargo — Sea Freight Booking Platform',
      description: 'Global container shipping & tracking platform with port search, dynamic pricing, and shipment tracking. High-performance UI with multi-container workflow support and real-time charge calculation.',
       image: mycargoImg,
       technologies: ['Angular 16+', 'TypeScript', 'RxJS', 'Angular Material', 'REST APIs'],
      github: 'https://github.com',
      demo: 'https://example.com',
      metrics: ['30% Performance Boost', 'Real-time Tracking'],
    },
    {
      title: 'BookMeriPuja — Spiritual Services Platform',
      description: 'Comprehensive platform for puja scheduling, online consultations, and destiny reading flows. Improved booking completion rate by 25% via optimized UX and enhanced mobile engagement by 20%.',
      image: bookmeripujaImg,
      technologies: ['Angular', 'Node.js', 'MongoDB', 'PrimeNG', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://example.com',
      metrics: ['25% Better Conversion', '20% Mobile Engagement'],
    },
    {
      title: 'Evento — Event Management Platform',
      description: 'Full-featured event management system with registration, ticketing, session planning & attendee dashboards. Cut event planning time by 30% using smart reusable components.',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2Mzg4NjAzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Redux', 'Node.js', 'Tailwind CSS', 'MongoDB'],
      github: 'https://github.com',
      demo: 'https://example.com',
      metrics: ['30% Time Reduction', 'Optimized State Management'],
    },
    {
      title: 'Order/User Tracking System',
      description: 'Enterprise admin dashboards with routing guards and workflow automation. Reduced production errors by 30% through comprehensive form validations and clean refactoring.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjM4ODAzNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Next.js','TypeScript', 'Node.js', 'MongoDB', 'REST APIs', 'Bootstrap', 'Guards'],
      github: 'https://github.com',
      demo: 'https://example.com',
      metrics: ['30% Fewer Errors', 'Enhanced Security'],
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">
            Featured <span className="text-cyan-500 dark:text-cyan-400">Projects</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Real-world applications across logistics, spirituality, events, and enterprise systems — 
            delivering measurable impact through modern frontend engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-all shadow-sm dark:shadow-none"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90 dark:to-zinc-900/90 z-10" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Impact Metrics Badge */}
                <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500 dark:bg-cyan-500/90 backdrop-blur-sm rounded-full text-white dark:text-zinc-950 text-xs"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-700 dark:text-zinc-400 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white dark:text-zinc-950"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
