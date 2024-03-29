import React from 'react'
import {motion} from 'framer-motion'

const Freelance = () => {

    const variants = {
        hidden: { opacity: 0, y: 200},
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
      }

  return (
    <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        id='freelance'
        className='h-[60vh] freelance flex flex-col items-center justify-center px-5 '>
        <h3 className='text-center font-extrabold md:text-5xl text-3xl py-5 my-5'>Am available for  <span className=' text-purple-500'>freelancing</span> anytime</h3>
        <p className=' text-center'>Reach out to me through my social media handles or my phone number and lets make your dream come true</p>
        <div className=' flex items-center justify-center'>
            <button className=' bg-sky-600 px-5 py-2 rounded-md my-4 ' >Hire Me</button>
        </div>
        
    </motion.div>
  )
}

export default Freelance