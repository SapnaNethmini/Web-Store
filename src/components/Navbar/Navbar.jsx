import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext'


export const Navbar = () => {

    const [menu, setMenu] = React.useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);


  return (

    <div className = 'navbar'>

        <div className = "navbar-logo">
            <img src = {logo} alt = "logo"  />
            <p>WEB-STORE</p>
       </div>

       <ul className = "nav-menu">
        <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() =>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
       </ul>

         <div className = "navbar-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src = {cart_icon} alt = "" ></img></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>         
        </div>
    </div>
  )
}

export default Navbar
