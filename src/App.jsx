import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import CarExperience from './components/CarExperience'
import DriveSection from './components/DriveSection'
import CarGallerySection from './components/CarGallerySection'
import ArtAssetSection from './components/ArtAssetSection'
import AboutSection from './components/AboutSection'
import ContactCtaSection from './components/ContactCtaSection'
import SiteFooter from './components/SiteFooter'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  useEffect(() => {
    const lenis = new Lenis()

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a')
      if (target && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')
        if (id === '#') return
        e.preventDefault()
        
        if (id === '#contact') {
          lenis.scrollTo(document.body.scrollHeight, { duration: 1.5 })
        } else {
          lenis.scrollTo(id, { duration: 1.5 })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
      lenis.destroy()
    }
  }, [])

  return (
    <div id="top" className="min-h-svh bg-[#050505]">
      <Navbar />
      <CarExperience />
      <DriveSection />
      <CarGallerySection />
      <ArtAssetSection />
      <AboutSection />
      <ContactCtaSection />
      <SiteFooter />
    </div>
  )
}

export default App
