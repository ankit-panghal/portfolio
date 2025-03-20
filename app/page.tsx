import React from 'react'
import HeroSection from './components/HeroSection'
import GithubActivity from './components/GithubActivity'
import SkillsSection from './components/SkillsSection'
import Projects from './components/Projects'
import Certification from './components/Certification'
import Contact from './components/Contact'

const page = () => {
  return (
    <main>
      <HeroSection/>
      <GithubActivity/>
      <SkillsSection/>
      <Projects/>
      <Certification/>
      <Contact/>
    </main>
  )
}

export default page