import React from 'react'
import Card from './Card'
import { servicesData } from './Data'
import {motion} from 'framer-motion'

const Services = () => {

  const variants = {
    hidden: { opacity: 0, y: 200},
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
  }


  return (
    <motion.div
     variants={variants}
     initial="hidden"
     whileInView="visible"
     id='services'
    >
      <h3 className='text-center font-extrabold md:text-5xl text-3xl py-5'>Services</h3>
      <p className=' text-center'>I offer diverse and high quality services when it comes to software engineering and development</p>
      <div className='md:grid flex flex-wrap items-center justify-center  md:grid-cols-3 gap-3 my-5'>
        {servicesData.map((services) => (
            <Card services={services} />
        ))}
      </div>
      
      <div>
       
      </div>
    </motion.div>
  )
}

export default Services