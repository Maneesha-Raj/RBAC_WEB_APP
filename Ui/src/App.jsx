

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Indexpage from './pages/Indexpage'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Adminhomepage from './pages/Adminhomepage'
import MainLayout from "./Layout/MainLayout"
import AuthLayout from "./Layout/AuthLayout"




function App() {
  
    const router=createBrowserRouter(
      createRoutesFromElements(
        <>

            <Route path="/" element={<AuthLayout />}>
                  <Route path="/" element={<Indexpage />} /> 
                  <Route path="/login" element={<Loginpage />} />
                  <Route path="/sign-up" element={<Signuppage />} />
                  /<Route path="/admin-home" element={<Adminhomepage/>} />
                

            </Route>

            <Route path="/" element={<MainLayout />}>
                  <Route path="/" element={<Indexpage />} />
                  <Route path="/sign-up" element={<Signuppage />} />
                  <Route path="/login" element={<Loginpage />} /> 
                  <Route path="/admin-home" element={<Adminhomepage />} />
                  
            </Route>
        </>
      )
    )

  return (
    <>
       
          <RouterProvider router={router} />
       
    </>
  )
}

export default App






//---------------------------------------------------------------------------------------------------

