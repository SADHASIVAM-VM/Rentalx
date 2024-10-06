import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-white  w-full'>
      <div className="grid md:grid-cols-2 pt-10   ">
        <h1 className='text-2xl md:text-4xl lg:md:text-6xl font-bold  my-10 '>
            NEWS LETTER.</h1>

        <div className="relative flex items-center">
        <input type="text" className='w-full p-2 bg-transparent border-b-2 border-[#6d6d6d]'/>
        <button className='px-5 py-2  bg-[#2d2d2d] border-2 border-[#6d6d6d]  rounded-t-xl text-white absolute right-0  hover:bg-black'>Subscribe</button>
        </div>
      </div>

      <div className="grid  md:grid-cols-4 gap-5 mt-10">

        <div className="res">
            <h1 className='text-bold text-xl'>Resources</h1>
            <p className='text-[#747474]'>Installation Manual</p>
            <p className='text-[#747474]'>Release Note</p>
            <p className='text-[#747474]'>ICommunity Help</p>
           
        </div>

        <div className="com">
            <h1 className='text-bold text-xl'>Company</h1>
          <div className="flex flex-col">
          <a href=''className='text-[#6d6d6d]'>About Us </a> 
           <a href='' className='text-[#747474]'>Career</a>
           <a href='' className='text-[#747474]'>Press</a>
           <a href='' className='text-[#747474]'>Support</a>
          
          </div>
        </div>

        <div className="com ">
            <h1 className='text-bold text-xl'>Product</h1>
            <div className="flex flex-col">
            <a href='' className='text-[#747474]'>Demo</a>
            <a href='' className='text-[#747474]'>Security</a>
            <a href='' className='text-[#747474]'>FAQ</a>
            <a href='' className='text-[#747474]'>Features</a>
           
            </div>
        </div>
        <div className="com">
            <h1 className='text-bold text-xl'>Follow Us</h1>
            
           
        </div>


      </div>

      <hr className='my-5 '/>

      <div className="flex justify-center my-2  text-center">
      <p className="bg-[#2d2d2d] text-[10px] sm:text-[14px]  rounded-xl md:w-[500px] p-2 px-3">© Copyright 2024 <span className='logotxt bg-black p-1 rounded-2xl px-2'>RENTAL<span className='text-green-400'>X</span></span> All rights reserved .</p>
      </div>
    </div>
  )
}

export default Footer
