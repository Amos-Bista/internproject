import React from 'react'
import Services from './Services'
import { RiPieChart2Fill } from "react-icons/ri";
import { FaGlobe, FaStar } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import image from '../assets/image.png';
import image2 from '../assets/image2.png'
import Testomonials from './Testomonials';



const Content = () => {
    return (
        <main className='flex items-center justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl">
                <div className='md:col-span-2 bg-white px-20 py-12'>
                    <div className='relative text-left'>
                    <h1 className='text-5xl font-bold mb-4 leading-tight'>The Art and Science <br />
                    <span className='relative px-32'>of Crafting<span className='absolute -left-18 top-4 flex'>
                        <img src={image2} className='w-10 h-10 rounded-full'/>
                        <img src={image2} className='w-10 h-10 rounded-full '/>
                        <img src={image2} className='w-10 h-10 rounded-full'/>
                        </span>
                        </span> <br />Exceptional Designs</h1>
                    </div>
                    <p className='text-gray-600 mb-6 text-left'>Transforming ideas into stellar designs requires a dynamic blend of creativity, technical expertise, and user-focused thinking. </p>
                    <div className='text-left'>
                    <button className='bg-black text-white rounded-full py-2 px-6'>Discover</button>
                    </div>

                    <div className='mt-10 space-y-4 text-left'>
                        <Services icon={<RiPieChart2Fill />}
                            title='Pitch Decks' description='The latest trends' />
                        <Services icon={< FaGlobe />}
                            title="AI Presentations" description="1000+ examples" />
                        <Services icon={<FaShoppingBasket />}
                            title="E-commerce" description="Transforming ideas into" />
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center bg-gray-100 h-full w-full'>
                    <div className='relative w-full h-full'>
                        <img src={image} className='px-8 py-6' />
                    </div>
                    <div className="absolute bottom-20 right-80 bg-gray-950 text-white p-2 text-left  rounded-lg">
                        <h3 className='mb-2 mt-4 text-center'>Testimonials</h3>
                        <Testomonials title="UX decisions" score="90+" color="bg-blue-300" percentage='90%' />
                        <Testomonials title="Business projects" score="60+" color='bg-yellow-200' percentage='60%' />
                        <Testomonials title="Innovative solutions" score="30+" color='bg-gray-200' percentage='30%' />
                    </div>

                </div>
            </div>

        </main>
    )
}

export default Content