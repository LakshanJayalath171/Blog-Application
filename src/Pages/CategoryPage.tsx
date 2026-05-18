import toast from "react-hot-toast";
import { data, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import CategoryHero from "../Components/CategoryHero";
import BlogCard from "../Components/BlogCard";

const CategoryPage = () => {
  const { category } = useParams();
  console.log(category);
  const { axios } = useAppContext();

  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const { data } = await axios.get(`/api/blog/category/${category}`);

      if (!data.success) {
        toast.error(data.message);
      } else {
        setBlogs(data.blog);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  console.log(blogs);
  return (
    <div>
      <div>
        <CategoryHero category={category} />
        <div className="w-screen flex items-center justify-center mt-3 flex-col">
          <h1 className="poppins-extrabold text-4xl">{category}</h1>

          <div className="flex">
            <div className="w-4 h-4 rounded-full bg-green-500 gap-3 mt-2 mr-4"></div>
            <h4 className="poppins-bold text-2xl text-gray-600">
              {blogs.totalBlogs} Blogs
            </h4>
          </div>
        </div>
      </div>

      <div className="w-screen overflow-hidden flex flex-row">
        {blogs.map((items,index)=>(
            <BlogCard title={items.title} image={items.image} _id={items._id}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
