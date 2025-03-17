import React from 'react'
import HeroSection from './components/HeroSection'
import GithubActivity from './components/GithubActivity'
import SkillsSection from './components/SkillsSection'
import Projects from './components/Projects'

const page = () => {
  return (
    <main>
      <HeroSection/>
      <GithubActivity/>
      <SkillsSection/>
      <Projects/>
    </main>
  )
}

export default page