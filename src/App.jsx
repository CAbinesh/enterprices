import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import CategoryPage from './components/CategoryPage'
import Wishlist from './components/Wishlist'
import Cart from './components/Cart'
import Orders from './components/Orders'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/Category/:CategoryName' element={<CategoryPage/>}></Route>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/category/:CategoryName/:BuyNow' element={<Orders/>} />
      </Routes>
    </div>
  )
}

export default App