import { hero } from "../assets/assest"
import { TbUserHexagon } from "react-icons/tb";
import { TbPasswordFingerprint } from "react-icons/tb";
import { FaFingerprint } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";



const Login = () => {

  const {axios , setToken , navigate} = useAppContext()

  const [password,setPassword] = useState(null)
  const [email,setEmail] = useState(null)

  const handleSubmit = async (e)=>{
    e.preventDefault()

    try {
      const {data} = await axios.post("/api/admin",{email,password})

      if(data.success){
        setToken(data.token)
        localStorage.setItem('token',data.token)
        axios.defaults.headers.common['Authorization'] = data.token;
        navigate('/admin/dashbord')
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }


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
           <form onSubmit={handleSubmit}>
             <div className="flex items-center justify-center relative m-10">
              <div className="w-96 h-10 rounded-3xl bg-blue-50">
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="E-Mail" className="text-gray-600 pl-18 py-2 poppins-bold outline-none"/>
              </div>
              <div className="w-18 h-18 rounded-full bg-blue-50 absolute -top-4 -right-2">
                <TbUserHexagon className="text-gray-800 text-5xl mx-3 my-3"/>
              </div>
             </div>

             <div className="flex items-center justify-center relative m-10">
              <div className="w-96 h-10 rounded-3xl bg-blue-50">
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="text-gray-600 pl-18 py-2 poppins-bold outline-none" placeholder="Password"/>
              </div>
              <div >
                <button className="w-18 h-18 rounded-full bg-blue-50 absolute -top-4 -left-2" type="submit">
                  <TbPasswordFingerprint type="submit" className="text-gray-800 text-6xl mx-1"/>
                </button>
              </div>
             </div>

             <button className="bg-red-500 flex items-center justify-center ga-3 text-blue-50 poppins-bold  w-48 h-10 rounded-3xl mx-36 cursor-pointer">Login<FaFingerprint className="ml-3 text-2xl text-blue-50"/></button>
           </form>
           
        </div>
        
    </div>
  )
}

export default Login