import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Stack } from './sections/Stack'

export function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Footer />
    </main>
  )
}
