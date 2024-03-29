import React from 'react'

const Card = ({resumedata}) => {
  return (
    
    <div className=' bg-slate-900  m-4 p-4 rounded-md text-gray-300  h-fit'>
        <h4 className=' font-bold text-2xl text-purple-500 my-4'>{resumedata.title}</h4>
        <p className=' uppercase text-sky-500 my-4'>{resumedata.ref}</p>

        <p>{resumedata.description}</p>
    </div>
  )
}

export default Card