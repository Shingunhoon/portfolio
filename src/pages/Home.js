import React from 'react'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'
import About from '../components/About/About'

import Footer from '../components/Footer/Footer'
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon'
import ScrollToTop from '../components/SocialIcon/ScrollToTop'
import Skills from '../components/Skills/Skills'
function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Home
