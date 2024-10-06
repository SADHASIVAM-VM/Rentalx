import React from "react";
import {DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { MoveLeftIcon} from "lucide-react";
import { Cato } from "@/assets/BrandImg";

const Catagory = () => {
  return (



  <div className="">
    <h1 className="logotxt text-2xl font-extrabold md:text-4xl lg:text-6xl mt-10">CATAGORY</h1>
   
    <div className={`flex items-center overflow-scroll category px-2 mx-3`}>
     <div className="flex gap-5 my-5">
     
      {Cato.map((i, index)=>

        <div key={index} className=" w-[300px] h-[300px] relative box overflow-hidden transition-all rounded-xl border border-[#6d6d6d] ">
          <div className="backdrop space-y-2">
           <h1 className="text-2xl logotxt mt-5 font-extrabold">{i.title}</h1>
           <div className="bg-[#6d6d6d] inline-block rounded-full p-1"> <DoubleArrowRightIcon width={'30px'} height={"30px"} /></div>
          </div>
          <img src={i.img} alt="" className=" w-full h-full object-cover" />
        </div>

      )}
</div>
   </div>
   <p className=" flex  gap-2 md:hidden exetxt text-xl">Scroll left <MoveLeftIcon width={'50px'}/></p>
   </div>


  );
};

export default Catagory;
