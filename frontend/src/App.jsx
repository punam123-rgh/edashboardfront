import { useState } from 'react'
import './App.css'
import Nav from './component/nav'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './component/footer'
import SignUp from './component/signUp'
import PrivateComponent from './component/privateComponent'
import Login from './component/Login'
import Product from './component/Product'
import Productlist from './component/Productlist'
import UpdateProduct from './component/UpdateProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Nav/>
     <Routes> 
      <Route element = {<PrivateComponent/>}>
      <Route path='/' element={<Productlist/>} />
       <Route path='/add' element={<Product/>} /> 
       <Route path='/update/:id' element={<UpdateProduct/>} /> 
       <Route path='/logout' element={<h>Logout Component</h>} /> 
       <Route path='/profile' element={<h>Profile Component</h>} /> 
       </Route>
       <Route path='/signUp' element={<SignUp/>} />
     <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  <Footer/>
    </>
  )
}

export default App;
