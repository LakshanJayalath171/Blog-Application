import { FaRegEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
import { MdOutlineUnpublished } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";


const BlogList = () => {

  const {axios} = useAppContext()

  const [allBlogs, setAllBlogs] = useState([])

  const getAllBlogs = async ()=>{
    try {
      const {data} = await axios.get("/api/admin/allblogs")

      if(data.success){
        setAllBlogs(data.blogs)
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteBlog = async(_id)=>{
    try {
      const {data} = await axios.delete("/api/blog/delete",{data:{blogId:_id}})

      if(data.success){
        toast.success(data.message)
        setAllBlogs((prev)=>prev.filter((blog)=>blog._id !== _id))
      }
      else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const togglePublish = async (_id)=>{
    try {
      const {data} = await axios.post("/api/blog/toggle-publish",{blogId:_id})

      if(data.success){
        toast.success(data.message)
        getAllBlogs()
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
    <div className="p-4">
      <h2 className="poppins-bold">All blogs</h2>
      <table className="w-full px-4 py-2">
        <thead className="p-3">
          <tr className="text-center">
            <td className="poppins-bold">#</td>
            <td className="poppins-bold">Blog title</td>
            <td className="poppins-bold">Date</td>
            <td className="poppins-bold">Status</td>
            <td className="poppins-bold">Action</td>
          </tr>
        </thead>

        <tbody>
          {allBlogs.map((items, index) => (
            <tr className="text-center" key={items._id}>
              <td className="poppins-semibold text-gray-800">{index}</td>
              <td className="poppins-semibold text-gray-800 text-start pl-10">{items.title.slice(0,35)}</td>
              <td className="poppins-semibold text-gray-800">{items.createdAt.slice(0,10)}</td>
              <td className="poppins-semibold text-gray-800">
                <div className={`flex items-center justify-center gap-3 ${items.isPublished ? "":"hidden"}`}>
                  <div className="rounded-full bg-green-600 w-3 h-3"></div>
                  <p>Published</p>
                </div>

                <div className={`flex items-center justify-center gap-3 ${items.isPublished ? "hidden":""}`}>
                  <div className="rounded-full bg-red-600 w-3 h-3"></div>
                  <p>Holded</p>
                </div>
              </td>
              <td className="flex items-center justify-center">
                <button className="bg-yellow-500 border border-1 cursor-pointer py-2 px-6 rounded-3xl m-2" onClick={()=>togglePublish(items._id)}>
                  <MdOutlineUnpublished className={`${items.isPublished ? '':'hidden'}`}/>
                  <MdOutlinePublishedWithChanges className={`${items.isPublished ? 'hidden':''}`}/>
                </button>
                <button className="bg-red-500 border border-1 cursor-pointer py-2 px-6 rounded-3xl m-2" onClick={()=>deleteBlog(items._id)}>
                  <IoTrashBin />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList