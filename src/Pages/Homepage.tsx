import { Link, } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import CategoryCard from "../Components/CategoryCard";
import LargeFooter from "../Components/LargeFooter";
import Navbar from "../Components/Navbar"
import ReButton from "../Components/ReButton";
import { blogCategories, hero, sample_blogs } from "../assets/assest";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const Homepage = () => {

  const [blog,setBlog] = useState([])
  const [popular,setPopular] = useState([])

  const {axios} = useAppContext()

  const blogByDate = async()=>{
    try {
      const {data} = await axios.get("/api/blog/date")
      
      if(!data){
        toast.error("No data found")
      }
      else{
        setBlog(data.blog)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const popularBlogs = async()=>{
    try {
      const {data} =await axios.get("/api/blog/popular")

      console.log(data)
      if(data.success){
        setPopular(data.blogs)
      }
      else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    blogByDate()
    popularBlogs()
  },[])

  return (
    <div>

      {/* hero section  */}
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
      <Navbar/>
      <div className="absolute top-1/2 left-10">
        <h1 className="poppins-bold text-6xl text-blue-50">LEARN STACK</h1>
        <h4 className="poppins-light text-2xl text-blue-100">Learn Today. Glow Tommorow.</h4>
      </div>
    </div>
    {/* blog category section  */}
     <div className="w-full flex items-center justify-between m-2 p-6 px-8">
       <h2 className="text-2xl text-gray-500 poppins-bold">Article Categories</h2>
       
     </div>
     
     <div className="flex items-center justify-between px-4 overflow-y-auto scroll-smooth">
       {blogCategories.map((items,index)=>(
        <Link to={`/${items.name}`}>
          <CategoryCard key={index} title={items.name} image={items.image}/>
        </Link>
       ))}
     </div>

     {/* latest blog section  */}
     <div className="w-full flex items-center justify-between m-2 p-6 px-8">
       <h2 className="text-2xl text-gray-500 poppins-bold">Latest Blogs</h2>
       <Link to={"/blog/all"}>
         <ReButton text={'Show All Blogs'}/>
       </Link>
     </div>

     <div className="mx-8 grid grid-cols-3">
      {blog.slice(0,6).map((items,index)=>(
        <BlogCard title={items.title} image={items.image} key={index} _id={items._id}/>
      ))}
     </div>

     <div className="w-full flex items-center justify-between m-2 p-6 px-8">
       <h2 className="text-2xl text-gray-500 poppins-bold">Popular Blogs</h2>
       <Link to={"/blog/all"}>
         <ReButton text={'Show All Blogs'}/>
       </Link>
     </div>

     <div className="grid grid-cols-3 mx-8 mb-24">
      {popular.slice(0,3).map((items,index)=>(
        <BlogCard title={items.title} image={items.image} key={index} _id={items._id}/>
      ))}
     </div>

     <LargeFooter/>

    </div>
  );
}

export default Homepage