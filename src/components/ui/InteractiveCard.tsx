import { ReactNode } from 'react'

export type InteractiveCardProps = {
  icon: ReactNode
  title: string
  description: string
  color: string // ex: "#17726D" ou "bg-blue-600"
}

export function InteractiveCard({ icon, title, description, color }: InteractiveCardProps) {
  return (
    <div
      className="group relative h-80 min-w-[220px] md:min-w-[260px] w-full rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 shadow-lg hover:shadow-2xl"
      style={{ backgroundColor: `${color}10` }} // overlay pale
    >
      {/* Couche 1 : icône + titre */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transition-transform duration-500 group-hover:-translate-y-full">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundColor: `${color}20` }}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-center" style={{ color }}>
          {title}
        </h3>
      </div>
      {/* Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center p-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0"
        style={{ backgroundColor: color }}
      >
        <div className="text-center">
          <div className="mb-4 text-white">{icon}</div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-base text-white/90">{description}</p>
        </div>
      </div>
    </div>
  )
}
