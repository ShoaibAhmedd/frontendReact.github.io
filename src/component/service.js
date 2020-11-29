
import React from 'react';
import Card from './Card'
import Sdata from'./Sdata';
import { Container } from 'react-bootstrap';
import Footer from './footer'
const Service=()=>{

    return(<>
    <Container>
    <div className="my-5">
        <h1 className="text-center">Our Services</h1>
    </div>
    <div className="container-fluid mb-5 ">
    
   <div className="col-12 max-auto">
   <div className="row gy-5">
   {
       Sdata.map((val,index)=>{
           return <Card key={index} imgsrc={val.imagesrc} title={val.tiltle}/>
       })
   }


       </div>
      
       </div>
    </div>
    <Footer/>
    </Container>
    </>)
}

export default Service