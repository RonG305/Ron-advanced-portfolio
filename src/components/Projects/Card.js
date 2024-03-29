import React, { useState } from 'react'


const Card = ({project}) => {

  const [showMore, setShowMore] = useState(false)


  const handleShowMore = () => {
    setShowMore(!showMore)
  }


  return (
    <div className=' bg-slate-900 rounded-md  text-sm  h-fit'>
        <img className=' rounded-md' src={project.displayImage} alt={project.projectName} />
        <div className=' p-4'>
          <div className=' flex items-center justify-between'>
            <p className=' py-4 font-bold '>{project.projectName}</p>
            <p 
            onClick={handleShowMore} 
            className=' bg-slate-700 px-3 py-1 rounded-md text-white cursor-pointer hover:bg-slate-950 duration-150 transition-all ease-out'
            >{showMore? 'close': 'show more'}</p>
          </div>
           {showMore && (
            <>
                <div className=' flex flex-wrap gap-2'>
                {project.technologies.map((technology) => (
                    <p className=' bg-sky-500 odd:bg-purple-500 w-fit px-2 py-1 rounded-md text-white hover:bg-slate-950 transition-all ease-in-out delay-100 cursor-pointer'>{technology?.name}</p>
                ))}
                </div>
    
                <div className=' bg-slate-700 rounded-md p-4 my-3'>
                  <p className=' leading-6'>{project.projectDescription}</p>
                </div>
                </>
           )}
          
          
           
            
        </div>
        
    </div>
  )
}

export default Card