
import React from 'react';
// import bootstrap5 after install from node module
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import {Switch,Route, Redirect} from 'react-router-dom'
import Home from './home'
import Service from './service'
import Contact from './contact'
import About from './about'
const MainApp=()=>{

    return(<>
    
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/service" component={Service}/>
     <Redirect to="/" />
   </Switch>
   <Footer/>
    
    </>)
}

export default MainApp