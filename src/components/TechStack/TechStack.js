import React from 'react'
import {motion} from 'framer-motion'

const TechStack = () => {

    const variants = {
        hidden: { opacity: 0, y: 200},
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
      }
    


    const technologies = [
        {
            logo: './images/js-logo.png',
            name: "Javascript"
        },

        {
            logo: './images/reactjs-logo.png',
            name: "React Js"
        },

        {
            logo: './images/t-css.jpeg',
            name: "Tailwind CSS"
        },

        {
            logo: './images/python-logo.jpeg',
            name: 'Python'
        },

        {
            logo: './images/django-logo.png',
            name: 'Django'
        },

        {
            logo: './images/rest-api-logo.jpeg',
            name: 'Rest API'
        },

        {
            logo: './images/database-logo.png',
            name: 'Databases'
        },

      
       

    ]

   
    
  return (
    <motion.div

    variants={variants}
    initial="hidden"
    whileInView="visible"
    

    id='tech-skills'
    className='  lg:h-[100vh] py-5 flex flex-col items-center justify-center'>
        <div className=' flex flex-col items-center justify-center'>
            <h3 className=' text-xl font-bold text-purple-500'>Tech Skills</h3>
            <p className=' font-extrabold  text-3xl text-center'>Technologies am expertised in and have been working with</p>
        </div>
        <div className=' flex gap-4 items-center justify-center flex-wrap my-5'>
            {technologies.map((technology) => (
                <div className=' border border-gray-700 rounded-md px-3 py-1 flex items-center cursor-pointer gap-3 w-fit hover:bg-purple-500  transition-all delay-150 hover:translate-x-1 '>
                    <img src={technology.logo} className=' rounded-md' style={{width: "40px"}} alt='logo' />
                    
                    <p>{technology.name}</p>
                    
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default TechStack