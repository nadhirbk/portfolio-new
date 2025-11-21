import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const satoshi = localFont({
  src: [
    {
      path: '../../public/fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: 'Portfolio | Développeur Web',
  description:
    "Portfolio d'un développeur web passionné par la création de sites modernes et performants",
  keywords: ['développeur', 'web', 'react', 'next.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Votre Nom' }],
  openGraph: {
    title: 'Portfolio | Développeur Web',
    description: 'Découvrez mes projets et compétences',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${satoshi.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
