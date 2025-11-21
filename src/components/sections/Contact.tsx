'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function Contact() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Me <span className="text-primary">contacter</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un projet en tête ? N&apos;hésitez pas à me contacter, je serais ravi d&apos;en discuter
            avec vous
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Informations de contact</h3>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-card border border-transparent hover:border-primary transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-card border border-transparent hover:border-primary transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                <p className="text-muted-foreground">+33 6 12 34 56 78</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-card border border-transparent hover:border-primary transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Localisation</h4>
                <p className="text-muted-foreground">Paris, France</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.form variants={itemVariants} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button variant="default" size="lg" className="w-full bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4 mr-2" />
                Envoyer le message
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
