import { motion } from 'motion/react';

export function FloatingElements() {
  const shapes = [
    { size: 100, color: 'bg-cyan-500/10 dark:bg-cyan-500/10', delay: 0, x: '10%', y: '20%' },
    { size: 150, color: 'bg-blue-500/10 dark:bg-blue-500/10', delay: 1, x: '80%', y: '40%' },
    { size: 80, color: 'bg-purple-500/10 dark:bg-purple-500/10', delay: 2, x: '70%', y: '70%' },
    { size: 120, color: 'bg-pink-500/10 dark:bg-pink-500/10', delay: 1.5, x: '15%', y: '80%' },
    { size: 90, color: 'bg-indigo-500/10 dark:bg-indigo-500/10', delay: 0.5, x: '90%', y: '15%' },
  ];

  return (
    <>
     <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${shape.color} blur-3xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Infinity,
            delay: shape.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
    </>
  );
}