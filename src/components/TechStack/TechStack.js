import React from 'react'

const TechStack = () => {
    


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
    <div className='  lg:h-[50vh] py-5 '>
        <div className=' flex flex-col items-center justify-center'>
            <h3 className=' text-xl font-bold text-purple-500'>Technologies</h3>
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
    </div>
  )
}

export default TechStack