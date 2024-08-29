import React from 'react'
import Services from './Services'
import { RiPieChart2Fill } from "react-icons/ri";

const Content = () => {
  return (
    <main className='flex items-center justify-center p-8'>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            <div className='md:col-span-2 bg-white p-8'>
                <h1 className='text-5xl font-bold mb-4'>The Art and Science of Crafting Exceptional Designs</h1>
                <p className='text-gray-600 mb-6'>Transforming ideas into stellar designs requires a dynamic blend of creativity, technical expertise, and user-focused thinking. </p>
                <button className='bg-black text-white rounded-full py-2 px-6'>Discover</button>

                {/* <div className='space-y-4'>
                    <div className='flex items-center'>
                    <RiPieChart2Fill />
                    <div>
                        <h3 className='px-4 mt-6'>Pitch Decks</h3>
                        <p className='text-gray-500 text-sm mr-2'>The latest trends</p>
                    </div> 
                       
                    </div>

                </div> */}
                <div className='mt-12 space-y-6'>
                    <Services title='Pitch Decks' description='The latest trends'/>
                    <Services title="AI Presentations" description="1000+ examples" />
                    <Services title="E-commerce" description="Transforming ideas into steller designs" />
                </div>

            </div>
        </div>
        


    </main>
  )
}

export default Content