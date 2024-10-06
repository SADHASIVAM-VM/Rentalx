import {  PhoneCall, WindIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import menu from '../assets/icons/menu.svg'
import close from '../assets/icons/close.svg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewScroll, setViewScroll] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(scrollY > 150 ){
        setViewScroll(true)
      }
      else{
        setViewScroll(false)
      }
    })
  
   
  },[scrollY])

 
  return (
   <div className={`px-3 ${viewScroll ? "glass" : ''}`}>

     <div className='flex justify-between items-center  h-16 '>
      {/* menu */}
      <div className=""> 
        <img src={!isOpen? menu : close} alt="" className=' w-7 cursor-pointer transition-all ' onClick={()=> setIsOpen(!isOpen)}/>
      </div>

      {/* logo*/}
      <div className="">
        { !isOpen ? 
            <p className='logotxt font-extrabold text-xl showAnimation'>RENTAL<span className=' text-green-500'>X</span></p>
            :
            <div className=" showAnimation">
            <ul className='inline-flex p-3 rounded-full  space-x-3 bg-[#202020]'>
              <li className=' text-gray-300 hover:text-white cursor-pointer '><a href="#home">Home</a>   </li>
              <li className=' text-gray-300 hover:text-white cursor-pointer'> <a href="#reg">Quick-Ride</a></li>
              <li className=' text-gray-300 hover:text-white cursor-pointer'><a href="#car">Cars</a> </li>
              <li className=' text-gray-300 hover:text-white cursor-pointer'><a href="#about">About </a> </li>
            </ul>
          </div>
        }
        

         
        
      </div>

      <div className="space-x-2 items-center flex ">
        <button className='p-2 px-3  rounded-full border-gray-300 hover:bg-green-600 '><PhoneCall width={'20px'}/></button>
        <button className='p-2 px-3 rounded-md border border-[#4a4a4a] text-sm hover:border-green-600 hidden md:block'>signup</button>
      </div>
    </div>
    

   
   
   </div>
  )
}

export default Navbar
