import BlogCard from "../Components/BlogCard";
import CategoryCard from "../Components/CategoryCard";
import LargeFooter from "../Components/LargeFooter";
import Navbar from "../Components/Navbar"
import ReButton from "../Components/ReButton";
import { blogCategories, hero, sample_blogs } from "../assets/assest";

const Homepage = () => {
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
       <ReButton text={'Show All Categories'}/>
     </div>
     
     <div className="flex items-center justify-between px-4 overflow-y-auto">
       {blogCategories.map((items,index)=>(
        <CategoryCard key={index} title={items.name} image={items.image}/>
       ))}
     </div>

     {/* latest blog section  */}
     <div className="w-full flex items-center justify-between m-2 p-6 px-8">
       <h2 className="text-2xl text-gray-500 poppins-bold">Latest Blogs</h2>
       <ReButton text={'Show All Blogs'}/>
     </div>

     <div className="mx-8 grid grid-cols-3">
      {sample_blogs.map((items,index)=>(
        <BlogCard title={items.title} image={items.image} key={index}/>
      ))}
     </div>

     <div className="w-full flex items-center justify-between m-2 p-6 px-8">
       <h2 className="text-2xl text-gray-500 poppins-bold">Popular Blogs</h2>
       <ReButton text={'Show All Blogs'}/>
     </div>

     <div className="grid grid-cols-3 mx-8 mb-24">
      {sample_blogs.slice(0,3).map((items,index)=>(
        <BlogCard title={items.title} image={items.image} key={index}/>
      ))}
     </div>

     <LargeFooter/>

    </div>
  );
}

export default Homepage