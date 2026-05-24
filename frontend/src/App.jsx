import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import BookPage from './pages/BookPage'
import ContactPage from './pages/ContactPage'
import Login from './components/Login'
import SignupPage from './components/SignUp'
import Checkout from './components/Checkout'
import ProtectedRoute from './pages/ProtectedRoute'
import MyOrders from './components/MyOrders'
import VerifyPaymentPage from './pages/VerifyPaymentPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/books' element={<BookPage />} />
      <Route path='/contact' element={<ContactPage />} />

      <Route path='/checkout' element={
        <ProtectedRoute>
        <Checkout/>
        </ProtectedRoute>
      } />

      <Route path='/orders/verify' element={<VerifyPaymentPage />} />
      <Route path='/orders' element={<MyOrders />} />

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignupPage />} />
    
    </Routes> 
  )
}

export default App