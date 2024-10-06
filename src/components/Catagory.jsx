import React from "react";
import range1 from "../assets/imgs/range-1.jpg";
import range2 from "../assets/imgs/range-2.jpg";
import range3 from "../assets/imgs/range-3.jpg";
import range4 from "../assets/imgs/range-4.jpg";
import {DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

const Catagory = () => {
  return (



  <div className="">
    <h1 className="logotxt text-2xl font-extrabold md:text-4xl lg:text-6xl mt-10">CATAGORY</h1>
   
    <div className={`flex items-center overflow-scroll category px-2 mx-3`}>
     <div className="flex gap-5 my-5">
     
     <div className=" w-[300px] h-[300px] relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d] ">
       <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">CARS</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range1} alt="" className=" w-full h-full object-cover" />
     </div>

     <div className=" w-[300px] h-[300px] relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d] ">
     <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">SUV's</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range2} alt="" className=" w-full h-full " />
     </div>

     <div className="w-[300px] h-[300px] relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d] ">
     <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">VANS</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range3} alt="" className=" w-full h-full " />
     </div>

     <div className="w-[300px] h-[300px]  relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d]  ">
     <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">EV's</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range4} alt="" className=" w-full h-full " />
     </div>
     <div className=" w-[300px] h-[300px] relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d] ">
       <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">CARS</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range1} alt="" className=" w-full h-full object-cover" />
     </div>

     <div className=" w-[300px] h-[300px] relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d] ">
     <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">SUV's</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range2} alt="" className=" w-full h-full " />
     </div>

     <div className="w-[300px] h-[300px] relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d] ">
     <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">VANS</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range3} alt="" className=" w-full h-full " />
     </div>

     <div className="w-[300px] h-[300px]  relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d]  ">
     <div className="backdrop space-y-2">
        <h1 className="text-2xl logotxt mt-5 font-extrabold">EV's</h1>
        {/* <img src={} alt="" /> */}
        <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
       </div>
       <img src={range4} alt="" className=" w-full h-full " />
     </div>

</div>
   </div>
   <p className=" flex  gap-2 md:hidden exetxt text-xl">Scroll left <MoveLeftIcon width={'50px'}/></p>
   </div>


  );
};

export default Catagory;
