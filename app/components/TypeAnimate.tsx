"use client";

import React from 'react'
import {TypeAnimation} from 'react-type-animation'

const TypeAnimate = () => {
  return (
   <strong className='text-indigo-500'>
     <TypeAnimation sequence={[
            'Ankit Panghal',
            1500,
            'MERN Developer',
            1500
          ]} repeat={Infinity}/>
   </strong>
  )
}

export default TypeAnimate