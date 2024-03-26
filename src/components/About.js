import React from 'react'

const About = () => {

  const aboutContent = {
    aboutText: {
        description: "I'm an experienced Software Engineer who constantly seeks out innovative solutions to everyday problems. To deliver high-quality software products is my aim.",

        name: "Ronald Mutia",
        dateOfBirth: "25 October 2001",
        adress: "Nairobi-Kenya",
        email: "mutiaronald138@gmail.com",
        phoneNumber: "+254 90021016"

    },

    developerImage: './images/developer1.png',

    styles: {
      bioStyle: "font-bold text-purple-500 py-5"
    }
  }
  return (
    <div  >
      <h3 className=' text-center font-extrabold md:text-5xl text-3xl py-5'>About Me</h3>
      <div className=' md:flex items-center justify-between'>
        <img src={aboutContent.developerImage}  alt='developer '/>
        <div>
          <p className=' py-4'>{aboutContent.aboutText.description}</p>
          <div className=' leading-6'>
            <p><span className={aboutContent.styles.bioStyle}>Name: </span> {aboutContent.aboutText.name}</p>
            <p><span className={aboutContent.styles.bioStyle}>Date Of Birth: </span>{aboutContent.aboutText.dateOfBirth}</p>
            <p><span className={aboutContent.styles.bioStyle}>Address: </span>{aboutContent.aboutText.adress}</p>
            <p><span className={aboutContent.styles.bioStyle}>Email: </span>{aboutContent.aboutText.email}</p>
            <p><span className={aboutContent.styles.bioStyle}>Phone Number: </span>{aboutContent.aboutText.phoneNumber}</p>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default About