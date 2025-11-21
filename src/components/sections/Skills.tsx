'use client'

import { motion } from 'framer-motion'
import { SiFigma, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const frontendSkills = [
  { name: 'React/Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Framer Motion', level: 85 },
  { name: 'Figma', level: 85 },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-white dark:bg-black">
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Mes <span className="text-primary">skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des applications exceptionnelles
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="p-10 rounded-2xl bg-card border border-border shadow-xl flex flex-col items-center"
        >
          {/* Stack d'icônes principales */}
          <div className="flex gap-6 mb-8">
            <SiReact className="w-10 h-10 text-primary drop-shadow-[0_0_8px_#5a7aa6] animate-spin-slow" />
            <SiNextdotjs className="w-10 h-10 text-primary/80" />
            <SiTypescript className="w-10 h-10 text-primary/80" />
            <SiTailwindcss className="w-10 h-10 text-primary/80" />
            <SiFigma className="w-10 h-10 text-primary/80" />
          </div>
          <div className="w-full space-y-6">
            {frontendSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden border border-border">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="h-full bg-primary rounded-full shadow-md"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
