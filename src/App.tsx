import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"
import BlogPage from "./Pages/BlogPage"

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route path='/blog/:id' element={<BlogPage/>}/>
        </Routes>
    </div>
  )
}

export default App