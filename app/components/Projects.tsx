import React from 'react'
import {Card,CardContent,CardFooter} from '@/components/ui/card'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from '@/components/ui/carousel'
import {projectsData} from '../utils/projectsData'
import Image from 'next/image'
import { ExpressLogo } from '@/components/ui/ExpressLogo'
import StackIcon from 'tech-stack-icons'

const Projects = () => {
  return (
    <section id='projects'>
        <h2>Projects</h2>
        <Carousel className='mt-8 w-full'>
           <CarouselContent className=''>
             {
                projectsData.map((item) => (
                  <CarouselItem key={item.id}>
                    <Card className='py-2 border-2 bg-accent-foreground'>
                      <CardContent className='px-2'>
                        <Image className='rounded-md'  src={item.src} alt={item.title} width={300} height={700}/>
                      </CardContent> 
                      <CardFooter className='flex flex-col gap-4'>
                        <h3 className='text-white dark:text-neutral-700 mt-[-15px]'>{item.title}</h3>
                        <p className='text-white dark:text-neutral-700 mt-[-15px]'>{item.description}</p>
                        <ul className='flex justify-center gap-6 overflow-x-scroll w-full'>
                          {
                            item.techStack.map((item,idx) => (
                              <li className='animate-none' key={idx}>{item !== 'expressjs' ? <StackIcon className='w-8' name={item}/> : <ExpressLogo/>}</li>
                            ))
                          }
                        </ul>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))
             }
           </CarouselContent>
           <CarouselPrevious/>
           <CarouselNext/>
        </Carousel>
    </section>
  )
}

export default Projects