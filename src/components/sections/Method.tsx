'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { FaCloud, FaGitAlt, FaRegComments, FaRocket } from 'react-icons/fa'

const steps = [
  {
    icon: <FaCloud className="w-8 h-8 text-primary" />,
    title: 'Déploiement instantané',
    desc: 'Le site est déployé sur Vercel dès le début, accès en temps réel pour le client.',
  },
  {
    icon: <FaGitAlt className="w-8 h-8 text-primary" />,
    title: 'Modifications instantanées',
    desc: 'Chaque commit/push = mise à jour automatique du site, le client voit tout en direct.',
  },
  {
    icon: <FaRegComments className="w-8 h-8 text-primary" />,
    title: 'Feedbacks fréquents',
    desc: 'Échanges réguliers, ajustements rapides selon les retours du client.',
  },
  {
    icon: <FaRocket className="w-8 h-8 text-primary" />,
    title: 'Livraison rapide',
    desc: 'Projet final livré en un temps record, sans surprises.',
  },
]

export function Method() {
  return (
    <section id="method" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ma <span className="text-primary">méthode</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un process moderne, rapide et transparent pour garantir la réussite de chaque projet.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(step.icon, { className: 'w-7 h-7 text-white' })}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground text-center">{step.title}</h3>
              <p className="text-muted-foreground text-center text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
