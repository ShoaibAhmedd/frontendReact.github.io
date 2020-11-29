
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Footer from './footer'
const Contact=()=>{
const[data,setData]=useState({
    name:'',
    email:'',
    phone:'',
    city:'',
    area:''
})
const myContact=(ev)=>{
    ev.preventDefault();
alert(`Name is ${data.name} , Phone Number is ${data.phone} City is ${data.city} Email is ${data.email} Text is ${data.area}`)
}
const changeValue=(e)=>{
const {name,value}=e.target

setData((preVal)=>{
    return{
        ...preVal,
        [name]:value,
    }
})
}
    return(<>
    <Container>
        
        <div className="row mt-5">
        <div className="col-md-2"></div>

            <div className="col-md-6">
            <h2 className="text-center">Contact Us</h2>
                <form onSubmit={myContact} className="mt-5">
    <div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text" class="form-control" name="name" value={data.name} onChange={changeValue} placeholder="Full Name" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="text" class="form-control" name="email" value={data.email} onChange={changeValue}  placeholder="Email Address" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">City</label>
  <input type="text" class="form-control" name="city" value={data.city} onChange={changeValue}  placeholder="Your City" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone number</label>
  <input type="text" class="form-control" name="phone" value={data.phone} onChange={changeValue}  placeholder="Your Phone Number" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Write Your Text</label>
  <textarea className="form-control" name="area" value={data.area} onChange={changeValue}  rows="3"></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary"  type="submit">Submit form</button>
  </div>
  </form><br/><br/>
  </div></div>
  <Footer/>
  </Container>
    </>)
}

export default Contact