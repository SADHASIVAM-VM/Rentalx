
import React, { useState } from 'react';
import navigation from '../assets/icons/mapLoc.svg'
import call from '../assets/icons/call.svg'
import { toast } from 'react-toastify';


const RentalForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   //console.log('Form Data:', formData);
   toast.success('Requested Successfully', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    const emptyFormData = Object.keys(formData).reduce((acc, key) => {
      acc[key] = '';
      return acc;
     
    }, {});

    setFormData(emptyFormData); 
  };

  return (
    <div className="flex justify-center items-center  rounded-xl border-[#6d6d6d] " id='reg'>
      <form 
        className="glass shadow-md rounded-md p-6 w-full max-w-4xl space-y-4 sm:border border-[#6d6d6d] "
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 ">Car Rental Details</h2>

        <div className="flex flex-col md:flex-row gap-2">
          {/* Pickup Location */}
          <div className="flex-1 ">
           <div className="flex  items-center space-x-2 mb-2">
          <img src={navigation} className='w-5  bg-[#fcf7f7] rounded-full p-1' alt="" />
           <label className="block   ">Pickup Location </label>
          
           </div>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="w-full p-3 border border-[#6d6d6d] rounded-lg "
              placeholder="Enter pickup location"
              required/>
          </div>

          {/* Dropoff Location */}
          <div className="flex-1">
          <div className="flex  items-center space-x-2 mb-2">
            <img src={navigation} className='w-5 bg-[#fcf7f7] rounded-full p-1' alt="" />
            <label className="block ">Dropoff Location</label>
          </div>
            <input
              type="text"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              className="w-full p-3 border border-[#6d6d6d] rounded-md "
              placeholder="Enter dropoff location"
            required
            />
          </div>

          {/* Contact Number */}
          <div className="flex-1">
            <div className="flex space-x-2 items-center mb-2">
            <img src={call} className='w-5 bg-[#fcf7f7] rounded-full p-1' alt="" />
              
            <label className="block">Contact Number</label>
            </div>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-3 border border-[#6d6d6d] rounded-lg  "
              placeholder="Enter contact number"
              required/>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="border border-[#6d6d6d] text-sm sm:text-md text-white font-bold py-2 px-6 rounded-lg hover:bg-black transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalForm;
