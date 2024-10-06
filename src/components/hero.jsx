import React from 'react'
import { ThumbsUp } from 'lucide-react'
import right from  '../assets/icons/right.svg'
import RentalForm from './RentalForm'

const Hero = () => {
  return (
    <div className='hero max-w-screen min-h-screen'>
      {/* hersection */}
      <section className="flex  lg:flex-row flex-col justify-center items-center xl:gap-10 mt-10 ">
        <div className=" flex-1  lg:w-1/2">
        <p className='bg-[#2d2d2d] mb-3  p-1 rounded-md items-center text-[10px] sm:text-sm  gap-1 inline-flex pr-2 sm:pr-12'> <span className='bg-[#f4f4f4]  rounded-full px-1 '><ThumbsUp width={'15px'} color='orange'/></span> 100% trusted Car Rental Platform in the World</p>
        <h1 className='text-4xl  lg:text-6xl font-extrabold logotxt'>Rent Car In 
        <span className='text-yellow-400'> World-Wide</span></h1>
        
        <div className="p-2 my-2">
        <p className='opacity-85 md:text-[1.1rem]'>RentalX is a modern car rental platform offering a seamless booking experience with a wide range of vehicles to choose from. Designed for convenience and flexibility, RentalX allows users to rent cars quickly and efficiently, ensuring a smooth journey from start to finish.</p>
        </div>
        <button className='border border-gray-400 p-2 sm:p-3 text-sm sm:text-md  rounded-md flex items-center gap-2'>Explore More <img src={right} alt="" className='w-5'/></button>
        
        </div>


         {/* heroImg */}
      <div className="lg:w-1/2">
        <img src="/hero1.jpg" alt="" />
      </div>
      </section>

      <section className=''>
      
      <div className="grid grid-cols-8/12 grid-item-center grid-place-center">
        <RentalForm/>
      </div>
      
      </section>

     
    </div>
  )
}

export default Hero
