import React from 'react'
import Card from './Card'
import { ResumeData } from './Data'
import {motion} from 'framer-motion'

const Resume = () => {


  const variants = {
    hidden: { opacity: 0, y: 200},
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
  }


  return (
    <motion.div
     variants={variants}
     initial="hidden"
     whileInView="visible"
    id='resume'
    className=' my-10 h-fit'>
      <p className='text-center font-extrabold md:text-5xl text-3xl py-5'>Resume</p>
      <div >
        <p className=' text-center'>A versatile, hardworking individual; driven to meet or exceed a company's expectations to deliver high-quality software products. Experienced in Python & JavaScript.</p>
      </div>

      <div className='  md:grid grid-cols-2'>
        {ResumeData.map((resumedata) => (
             <Card resumedata={resumedata} />
        ))}
       
      </div>
    </motion.div>
  )
}

export default Resume