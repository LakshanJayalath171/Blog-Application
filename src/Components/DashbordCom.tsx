import { blogCategories, logo, sample_blogs } from "../assets/assest"
import { FaEye } from "react-icons/fa";
import { AiFillLike , AiFillDislike} from "react-icons/ai";
import { FaComments } from "react-icons/fa6";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
const DashbordCom = () => {

  const {axios} = useAppContext();

  
  const [views , setViews] = useState(0)
  const [upvotes , setUpvotes] = useState(0)
  const [downvotes , setDownvotes] = useState(0)

  const [blogCount, setBlogCount] = useState(0)

  const [blogCategoryCount, setBlogCategoryCount] = useState([])

  const [topBlog,setTopBlog] = useState([])

  //getting all main dashbord data 
  const getAllMainData = async()=>{
    try {
      const {data} = await axios.get("/api/admin/getVotes")
      
      if(data.success){
        setViews(data.views)
        setUpvotes(data.upVotes)
        setDownvotes(data.downVotes)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // getting blog count
  const getBlogCount = async()=>{
    try {
      const {data} = await axios.get("/api/admin/getBlogCount")
      if(data.success){
        setBlogCount(data.totalBlogs)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // getting blog count by category


  const blogCountByCategory = async()=>{
    try {
      const {data} = await axios.get("api/admin/categoryCount")

      if(data.success){
        setBlogCategoryCount(data.data)
        
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // getting most perfomed blog

  const getTopBlog = async()=>{
    try {
      const {data} = await axios.get("api/admin/topblogs")

      if(data.success){
        setTopBlog(data.blogs)
        console.log(topBlog)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getAllMainData()
    getBlogCount()
    blogCountByCategory()
    getTopBlog()
  },[])

  return (
    <div>
      <div className="flex items-center h-full p-2">
        {/* left div  */}
        <div className="flex-1">
          <div className="w-full bg-[#03132D] p-2 flex items-center justify-center gap-3 rounded-3xl">
            <img src={logo} alt="logo" className="w-48" />
            <div className="text-center">
              <h1 className="text-3xl text-blue-50 poppins-bold">
                Total Blogs
              </h1>
              <h3 className="poppins-semibold text-blue-50 text-6xl">
                {blogCount}
              </h3>
            </div>
          </div>

          <div className="flex items-center justify-center mt-3 gap-2">
            <div className="w-24 h-22 border border-black flex-1 text-center rounded-2xl">
              <FaEye className="text-2xl mx-12 mt-2" />
              <h2 className="poppins-bold">Total views</h2>
              <p className="poppins-light">{views ? views : "No data"}</p>
            </div>

            <div className="w-24 h-22 border border-black flex-1 text-center rounded-2xl">
              <AiFillLike className="text-2xl mx-12 mt-2" />
              <h2 className="poppins-bold">UpVotes</h2>
              <p className="poppins-light">{upvotes ? upvotes : "No data"}</p>
            </div>

            <div className="w-24 h-22 border border-black flex-1 text-center rounded-2xl">
              <AiFillDislike className="text-2xl mx-12 mt-2" />
              <h2 className="poppins-bold">DownVotes</h2>
              <p className="poppins-light">{downvotes ? downvotes : "No data"}</p>
            </div>

            <div className="w-24 h-22 border border-black flex-1 text-center rounded-2xl">
              <FaComments className="text-2xl mx-12 mt-2" />
              <h2 className="poppins-bold">Comments</h2>
              <p className="poppins-light">780</p>
            </div>
          </div>
        </div>
        {/* right div  */}
        <div className="flex-1 p-2">
          {/* top categories  */}
          <div className="px-4 py-2">
            <h2 className="poppins-bold text-gray-800 text-2xl">
              Top Categories
            </h2>
            <div className="px-6">
              {blogCategoryCount.map((items, index) => (
                <div className="flex items-center justify-between">
                  <h3>{items._id}</h3>
                  <p>{items.totalBlogs} Blogs</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-2">
            <h2 className="text-2xl text-gray-800 poppins-bold">
                Blog Perfomance
            </h2>
            {topBlog.map((item,i)=>(
                    <div className="flex items-center justify-between px-6">
                        <h3 className="">{item.title}</h3>
                        <p>{item.perfomanceScore}</p>
                    </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashbordCom