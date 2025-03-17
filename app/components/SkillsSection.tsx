import StackIcons from 'tech-stack-icons'
import techStackData from '../utils/techStackData'
import {ExpressLogo} from '@/components/ui/ExpressLogo'
const SkillsSection = () => {
  return (
    <section id="skills">
        <h2>Skills</h2>
        <ul className='grid grid-cols-3 items-center gap-8 mt-12'>
           {
             techStackData.map((item,idx) => (
              <li key={idx}>{item !== 'expressjs' ? <StackIcons name={item}/> : <ExpressLogo/>}</li>
             ))
           }
        </ul>
        
    </section>
  )
}

export default SkillsSection