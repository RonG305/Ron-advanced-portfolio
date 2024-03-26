import React from 'react'
import Card from './Card'
import { ResumeData } from './Data'

const Resume = () => {
  return (
    <div className=' my-10'>
      <p className='text-center font-extrabold md:text-5xl text-3xl py-5'>Resume</p>
      <div >
        <p className=' text-center'>A versatile, hardworking individual; driven to meet or exceed a company's expectations to deliver high-quality software products. Experienced in Python & JavaScript.</p>
      </div>

      <div className='  md:grid grid-cols-2'>
        {ResumeData.map((resumedata) => (
             <Card resumedata={resumedata} />
        ))}
       
      </div>
    </div>
  )
}

export default Resume