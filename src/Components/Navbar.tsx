import { GiHamburgerMenu } from "react-icons/gi";
import { blogCategories, logo } from "../assets/assest";
import ReButton from "./ReButton";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";



const Navbar = () => {

    

  return (
    <div className="flex items-center justify-center gap-56 w-full">
        
        {/* first div  */}
        <div className="">
            <img src={logo} alt="logo" className="w-24 h-24"/>
        </div>

        <div className="flex">
            <ul className="flex">
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 text-2xl">Home</li>
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 text-2xl">Categories</li>
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 text-2xl">Latest</li>
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 text-2xl">Contact</li>
            </ul>
        </div>

        <div className="">
            <ReButton text={'Subscribe'}/>
        </div>
    </div>
  )
}

export default Navbar