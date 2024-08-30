import React from 'react'

const Testomonials = ({title, score, color, percentage}) => {
  return (
    <div className='px-8 space-y-2'>
        <p className='text-sm'>{title}</p>
        <div className='flex space-x-4'>
        <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
          <div
            className={`h-2 rounded-full ${color}`}
            style={{ width: percentage }}
          ></div>
        </div>
        <p className='text-sm'>{score}</p>
        </div>
    </div>
  )
}

export default Testomonials