import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Collection from './pages/Collections'
import Man from './pages/Man'
import Woman from './pages/Woman'
import About from './pages/About'
import Contact from './pages/Contact'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout"
function App() {
  const routes = createBrowserRouter([
    {
path:"/",
element:<MainLayout/>
    },
    {
      path:"/",
      element:<Hero/>
    },
    {
      path:"/collection",
      element:<Collection/>
    }, 
     {
      path:"/man",
      element:<Man/>
    },
    {
      path:"/woman",
      element:<Woman/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
  
  ]);

  return <RouterProvider router={routes} />
}

export default App
