import React from 'react'
import st1 from '../assets/imgs/story-1.jpg'
import st2 from '../assets/imgs/story-2.jpg'
import st3 from '../assets/imgs/story-3.jpg'

const Stories = () => {
  return (
    <div className=' md:mb-40 min-h-[400px] '>
      <h1 className='text-xl md:text-4xl lg:text-6xl  md:text-left  font-bold '>STORIES BEHIND THE WHEEL</h1>
      <div className="flex flex-col md:flex-row gap-5 story ">
      <div className=" mt-10 border border-[#2d2d2d] p-5 rounded-xl">
      <div className="">
            <h1 className=' items-center bg-gray-100 border border-b-gray-300 px-2 p-[3px] rounded-lg inline-flex' ><span className='font-bold font-mono text-black'>23 Jan 2024</span></h1>
        </div>
        <hr className='border my-3 border-black'/>

        <div className="my-5 ">
            <h1 className='font-bold text-xl my-3'>Adventures on the Open Road</h1>
            <p className='text-gray-300'> Join us as we dive into the exhilarating stories of travelers who embarked on unforgettable journeys with <span className='logotxt bg-black p-1 rounded-2xl px-2'>RENTAL<span className='text-green-400'>X</span></span></p>
        </div>

        <div className="h-[300px]">
            <img src={st1} alt="" className=' object-contain w-full h-full'/>
        </div>
      </div>

      <div  className=" my-5 border border-[#2d2d2d] p-5 rounded-xl">
      <div className="">
            <h1 className=' items-center bg-gray-100 border border-b-gray-300 px-2 p-[3px] rounded-lg inline-flex' ><span className='font-bold font-mono text-black'>20 Mar 2024</span></h1>
        </div>
        <hr className='border my-3 border-black'/>

        <div className="my-5">
            <h1 className='font-bold text-xl my-3'>Adventures on the Open Road</h1>
            <p className='text-gray-300'> Join us as we dive into the exhilarating stories of travelers who embarked on unforgettable journeys with <span className='logotxt bg-black p-1 rounded-2xl px-2'>RENTAL<span className='text-green-400'>X</span></span></p>
        </div>

        <div className="h-[300px]">
            <img src={st2} alt="" className=' object-contain  w-full h-full'/>
        </div>
      </div>

      <div className="  border border-[#2d2d2d] p-5 rounded-xl">
      <div className="">
            <h1 className=' items-center bg-gray-100 border border-b-gray-300 px-2 p-[3px] rounded-lg inline-flex' ><span className='font-bold font-mono text-black'>23 May 2024</span></h1>
        </div>
        <hr className='border my-3 border-black'/>

        <div className="my-5">
            <h1 className='font-bold text-xl my-3'>Adventures on the Open Road</h1>
            <p className='text-gray-300'> Join us as we dive into the exhilarating stories of travelers who embarked on unforgettable journeys with <span className='logotxt bg-black p-1 rounded-2xl px-2'>RENTAL<span className='text-green-400'>X</span></span></p>
        </div>

        <div className="h-[300px]">
            <img src={st3} alt="" className=' object-contain  w-full h-full'/>
        </div>
      </div>

      </div>
     
    </div>
  )
}

export default Stories
