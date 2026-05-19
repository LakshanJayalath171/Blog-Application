import { blogCategories, logo } from "../assets/assest";
import ReButton from "./ReButton";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

    const [menu, setmenu] = useState(false)

  return (
    <div className="flex items-center justify-between  w-full">
        
        {/* first div  */}
        <div className="">
            <img src={logo} alt="logo" className="w-24 h-24"/>
        </div>

        <div className="hidden md:block lg:block">
            <ul className="flex items-center justify-between md:gap-2">
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 lg:text-2xl">Home</li>
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 lg:text-2xl">Categories</li>
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 lg:text-2xl">Latest</li>
                <li className="poppins-semibold text-blue-50 ml-4 mr-4 lg:text-2xl">Contact</li>
            </ul>
        </div>

        <div className="pr-4">
            <div className="hidden md:block">
                <ReButton text={'Subscribe'}/>
            </div>
            <div className="md:hidden relative">
                <GiHamburgerMenu className="text-2xl  text-white cursor-pointer" onClick={()=>setmenu(!menu)}/>

                <div className={`bg-black/40 rounded-2xl p-2 ${menu?'':'hidden'} absolute top-6 list-none -left-25 transition-all duration-300`}>
                    <li className="poppins-semibold text-blue-50 ml-4 mr-4 cursor-pointer">Home</li>
                    <li className="poppins-semibold text-blue-50 ml-4 mr-4 cursor-pointer">Categories</li>
                    <li className="poppins-semibold text-blue-50 ml-4 mr-4 cursor-pointer">Latest</li>
                    <li className="poppins-semibold text-blue-50 ml-4 mr-4 cursor-pointer">Contact</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar