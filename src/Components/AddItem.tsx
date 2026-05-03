import { useEffect, useRef, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import { blogCategories, uploadImg } from "../assets/assest";


const AddItem = () => {
  const [value, setValue] = useState("");

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const handleChange = (content) => {
    setValue(content);
  };

  useEffect(()=>{
    if(!quillRef.current && editorRef.current){
      quillRef.current = new Quill(editorRef.current,{theme:"snow"})
    }
  },[])

  return (
    <div className="flex items-center ">
      <div className="py-10 px-24">
        <div>
          <h2 className="poppins-bold">Blog title</h2>
          <input
            type="text"
            placeholder="Enter blog title"
            className="p-2 poppins-semibold border border-black mt-2"
          />
        </div>

        <div className="mt-6">
          <h2 className="poppins-bold">Blog Thumbnail</h2>
          <label htmlFor="image">
            <div className="">
              <img src={uploadImg} alt="uploader" className="w-36 h-24 border border-solid cursor-pointer m-2"/>
              <input type="file" id="image" hidden required />
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
          <select name="category" id="" className="px-6 py-2 poppins-semibold border border-balck m-3">
            {blogCategories.map((items,index)=>(
              <option value={items.name} key={index}>{items.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="px-10 py-2 rounded-3xl bg-blue-500 flex items-center justify-center gap-2 cursor-pointer">Add Blog<IoIosAddCircle/></button>
      </div>
    </div>
  );
};

export default AddItem;
