import { CursorGlow } from '@/components/CursorGlow'
import { Navbar } from '@/components/Navbar'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Method } from '@/components/sections/Method'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-black">
        <Hero />
        <About />
        <Method />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
