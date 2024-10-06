import React from "react";
import loca from "../assets/imgs/location.png";
import resp from "../assets/imgs/resp.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className=" " id="about">
      <div className="flex md:flex-row flex-col items-center gap-5  p-3">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="flex-1 order-2 "
        >
          <h1 className="text-xl md:text-4xl lg:text-6xl  font-extrabold mt-10  md:text-left logotxt">
            FIND CAR IN YOUR LOCATIONS{" "}
          </h1>
          <p className="text-justify my-5 sm:text-[1.1rem] order-2 opacity-85">
            Discover the perfect vehicle tailored to your needs, wherever you
            are. Our 'Find Car in Your Locations' feature allows you to
            effortlessly search and select from our premium fleet available near
            you. Whether you're looking for a luxury sedan, a spacious SUV, or a
            sporty convertible, our easy-to-use tool ensures you find the ideal
            car for your journey. Simply enter your location, and let us connect
            you with top-tier vehicles ready for rental.
          </p>

          <div className="flex justify-center md:justify-start">
            <motion.button
              initial={{ x: 100, scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="p-4 shadow-md border 
                border-[#6d6d6d] rounded-xl w-9/12 md:w-5/12 hover:bg-[#1c1c1c]"
            >
              Find <i class="ri-map-pin-2-line  rounded-full p-2 "></i>
            </motion.button>
          </div>
        </motion.div>

        <div className="img flex-1 md:order-2 justify-center flex">
          <motion.img
            initial={{ x: 100, scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, x: 0, opacity: 1 }}
            src={loca}
            alt=""
            className="w-[400px] h-full rounded-xl"
          />
        </div>
      </div>

      <div className="Why mt-10 ">
        <div className="">
          <h1 className="text-xl md:text-4xl lg:text-6xl logotxt font-extrabold my-10  md:text-left">
            WHY <span className="logotxt">RENTAL</span>
            <span
              className="text-green-500 logotxt
          "
            >
              X
            </span>{" "}
            ?
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 place-content-center place-items-center w-full h-[500px]">
          <div className="order-1 ">
            <p className="text-md sm:text-[1.1rem] opacity-85">
              RentalX is the ideal solution for anyone looking to rent a car
              quickly and efficiently. With its user-friendly interface and
              seamless navigation, booking a car has never been easier. Whether
              you're planning a weekend getaway, a business trip, or just need a
              car for a day, RentalX offers a wide selection of vehicles to suit
              your needs. Our platform ensures a smooth experience by providing
              clear and detailed information about each car, making it simple to
              compare and choose the best option. Plus, the fully responsive
              design means you can access RentalX from any device, at any time,
              ensuring convenience on the go.
            </p>
          </div>
          <img
            src={resp}
            alt=""
            className="w-full h-full object-contain object-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
