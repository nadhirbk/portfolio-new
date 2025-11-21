'use client'

import { InteractiveCard } from '@/components/ui/InteractiveCard'
import { motion } from 'framer-motion'
import { SiFigma, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    icon: <SiReact className="w-12 h-12" />,
    title: 'React / Next.js',
    description:
      'Frameworks modernes pour des interfaces ultra-rapides, SEO-friendly et scalables.',
    color: '#5a7aa6',
  },
  {
    icon: <SiTypescript className="w-12 h-12" />,
    title: 'TypeScript',
    description: 'Typage strict pour un code robuste, maintenable et sans surprise.',
    color: '#3178c6',
  },
  {
    icon: <SiTailwindcss className="w-12 h-12" />,
    title: 'Tailwind CSS',
    description: 'Design system moderne, responsive et personnalisable à l’infini.',
    color: '#38bdf8',
  },
  {
    icon: <SiFigma className="w-12 h-12" />,
    title: 'Figma',
    description: 'Prototypage et design UI/UX pour des interfaces élégantes et efficaces.',
    color: '#a259ff',
  },
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="py-32 px-6 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 gap-x-12 mt-8">
          {skills.map((skill) => (
            <InteractiveCard
              key={skill.title}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
