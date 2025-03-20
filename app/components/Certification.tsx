'use client';
import {Timeline,TimelineContent,TimelineDot} from '@mui/lab'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Image from 'next/image';
import Link from 'next/link';

const Certification  = () => {
  return (
    <section id='certification'>
        <h2>Certification</h2>
        <Timeline  sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        marginTop : '1.5rem',
        border : '1px solid lightgrey',
        borderRadius : '10px'
      }} >
          <TimelineItem>
          <TimelineDot color='primary' >
             <Image className='rounded-full' src='/acciojob.png' alt='acciojob' width={30} height={30}/>
          </TimelineDot>
          <TimelineContent >
            <Link href='https://drive.google.com/file/d/1KiH0Na2Bw_RdtkW8_FdR3YjM7RdQhiwH/view?usp=sharing' target='_blank'><h4>Acciojob</h4></Link>
            <p className='opacity-75'>MERN Development training</p>
          </TimelineContent>
          </TimelineItem>
        </Timeline>
    </section>
  )
}

export default Certification 