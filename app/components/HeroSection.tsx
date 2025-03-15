import {Avatar, AvatarImage } from '@/components/ui/avatar'
import { Linkedin,Github, File } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import TypeAnimate from './TypeAnimate'


const HeroSection = () => {
  return (
    <section className='flex flex-col p-4 mt-12 items-center gap-12' id='hero'>
        <div className='flex flex-col gap-4 items-center order-2'>
          <p className='text-4xl'>Hi! I am  <TypeAnimate/></p>
          <p>Developing user friendly and engaging web experiences.</p>
          <div className='flex gap-8 items-center'>
            <Link href='https://www.linkedin.com/in/ankit-panghal-dev' target='_blank'><button className='btn linkedin-btn'><Linkedin/></button></Link>
            <Link href='https://github.com/ankit-panghal' target='_blank' ><button className='btn github-btn'><Github/></button></Link>
            <Link href='https://drive.google.com/file/d/1euafFBL1L31z1rPyi71zaBdZEHWTuQxU/view?usp=sharing' target='_blank' ><button className='btn resume-btn'><File/></button></Link> 
          </div>
        </div>
        <Avatar className='w-36 h-36 border-4 border-zinc-400 order-1'>
            <AvatarImage src='/my_pic.png' alt='my-photo'/>
        </Avatar>
    </section>
  )
}

export default HeroSection