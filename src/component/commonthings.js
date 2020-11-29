
import React from 'react';
import ima from '../image/1.jpg'
import ima2 from '../image/ne.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Link} from 'react-router-dom'
import { propTypes } from 'react-bootstrap/esm/Image';
import Footer from './footer'
const CommonThings=(props)=>{

    return(<>
    
   <section id="header" className="d-flex align-item-center">
   <div className="container-fluid nav_bg">
       <div className="row">
   <div className="col-10 max-auto">
   <div className="col-1"></div>
    <div className="row">
        
 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 flex-column">

<h1>{props.name} <br/> <strong className="brand-name"> Shabi Raja Developer</strong></h1>
<h4 className="my-3">
    We are the Team of MERN stack Developer
    </h4>
    <div className="mt-3">
        <Link to={props.vist} className="btn-get-started">{props.btnCheck}</Link>
    </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2 header-img">
          <img src={ima}  className="img-fluid animated"alt="img" />
      </div>
      </div>
      </div>
      </div>
      </div>
   </section>
    <Footer/>
    
    </>)
}

export default CommonThings