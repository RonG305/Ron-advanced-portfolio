import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {

  const textVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
  };

  const imageVariants = {
    hidden: { opacity: 0 , y: -100},
    
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 }, scale: [1, 2, 2, 1, 1]}
  };


  return (
    <div className=' md:h-[80vh] md:flex items-center justify-between'>
        <motion.div
          variants={textVariants}
          initial='hidden'
          animate='visible'
        >
          <p className=' uppercase text-orange-600 font-extralight my-3'>welcome to my world</p>
          <h5>Hi,  Am Ronald Mutia</h5>
          <h3 className=' font-extrabold text-orange-600 text-4xl'>A Software Engineer / Software Developer </h3>

          <p className=' my-3 md: md:w-3/4 text-slate-500'>As a full stack developer, I specialize in crafting end-to-end solutions, seamlessly integrating backend logic with intuitive frontend interfaces to deliver robust and user-centric software experiences.</p>

          <div>
            <p className=' font-bold text-orange-600'>FIND ME IN </p>
            <div>
              {/* Icons */}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial='hidden'
          animate='visible'
        >
          <img src='/Hero.png' />
        </motion.div>
    </div>
  )
}

export default Hero