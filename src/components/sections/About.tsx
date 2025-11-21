'use client'

import { motion } from 'framer-motion'
import { Code2, Rocket, Sparkles } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-white dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            À propos de <span className="text-primary">moi</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Passionné par le web et les technologies modernes, je concrétise vos projets avec
            l&apos;aide d&apos;outils innovants et un design soigné
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Code Clean</h3>
            <p className="text-muted-foreground">
              J&apos;écris du code propre, maintenable et optimisé en suivant les meilleures
              pratiques de l&apos;industrie
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Performance</h3>
            <p className="text-muted-foreground">
              Des applications ultra-rapides et optimisées pour offrir la meilleure expérience
              utilisateur possible
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Design Moderne</h3>
            <p className="text-muted-foreground">
              Des interfaces élégantes et intuitives qui captivent et engagent les utilisateurs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
