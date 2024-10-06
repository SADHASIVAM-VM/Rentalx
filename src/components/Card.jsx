import { selectCar } from '@/assets/BrandImg'
import { DollarSign, FuelIcon } from 'lucide-react'
import navi from '../assets/icons/navigation.svg'
import React from 'react'

const Card = () => {
  return (
    <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5   my-10' id='car'>
      <h1 className='text-2xl md:text-4xl lg:text-6xl font-extrabold logotxt '>TOP RATED <span className='text-yellow-400'>CARS</span>
      </h1>
      {
        selectCar.map((i, index)=>(
            <div key={index} className="min-h-[200px]  space-y-4 md:w-[300px] lg:w-[400px] text-black rounded-xl  bg-[#1c1c1c] border border-[#2d2d2d] flex flex-col p-2">
              <div className="">
                <img src={i.img} alt="" className='object-contain'/>
              </div>
              <div className="">
                <h1 className='exetxt tracking-wide  text-xl '>{i.name}</h1>
                <div className=" flex justify-around mt-3">
                  <div className="flex gap-3 opacity-70 ">
                  <p className='flex gap-1'><img src={navi} alt=""  className='w-5'/> {i.km} kms</p>
                  <p className=' flex gap-1'>
                    <span className='
                     '><FuelIcon width={"1.10rem"}/> </span>{i.fuel}</p>
                  
                  </div>
                  <div className="">
                  <p className=' flex items-center font-bold text-yellow-300'><DollarSign  width={"1.25rem"}/> {i.km} / <span className=' text-[12px] ml-1 text-yellow-300'> hrs</span> </p>
                  </div>
                </div>
              </div>

            </div>
        ))
      }
    </div>
  )
}

export default Card
