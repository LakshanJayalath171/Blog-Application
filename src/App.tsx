import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"
import BlogPage from "./Pages/BlogPage"
import AllBlogs from "./Pages/AllBlogs"
import Dashbord from "./Pages/Dashbord"
import { Toaster } from "react-hot-toast"
import CategoryPage from "./Pages/CategoryPage"


const App = () => {
  return (
    <div>
      <Toaster/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route path='/blog/:id' element={<BlogPage/>}/>
          <Route path="/blog/all" element={<AllBlogs/>}/>
          <Route path="/admin/dashbord" element={<Dashbord/>}/>
          <Route path="/:category" element={<CategoryPage/>}/>
        </Routes>
    </div>
  )
}

export default App