import Card from "@/components/Card";
import Catagory from "@/components/Catagory";
import Downloadapp from "@/components/Downloadapp";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import Locations from "@/components/About";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Stories from "@/components/Stories";
import React from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LadingPage = () => {
  return (
    <div className="bg-black p-5 md:px-20 relative">
      <nav className="sticky bg-transparent top-0  z-10">
        <Navbar />
      </nav>

      <main className="" id="home">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <Hero />
        <Catagory />
        <Card />
        <Locations />
        <Slider />
        <Stories />
        <Downloadapp />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LadingPage;
