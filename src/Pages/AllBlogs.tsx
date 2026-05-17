import { Link } from "react-router-dom";
import { hero, sample_blogs } from "../assets/assest"
import { logo } from "../assets/assest"
import { IoArrowBackCircleSharp } from "react-icons/io5";
import BlogCard from "../Components/BlogCard";
import SmallFooter from "../Components/SmallFooter";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AllBlogs = () => {

    const {axios} = useAppContext()

    const [allBlogs ,setAllBlogs] = useState([])

    const getAllBlogs = async ()=>{
        try {
            const {data} = await axios.get("/api/blog/all");
            console.log(data)
            
            if(data.success){
                setAllBlogs(data.blogs)
                console.log(allBlogs)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        getAllBlogs()
    },[])

  return (
    <div>
        {/* hero section  */}
        <div style={{backgroundImage:`url(${hero})`}} className="w-screen h-screen bg-cover bg-center relative">
            <div className="w-screen absolute -top-5 left-0 px-8 flex items-center justify-between gap-2">
                <Link to={"/"}>
                  <IoArrowBackCircleSharp className="text-4xl text-white "/>
                </Link>
                <img src={logo} alt="learn stack logo" className="w-28 h-28"/>
            </div>
        </div>

        {/* blog title section  */}

        <div className="flex items-center justify-center px-10 py-4">
            <h1 className="text-6xl poppins-bold">All Blogs</h1>
        </div>

        {/* blog section  */}

        <div className="w-full px-8 grid grid-cols-3">
            {allBlogs.map((items,index)=>(
                <BlogCard title={items.title} image={items.image} _id={items._id}/>
            ))}
        </div>

        <SmallFooter/>
    </div>
  )
}

export default AllBlogs