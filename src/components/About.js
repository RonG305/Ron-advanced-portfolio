import React, { useState } from 'react'

import {motion} from 'framer-motion'

const About = () => {

  const [toggleImage, setTogleImage] = useState(false)

  const handleToggleImage = () => {
    setTimeout(() => {
      setTogleImage(!toggleImage)
    }, 500);
   
  }

  const variants = {
    hidden: { opacity: 0, y: 200},
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
  }



  const aboutContent = {
    aboutText: {
        description: "I'm an passionate  Software Engineer who constantly seeks out innovative solutions to everyday problems. To deliver the best out of me. I really love collaborating with team members to brainstorm ideas and come up with the best solution in every aspect. I have good communication skills which enables me to be a good team player . I am also a person who likes listening more than talking to get more knowledge which helps me keep leraning and learning every day",

        name: "Ronald Mutia",
        dateOfBirth: "25 October 2001",
        adress: "Nairobi-Kenya",
        email: "mutiaronald138@gmail.com",
        phoneNumber: "+254 90021016"

    },

    developerImage: './images/developer1.png',
    developerImage2: './images/Ron.jpeg',

    styles: {
      bioStyle: "font-bold text-purple-500 py-5"
    }
  }
  return (
    <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    id='about'

      className=' md:h-[100vh] mb-5 h-fit '
    >
      <h3 className=' text-center font-extrabold md:text-5xl text-3xl py-5'>About Me</h3>

      <p className=' text-center my-3'>Want to see me ? click 
        <span onClick={handleToggleImage} className=' px-3 py-1 rounded-md  text-white bg-sky-500 cursor-pointer ml-2'>{toggleImage? 'close': 'see photo'}</span>
      </p>

      <div className=' md:flex items-center gap-5 justify-between'>
        <img src={toggleImage? aboutContent.developerImage2 : aboutContent.developerImage} className='md:h-[400px] lg:h-[600px]  rounded-md '  alt='developer '/>
        <div>

        <div className=' leading-6'>
            <p><span className={aboutContent.styles.bioStyle}>Name: </span> {aboutContent.aboutText.name}</p>
            <p><span className={aboutContent.styles.bioStyle}>Date Of Birth: </span>{aboutContent.aboutText.dateOfBirth}</p>
            <p><span className={aboutContent.styles.bioStyle}>Address: </span>{aboutContent.aboutText.adress}</p>
            <p><span className={aboutContent.styles.bioStyle}>Email: </span>{aboutContent.aboutText.email}</p>
            <p><span className={aboutContent.styles.bioStyle}>Phone Number: </span>{aboutContent.aboutText.phoneNumber}</p>
          </div>



          <p className=' py-4'>{aboutContent.aboutText.description}</p>
         

        </div>
      </div>
      
    </motion.div>
  )
}

export default About