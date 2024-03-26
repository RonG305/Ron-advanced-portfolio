import React from 'react'

import {} from 'react-icons/fc'

const Hero = () => {



  const heroContent = {

    styles : {
      constainerStyles: " h-full   flex flex-col items-center py-10",
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
    <div className={heroContent.styles.constainerStyles}>
      <p className={heroContent.styles.headerStlyles}>
        {heroContent.textContent.headerText}
      </p>
      <p className={heroContent.styles.nameTextStyle}>{heroContent.textContent.nameText}</p>
      <h1 className={heroContent.styles.careerStyle}> A <span className=' text-sky-600'>{heroContent.textContent.developerText}</span> & </h1>
       <p className={heroContent.styles.careerStyle}>{heroContent.textContent.engineerText}</p>   

       <img src={heroContent.heroImage} alt='developer ' />

       <div className=' flex gap-4'>
          <p className={heroContent.styles.socialStyle}>Linked In</p>
          <p className={heroContent.styles.socialStyle}>instagram</p>
          <p className={heroContent.styles.socialStyle}>twitter</p>
          
       </div>
    </div>
  )
}

export default Hero