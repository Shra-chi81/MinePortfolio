import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center z-10"
      >
         <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-white-600 dark:text-white-400 text-xl">
           Shrachi Saini
          </span>
        </motion.div>
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-600 dark:text-cyan-400 text-sm">
            Frontend Developer • Angular  |  React |  NextJs |  TypeScript |  Javascript
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="mb-6">
          Building Clean, Scalable
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-400">
            Immersive Web Experiences
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
          3+ years of hands-on experience across logistics, e-commerce, spirituality, and event-tech. 
          I turn complex use-cases into smooth, intuitive digital experiences with high-performance UI 
          engineering, modern 3D visuals & animations — fast, accessible, and aesthetically powerful.
        </motion.p>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white dark:text-zinc-950"
          >
            View Projects
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://github.com/Shra-chi81"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="https://linkedin.com/in/shrachisaini5518"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            href="mailto:shrachisaini@gmail.com"
            className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />
        </motion.div>
      </motion.div>

      {/* 3D Floating Code Blocks */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30"
        style={{ transform: 'perspective(1000px) rotateX(15deg) rotateY(-15deg)' }}
        animate={{
          y: [0, -20, 0],
          rotateX: [15, 20, 15],
          rotateY: [-15, -20, -15],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30"
        style={{ transform: 'perspective(1000px) rotateX(-15deg) rotateY(15deg)' }}
        animate={{
          y: [0, 20, 0],
          rotateX: [-15, -20, -15],
          rotateY: [15, 20, 15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg backdrop-blur-sm border border-blue-500/30"
        style={{ transform: 'perspective(1000px) rotateX(20deg) rotateY(20deg)' }}
        animate={{
          y: [0, -15, 0],
          rotateX: [20, 25, 20],
          rotateY: [20, 25, 20],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </section>
    </>
  );
}
