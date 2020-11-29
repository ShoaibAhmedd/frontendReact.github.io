
import React from 'react';
import { Button } from 'react-bootstrap';
import CommonThings from './commonthings'
import img2 from '../image/11.png'
const About=()=>{

    return(<>
    
    <CommonThings name="Welcome to About Page   " vist="/contact" imgsrc={img2} btnCheck="Contact US" />
    
    </>)
}

export default About