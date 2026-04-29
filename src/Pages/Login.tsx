import { hero } from "../assets/assest"
import { TbUserHexagon } from "react-icons/tb";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaFingerprint } from "react-icons/fa";

const Login = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-center bg-cover' style={{ backgroundImage: `url(${hero})` }}>

        {/* first division  */}
        <div className=" top-1/2 left-1/12 flex-1  w-full h-screen flex items-center justify-start">
            <div className="mx-4">
                <h1 className="poppins-extrabold text-6xl text-blue-50 ">LEARN STACK</h1>
                <h3 className="poppins-semibold text-white text-2xl">Learn Today.Glow Tommorow</h3>
                <p className="poppins-light text-white">Learn Stack © 2026. Sharing knowledge, building skills, and growing together in tech.</p>
            </div>
        </div>
        {/* second main division  */}
        <div className="flex-1 bg-white/30 w-full h-screen flex items-center justify-center">
           <div>
             <div className="flex items-center justify-center relative m-10">
              <div className="w-96 h-10 rounded-3xl bg-blue-50">
                <input placeholder="UserName" className="text-gray-600 pl-18 py-2 poppins-bold outline-none"/>
              </div>
              <div className="w-18 h-18 rounded-full bg-blue-50 absolute -top-4 -right-2">
                <TbUserHexagon className="text-gray-800 text-5xl mx-3 my-3"/>
              </div>
             </div>

             <div className="flex items-center justify-center relative m-10">
              <div className="w-96 h-10 rounded-3xl bg-blue-50">
                <input type="password" className="text-gray-600 pl-18 py-2 poppins-bold outline-none" placeholder="Password"/>
              </div>
              <div className="w-18 h-18 rounded-full bg-blue-50 absolute -top-4 -left-2">
                <TbPasswordFingerprint className="text-gray-800 text-6xl mx-1"/>
              </div>
             </div>

             <button className="bg-red-500 flex items-center justify-center ga-3 text-blue-50 poppins-bold  w-48 h-10 rounded-3xl mx-36 cursor-pointer">Login<FaFingerprint className="ml-3 text-2xl text-blue-50"/></button>
           </div>
           
        </div>
        
    </div>
  )
}

export default Login