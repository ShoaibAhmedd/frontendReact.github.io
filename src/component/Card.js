import React from 'react';
import web from '../image/1.jpg'
import {Link} from 'react-router-dom'
const Card=(props)=>{

    return(<>
    <div className="col-md-4 col-12 mx-auto">
        <div className="card" >
  <img src={props.imgsrc} style={{height:'250px'}} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="#" class="btn btn-primary">Go somewhere</Link>
    </div></div>
  </div>
 

    </>)
}

export default Card