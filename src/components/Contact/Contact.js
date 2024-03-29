import React from 'react'
import { contactData } from './Data'
import ContactForm from './ContactForm'
import {motion} from 'framer-motion'




const Contact = () => {

    const variants = {
        hidden: { opacity: 0, y: 200},
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 }}
      }

  return (
    <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className=' lg:h-[100vh]  h-fit my-5'
        id='contact'
     >
        <div className=' text-center'>
            <h3 className='text-center font-extrabold md:text-5xl text-3xl py-5 my-5'>Contact</h3>
            <p >Reach me out at your conveniences, I am available to use my skills to give the best out of me. Let's collaborate and make something great happen</p>
        </div>
        <div className=' flex items-center justify-between flex-wrap my-4 '>
            {contactData.map((contact) => (
            <div>
                <div className=' bg-slate-700 w-fit p-4 rounded-full my-4'>{contact.icon}</div>
                <p className=' font-bold py-2'>{contact.name.toUpperCase()}</p>

                {contact.data === 'linked in'? <a target='_blank' rel="noreferrer"  href='https://www.linkedin.com/in/ronald-mutia-14019525a/' className=' px-3 py-1 bg-sky-500 rounded-sm w-fit hover:bg-slate-700'>linked in</a> : <p>{contact.data}</p> } 
            </div>
            ))}

        </div> 
        <div>

        </div>


        {/* Contact Form */}
        <div className=' lg:flex items-center justify-between'>
            <img src='./images/developer1.png' alt='developer'/>
            <ContactForm />
        </div>
       
    </motion.div>
  )
}

export default Contact