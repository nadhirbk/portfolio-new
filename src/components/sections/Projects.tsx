'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface ProjectCardProps {
  project: {
    title: string
    description: string
    tags: string[]
    gradient: string
    image: string
  }
  index: number
  itemVariants: {
    hidden: { opacity: number; y: number }
    visible: { opacity: number; y: number; transition: { duration: number } }
  }
}

function ProjectCard({ project, itemVariants }: ProjectCardProps) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      style={{ y }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="group h-full bg-card border border-border hover:border-primary overflow-hidden transition-all duration-300">
        <CardHeader>
          <motion.div
            className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-4xl border border-primary/20"
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            {project.image}
          </motion.div>
          <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
          <CardDescription className="text-base">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
            <Button variant="default" size="sm" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

const projects = [
  {
    title: 'E-Commerce Premium',
    description:
      'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    gradient: 'from-purple-500 to-pink-500',
    image: '🛍️',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard moderne pour visualiser et analyser des données en temps réel',
    tags: ['React', 'Chart.js', 'TailwindCSS', 'Node.js'],
    gradient: 'from-blue-500 to-cyan-500',
    image: '📊',
  },
  {
    title: 'Social Media App',
    description: 'Application sociale avec posts, likes, commentaires et messagerie instantanée',
    tags: ['Next.js', 'Socket.io', 'MongoDB', 'AWS'],
    gradient: 'from-orange-500 to-red-500',
    image: '💬',
  },
  {
    title: 'AI Content Generator',
    description:
      "Générateur de contenu intelligent utilisant l'IA pour créer du texte et des images",
    tags: ['Next.js', 'OpenAI', 'PostgreSQL', 'Redis'],
    gradient: 'from-green-500 to-emerald-500',
    image: '🤖',
  },
  {
    title: 'Fitness Tracker',
    description: "Application de suivi fitness avec plans d'entraînement personnalisés",
    tags: ['React Native', 'Firebase', 'HealthKit', 'Charts'],
    gradient: 'from-indigo-500 to-purple-500',
    image: '💪',
  },
  {
    title: 'Crypto Portfolio',
    description: 'Tracker de portfolio crypto avec données en temps réel et alertes',
    tags: ['Vue.js', 'CoinGecko API', 'WebSocket', 'D3.js'],
    gradient: 'from-yellow-500 to-orange-500',
    image: '₿',
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Mes <span className="text-primary">projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une sélection de projets qui démontrent mon expertise et ma passion pour le
            développement
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} itemVariants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
