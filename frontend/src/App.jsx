import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin,SetShowLogin] = useState(false)

  return (
    <>
    {
      showLogin?<LoginPopup SetShowLogin={SetShowLogin}/>:<></>
    }
      <div className='app'>
        <Navbar SetShowLogin={SetShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders/>} />
        </Routes>

      </div>
      <Footer />
    </>

  )
}

export default App
