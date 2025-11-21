'use client'

import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Code, Github, Linkedin, Mail, Palette, Sparkles, Star, Zap } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  return (
    <>
      {/* Extra animated Zap icons for visual balance - position final */}
      <motion.div
        className="absolute top-24 left-48 w-24 h-24 opacity-80 drop-shadow-[0_0_24px_#5a7aa6] z-10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Zap className="w-full h-full text-primary" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-1/4 w-20 h-20 opacity-70 drop-shadow-[0_0_20px_#5a7aa6] z-10"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Zap className="w-full h-full text-primary" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-10 w-16 h-16 opacity-60 drop-shadow-[0_0_16px_#5a7aa6] z-10"
        animate={{
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Zap className="w-full h-full text-primary" />
      </motion.div>
      <section
        id="hero"
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        {/* Simple background with parallax */}
        <motion.div style={{ y }} className="absolute inset-0 bg-background" />

        {/* Floating geometric shapes */}
        {/* <motion.div
          className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        /> */}
        {/* Animated icons left side */}
        <motion.div
          className="absolute top-32 left-8 w-16 h-16 opacity-30"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Palette className="w-full h-full text-primary" />
        </motion.div>
        <motion.div
          className="absolute bottom-24 left-16 w-12 h-12 opacity-30"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Star className="w-full h-full text-primary" />
        </motion.div>
        {/* <motion.div
          className="absolute bottom-32 right-20 w-16 h-16 border-2 border-primary/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        /> */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12"
          animate={{
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-full h-full text-primary" />
        </motion.div>

        {/* New animated icons */}
        <motion.div
          className="absolute top-24 right-1/3 w-14 h-14"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Code className="w-full h-full text-primary" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/4 w-12 h-12"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Zap className="w-full h-full text-primary" />
        </motion.div>

        <motion.div
          className="absolute top-1/4 right-20 w-11 h-11"
          animate={{
            rotate: [0, -360],
            y: [0, 25, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Palette className="w-full h-full text-primary" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-10 h-10"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Star className="w-full h-full text-primary" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 left-1/3 w-13 h-13"
          animate={{
            x: [0, 20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Code className="w-full h-full text-primary" />
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/3 w-11 h-11"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles className="w-full h-full text-primary" />
        </motion.div>

        {/* Subtle animated orbs */}
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 dark:bg-primary/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div style={{ scale, opacity }} className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 text-center md:text-left max-w-6xl mx-auto">
            {/* Photo de profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative shrink-0"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse" />
                <Image
                  src="/profile.jpg"
                  alt="Nadhir"
                  width={320}
                  height={320}
                  className="relative w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-2xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Contenu texte */}
            <div className="flex flex-col items-center md:items-start">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 50 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight"
              >
                Hello, moi c&apos;est
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-primary"
                >
                  Nadhir
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl"
              >
                Développeur web passionné, je transforme vos idées en sites modernes et performants
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-wrap gap-4 justify-center mb-12"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="default" size="xl" className="bg-primary hover:bg-primary/90">
                    Voir mes projets
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="xl">
                    Me contacter
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex gap-4"
              >
                {[
                  { href: 'https://github.com', icon: Github },
                  { href: 'https://linkedin.com', icon: Linkedin },
                  { href: 'mailto:contact@example.com', icon: Mail },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all group"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
