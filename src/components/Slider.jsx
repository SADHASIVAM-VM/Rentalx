import React from 'react'
import { Imgs} from '../assets/BrandImg';

const Slider = () => {
   
    return (
      <div className="my-10 md:my-20 ">
        <h1 className='logotxt font-extrabold text-2xl md:text-4xl lg:text-6xl my-10'>PARTNERSHIP <span className='text-yellow-300'>BRANDS</span></h1>
          <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-200px),transparent_100%)]">
 <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll ">
       {Imgs.map((img, index)=> <li key={index}><img src={img} alt="" className='w-20'/></li>)
        
       }
       
    </ul>

    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll  " aria-hidden="true">
       {Imgs.map((img, index)=> <li key={index}><img src={img} alt="" className='w-20'/></li>)
        
       }
       
    </ul>                
        </div>
      </div>
      );
}

export default Slider
