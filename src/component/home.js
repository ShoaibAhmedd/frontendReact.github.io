
import React from 'react';
import ima from '../image/1.jpg'
import ima2 from '../image/3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Link} from 'react-router-dom'
import CommonThings from './commonthings'
const Home=()=>{

    return(<>
    
   <CommonThings name="Grow your bussiness with " vist="/about" btnCheck="Get Started"/>
    
    
    </>)
}

export default Home