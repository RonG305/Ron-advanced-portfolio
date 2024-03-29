import React from 'react'
import {motion} from 'framer-motion'

const Hero = () => {


  const variants = {
    hidden: { opacity: 0, y: -200},
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
  }



  const heroContent = {

    styles : {
      constainerStyles: " md:h-[100vh]   flex flex-col items-center py-20",
      headerStlyles: "uppercase font-medium md:text-xl py-5",
      careerStyle: "md:text-6xl text-4xl font-extrabold my-3",
      nameTextStyle: "font-medium text-2xl text-purple-500",
      socialStyle: "rounded-md px-3 py-1 border border-gray-500 hover:bg-purple-500 transition-all delay-300 cursor-pointer"
    },

    textContent: {
      headerText: "Crafting Digital Solutions, One Line of Code at a Time",
      nameText: "Hello, Ronald Mutia here! 😂 ",
      developerText: "Full-Stack web Developer",
      engineerText: "Software engineer"
    },



    heroImage: './images/developer.png'
 
  }

 


  return (
    <motion.div

     variants={variants}
     initial="hidden"
     whileInView="visible"
    id='hero'
    className={heroContent.styles.constainerStyles}>
      <p className={heroContent.styles.headerStlyles}>
        {heroContent.textContent.headerText}
      </p>
      <p className={heroContent.styles.nameTextStyle}>{heroContent.textContent.nameText}</p>
      <h1 className={heroContent.styles.careerStyle}> A <span className=' text-sky-600'>{heroContent.textContent.developerText}</span> & </h1>
       <p className={heroContent.styles.careerStyle}>{heroContent.textContent.engineerText}</p>   

       <img src={heroContent.heroImage} alt='developer ' />

       <div className=' flex gap-4'>
          <p  className={heroContent.styles.socialStyle}><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/ronald-mutia-14019525a/'>Linked In</a></p>
          <p className={heroContent.styles.socialStyle}><a  target='_blank' rel="noreferrer" href='https://www.instagram.com/rongmutia/'>instagram</a></p>
          <p  className={heroContent.styles.socialStyle}><a  target='_blank' rel="noreferrer" blank="true" href='https://twitter.com/ronGcodewaves'>twitter</a></p>
          
       </div>
    </motion.div>
  )
}

export default Hero