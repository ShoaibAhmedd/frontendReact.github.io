import React from 'react'
//import ".../node_modules/bootstrap/dist/css/bootstrap.min.css"
//import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Col,Form, Row,Container} from 'react-bootstrap';
const NavBAR=()=>{

    return(<>
    <div className="container-fluid nav_bg">
    <div className='row'>
<div className="col-10 max-auto">
    

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Contact Us</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
</div>

</div>
    </div>
    
    </>)


}

export default NavBAR