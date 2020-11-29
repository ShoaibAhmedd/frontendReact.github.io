

import React from 'react';
//import bootstrap5 after install from node module
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import {Switch,Route, Redirect,NavLink} from 'react-router-dom'
import Home from './component/home'
import Service from './component/service'
import Contact from './component/contact'
import About from './component/about'
import Footer from './component/footer'
import NavBar from './navbar'
//import NavBAR from './navbar';
const MainApp=()=>{

    return(<> 
    
    <NavBar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/service" component={Service}/>
     <Redirect to="/" />
     <Footer/>
   </Switch>
   
    
    </>)
}

export default MainApp