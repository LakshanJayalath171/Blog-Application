import { useEffect, useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import { blogCategories, uploadImg } from "../assets/assest";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";


const AddItem = () => {
  
  const {axios} = useAppContext()

  const [category,setCategory] = useState(blogCategories[0].name)
  const [isPublished,setIsPublished] = useState(true)
  const [title,setTitle] = useState("")
  const [value, setValue] = useState("");
  const [image,setImage] = useState(null)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  
  const addItem = async ()=>{
    try {
      const formData = new FormData()

      formData.append("title",title)
      formData.append("category",category)
      formData.append("content",value)
      formData.append("isPublished",true)
      formData.append("image",image)
      formData.append("upvotes",0)
      formData.append("downVotes",0)
      formData.append("views",0)
      
      const {data} = await axios.post("/api/blog/addBlog",formData)

      if(data.success){
        toast.success(data.message)

        // clearing feild data
        setTitle("")
        setValue("")
        setImage(null)
        quillRef.current.root.innerHTML = ""
      }
      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current,{theme:"snow"})
    }

    quillRef.current.on('text-change',()=>{
      setValue(quillRef.current.root.innerHTML)
    })
  },[])

  return (
    <div className="flex items-center ">
      <div className="py-10 px-24">
        <div>
          <h2 className="poppins-bold">Blog title</h2>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter blog title"
            className="p-2 poppins-semibold border border-black mt-2"
          />
        </div>

        <div className="mt-6">
          <h2 className="poppins-bold">Blog Thumbnail</h2>
          <label htmlFor="image">
            <div className="">
              <img src={image?URL.createObjectURL(image):uploadImg} alt="uploader" className="w-36 h-24 border border-solid cursor-pointer m-2"/>
              <input type="file" id="image" hidden required onChange={(e)=>setImage(e.target.files[0])}/>
              <p>Dimension 800x450</p>
            </div>
          </label>
        </div>

        <div className="mt-6">
          <h2 className="poppins-bold">Blog content</h2>
          <div className="" ref={editorRef}>  
          </div>
        </div>

        <div>
          <h2 className="poppins-bold">Category</h2>
          <select name="category" value={category} onChange={(e)=>setCategory(e.target.value)} id="" className="px-6 py-2 poppins-semibold border border-balck m-3">
            {blogCategories.map((items,index)=>(
              <option value={items.name} key={index}>{items.name}</option>
            ))}
          </select>
        </div>
        <button onClick={addItem} type="submit" className="px-10 py-2 rounded-3xl bg-blue-500 flex items-center justify-center gap-2 cursor-pointer">Add Blog<IoIosAddCircle/></button>
      </div>
    </div>
  );
};

export default AddItem;
