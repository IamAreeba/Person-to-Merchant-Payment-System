

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Services } from "./pages/Services"
import { Register } from "./pages/Register"
import { Login } from "./pages/Login"
import { Contact } from "./pages/Contact"


const App = () => {

  return (
    
    <>
        <BrowserRouter>

          <Routes>

            
            <Route path='/' element={ <Home /> }   />
            <Route path='/about' element={ <About /> }   />
            <Route path='/services' element={ <Services /> }   />
            <Route path='/register' element={ <Register /> }   />
            <Route path='/login' element={ <Login /> }   />
            <Route path='/contact' element={ <Contact /> }   />
    


          </Routes>

        </BrowserRouter>

    </>


  )
}

export default App 