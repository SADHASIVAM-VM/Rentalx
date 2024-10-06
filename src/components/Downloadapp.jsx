import React from 'react'
import applestore from '../assets/imgs/apple.png'
import playstore from '../assets/imgs/google.png'
import download from '../assets/imgs/download.png'

const Downloadapp = () => {
  return (
    <div className=' relative mt-10 md:mt-32'>
        
      <div className="bg-[#63ace5] bg-[url(/download.svg)] rounded-md min-h-[300px] grid md:grid-cols-2 place-content-center place-items-center gap-10">
        <div className="download place-items-center place-content-center px-5">
            <h1 className='text-2xl md:text-4xl lg:text-6xl  font-bold logotxt tracking-wide my-5 '>PREMIUM CAR RENTAL</h1>
            <div className="flex justify-center lg:justify-start gap-5">
                <img src={playstore} alt="" className='w-32'/>
                <img src={applestore} alt="" className='w-32' />
            </div>
          
        </div>
        <div className=" px-5 md:p-10">
        <img src={download} alt="" width={"300px"}  />
        </div>

        
      </div>
      
    </div>
  )
}

export default Downloadapp
