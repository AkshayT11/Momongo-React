import Home from './Components/Home/Home'
import Hotel from './Components/Hotel/Hotel'
import "bootstrap/dist/css/bootstrap.min.css"
import "font-awesome/css/font-awesome.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound/PageNotFound'

function App() {
 

  return (
    <>   
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/hotel' element={<Hotel/>} />
           <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </BrowserRouter>
     
    
    </>

  )
}

export default App
