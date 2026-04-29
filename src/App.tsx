import { Route, Routes } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Login from "./Pages/Login"

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/admin/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default App