import React from 'react'
import { useNavigate } from 'react-router-dom'

function Orders() {
  const navigate=useNavigate()
  return (
    <div>
       <div className="header-bar">
          <h2>EnterP₹ices</h2>
          <div className="header-bar-icons">
            <input type="text" placeholder="🔎..." />
            <h4>🛒 Cart</h4>
            <h4>❤ Wish list</h4>
            <h4>🔔 notification</h4>
            <h4 onClick={()=>navigate('/login') }>👤 Login</h4>
          </div>
        </div>
    </div>
  )
}

export default Orders