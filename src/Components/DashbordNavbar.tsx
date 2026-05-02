import { IoSearchSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { TbBellRinging2Filled } from "react-icons/tb";
import { PiUserSwitch } from "react-icons/pi";

const DashbordNavbar = () => {
  return (
    <div className="flex bg-blue-50 w-full items-center justify-between border border-b-olive-900 py-2 px-4">
        {/* left div  */}
        <div>
            <div className="bg-gray-200 rounded-4xl flex items-center justify-between px-2 pr-6 border border-black">
                <input type="text" placeholder="Search" className="text-black poppins-semibold px-4 py-1 outline-none"/>
                <IoSearchSharp/>
            </div>
        </div>

        {/* right div  */}
        <div className="flex items-center justify-center gap-5">
            <div><IoMail className="text-2xl"/></div>
            <div><TbBellRinging2Filled className="text-2xl"/></div>
            <div className="bg-gray-200 px-8 py-2 flex items-center justify-center gap-2 rounded-3xl">
                <PiUserSwitch className="text-2xl"/>
                <p>Admin</p>
            </div>
        </div>
    </div>
  )
}

export default DashbordNavbar