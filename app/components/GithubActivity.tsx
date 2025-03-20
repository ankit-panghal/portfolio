'use client';
import GitHubCalendar from "react-github-calendar"
import { useTheme } from "next-themes";
import {RadioGroup,RadioGroupItem} from '@/components/ui/radio-group'
import { useEffect, useState } from "react";
const minimalTheme = {
  light: ['hsl(0, 0%, 95%)', '#6F00FF'],
  dark : ['hsl(0, 0%, 0%)', '#6F00FF']
}
const GithubActivity = () => {
  const {theme} = useTheme();
  const [mounted,setMounted] = useState(false);
  const [year,setYear] = useState('2025')

  
  function handleYear(value: string){
     setYear(value)
  }

  useEffect(() => {
    setMounted(true)
  },[])
  return (
    <section className="gap-6" id="activity">
      <h2>Github Activity</h2>
     {mounted && <GitHubCalendar  blockSize={20} year={parseInt(year)} username='ankit-panghal' colorScheme={theme === 'light' ? 'dark' : 'light'} theme={minimalTheme}/> }
      <RadioGroup className="flex gap-12" value={year} onValueChange={handleYear}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="2025" id="2025"/>
          <label htmlFor="2025">2025</label>
        </div>
      </RadioGroup>
    </section>
  )
}

export default GithubActivity