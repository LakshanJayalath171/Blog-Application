import { MdDashboardCustomize  } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import {  HiQueueList} from "react-icons/hi2";
import {FaComment} from "react-icons/fa";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi";

import DashbordCom from "../Components/DashbordCom";
import AddItem from "../Components/AddItem";
import BlogList from "../Components/BlogList";
import Comments from "../Components/Comments";
import DashbordNavbar from "../Components/DashbordNavbar";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";



const Dashbord = () => {

    const [item,setItem] = useState('dashbord');
    const {token,setToken} = useAppContext()

    const navigate = useNavigate()
    const logout = ()=>{
      localStorage.removeItem('token')
      setToken(null)
      navigate("/admin/login")
    }

  return (
    <>
     {token ? <div className="flex">
      {/* left div  */}
      <div className="flex-1">
        <div className="bg-[#03132D] h-screen relative">
          <div className="p-4 pb-4">
            <h1 className="poppins-bold text-2xl text-blue-50">LEARNSTACK</h1>
            <p className="poppins-light text-blue-50">Admin</p>
          </div>
          <div className="bg-[#03132D] pl-3">
            <div
              className={`${item == "dashbord" ? "bg-white" : "bg-[#03132D] text-white"} w-full h-full flex items-center justify-center gap-2  rounded-l-3xl cursor-pointer`}
              onClick={() => setItem("dashbord")}
            >
              <MdDashboardCustomize className="text-2xl" />
              <h4 className={`poppins-semibold text-[15px] py-3`}>Dashbord</h4>
            </div>

            <div
              className={`${item == "additem" ? "bg-white" : "bg-[#03132D] text-white"} w-full h-full flex items-center justify-center gap-2  rounded-l-3xl cursor-pointer`}
              onClick={() => setItem("additem")}
            >
              <IoIosAddCircle className="text-2xl" />
              <h4 className="poppins-semibold text-[15px] py-3">Add Item</h4>
            </div>

            <div
              className={`${item == "bloglist" ? "bg-white" : "bg-[#03132D] text-white"} w-full h-full flex items-center justify-center gap-2  rounded-l-3xl cursor-pointer`}
              onClick={() => setItem("bloglist")}
            >
              <HiQueueList className="text-2xl" />
              <h4 className="poppins-semibold text-[15px] py-3">Blog List</h4>
            </div>

            <div
              className={`${item == "comments" ? "bg-white" : "bg-[#03132D] text-white"} w-full h-full flex items-center justify-center gap-2  rounded-l-3xl cursor-pointer`}
              onClick={() => setItem("comments")}
            >
              <FaComment className="text-2xl" />
              <h4 className="poppins-semibold text-[15px] py-3">Comments</h4>
            </div>
          </div>

          <div className="absolute bottom-6 left-10">
            <button onClick={()=>logout()} className="cursor-pointer p-3 poppins-semibold rounded-3xl bg-blue-400 px-10 flex items-center justify-center gap-4">
              {" "}
              <FiLogOut className="text-2xl" /> LogOut
            </button>
          </div>
        </div>
      </div>
      {/* right div  */}
      
      <div className="flex-4 relative">
        <DashbordNavbar />
        <div>{item === "dashbord" && <DashbordCom/>}</div>
        <div>{item === "additem" && <AddItem/>}</div>
        <div>{item === "bloglist" && <BlogList/>}</div>
        <div>{item === "comments" && <Comments/>}</div>
      </div>
    </div>:<div>Login First</div>}
    </>
  );
}

export default Dashbord