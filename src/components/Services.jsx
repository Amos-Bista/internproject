import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Services = ({icon, title, description}) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 pb-4 w-6/12">
        <div className='flex items-center space-x-4'>
          <span>{icon}</span>
          <div>
        <h3>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
        </div>
        </div>
        <span>< FaArrowRightLong/></span>

    </div>
  )
}

export default Services