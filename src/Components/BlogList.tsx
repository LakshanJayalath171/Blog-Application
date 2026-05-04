import { FaRegEdit } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { sample_blogs } from "../assets/assest";

const BlogList = () => {
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
          {sample_blogs.map((items, index) => (
            <tr className="text-center" key={index}>
              <td className="poppins-semibold text-gray-800">{index}</td>
              <td className="poppins-semibold text-gray-800">{items.title.slice(0,20)}</td>
              <td className="poppins-semibold text-gray-800">{items.date}</td>
              <td className="poppins-semibold text-gray-800">
                <div className="flex items-center justify-center gap-3">
                  <div className="rounded-full bg-green-600 w-3 h-3"></div>
                  <p>Active</p>
                </div>
              </td>
              <td className="flex items-center justify-center">
                <button className="bg-yellow-500 border border-1 cursor-pointer py-2 px-6 rounded-3xl m-2">
                  <FaRegEdit />
                </button>
                <button className="bg-red-500 border border-1 cursor-pointer py-2 px-6 rounded-3xl m-2">
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