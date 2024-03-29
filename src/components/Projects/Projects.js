import React from 'react'
import { projectsData } from './Data'
import Card from './Card'
import {motion} from 'framer-motion'

const Projects = () => {

    const variants = {
        hidden: { opacity: 0, y: 200},
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
      }

      
  return (
    <motion.div
     variants={variants}
     initial="hidden"
     whileInView="visible"
     id='projects'
    >
        <h3 className='text-center font-extrabold md:text-5xl text-3xl py-5 my-5'>My Projects</h3>
        <p className=' text-center my-4'>I have involved myself in research and development of various projects following industry standards to come up with a scalable and intuitive projects which can solve business problems </p>
        <div className=' md:grid grid-cols-2 gap-2 '>
            {projectsData.map((project) => (
                <Card project={project} /> 
            ))}
        </div>
      
        
    </motion.div>
  )
}

export default Projects