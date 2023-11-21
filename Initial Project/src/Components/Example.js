import React from "react";
import '../Assests/st.css';
//import Ex from "./Ex";
const Example=()=>
{
    return(
        <div>
            <nav className="nav">
          <a href="/" className="site-title">
              INVENTORY MANAGEMENT
          </a>
          <ul>
            <li>
                <a href="/Home">Home</a>
            </li>
              <li >
                  <a href="/Login">Login</a>
              </li>
              <li >
                  <a href>Try it free</a>
              </li>
              
          </ul>
      </nav>
            <h1 className="fx1">Welcome to Inventory Management</h1>
            <p className="fx2">Effective inventory management is key to running a successful business.</p>
            <div className="fx3">
                <button><h2 style={{color:'beige'}}>Start Now</h2></button>
                
            </div>
            
            
        </div>
    )
}
export default Example;