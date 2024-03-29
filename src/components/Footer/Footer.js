import React from 'react'


import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FaArrowAltCircleRight } from 'react-icons/fa';
import {HashLink as Link } from 'react-router-hash-link';

const Footer = () => {

    const footerheader = ' font-bold text-2xl my-3 text-sky-500'

  return (
    <div className=' h-fit lg:h-[60vh] md:grid md:grid-cols-4 grid grid-cols-2 gap-4 py-20 leading-7 shadow-slate-900 shadow-md p-4'>
        <div>
            <h3 className={footerheader}>About</h3>
            <p>Lets Dive into the game of exploring Technology and building products for customers</p>
        </div>

        <div>
            <h3 className={footerheader}>Links</h3>
            <Link smooth to='#hero' className=' flex gap-2 items-center '><FaArrowAltCircleRight />Home</Link>
            <Link smooth to="#about" className=' flex gap-2 items-center '><FaArrowAltCircleRight />About</Link>
            <Link smooth to="#resume" className=' flex gap-2 items-center '><FaArrowAltCircleRight />Resume</Link>
            <Link smooth to="#services" className=' flex gap-2 items-center '><FaArrowAltCircleRight />services</Link>
            <Link smooth to="#projects" className=' flex gap-2 items-center '><FaArrowAltCircleRight />projects</Link>
            <Link smooth to="#contact" className=' flex gap-2 items-center '><FaArrowAltCircleRight />contact</Link>
        </div>

        <div>
            <h3 className={footerheader}>Services</h3>
            <p className=' flex gap-2 items-center '><FaArrowAltCircleRight />software design </p>
            <p className=' flex gap-2 items-center '><FaArrowAltCircleRight />software development</p>
            <p className=' flex gap-2 items-center '><FaArrowAltCircleRight />Web development</p>
            <p className=' flex gap-2 items-center '><FaArrowAltCircleRight />Mobile app development</p>
            <p className=' flex gap-2 items-center '><FaArrowAltCircleRight />software testing</p>
            <p className=' flex gap-2 items-center '><FaArrowAltCircleRight />Database Design</p>
        </div>

        <div>
            <h3 className={footerheader}>Have questions to ask?</h3>
            <p className=' flex gap-2'><SlLocationPin size={20} style={{color: '#3b82f6'}} />0100 Nairobi-Kenya</p>
            <p className=' flex gap-2'><FaPhone size={20} style={{color: '#3b82f6'}}/>+254 790 021 016</p>
            <p className=' flex gap-2'><IoMdMailUnread size={20} style={{color: '#3b82f6'}}/>mutiaronald138@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer