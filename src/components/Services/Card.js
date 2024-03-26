import React from 'react'

const Card = ({services}) => {
  return (
    <div className=' w-[45%] md:w-[90%] lg:w-[90%] bg-slate-900 lg:h-[350px] rounded-md p-4 flex flex-col items-center justify-center mb-4 border border-slate-800 text-center '>
        <div className=' my-4'>{services?.icon}</div>
        <h4>{services.title}</h4>
        
    </div>
  )
}

export default Card