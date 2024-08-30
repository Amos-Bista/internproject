import React from 'react'
import Services from './Services'
import { RiPieChart2Fill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

const Content = () => {
  return (
    <main className='flex items-center justify-center'>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl">
            <div className='md:col-span-2 bg-white px-20 py-12'>
                <h1 className='text-5xl font-bold mb-4'>The Art and Science <br/> of Crafting <br/>Exceptional Designs</h1>
                <p className='text-gray-600 mb-6'>Transforming ideas into stellar designs requires a dynamic blend of creativity, technical expertise, and user-focused thinking. </p>
                <button className='bg-black text-white rounded-full py-2 px-6'>Discover</button>

                <div className='mt-10 space-y-4'>
                    <Services icon={<RiPieChart2Fill />}
                     title='Pitch Decks' description='The latest trends'/>
                    <Services icon={< FaGlobe/>}
                     title="AI Presentations" description="1000+ examples" />
                    <Services icon={<FaShoppingBasket/>}
                     title="E-commerce" description="Transforming ideas into" />
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center bg-gray-100 h-full w-full'>
                <div className='relative w-full h-full'>
                    </div>

            </div>
        </div>

    </main>
  )
}

export default Content