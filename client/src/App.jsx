import React from "react";
import '../src/index.css'
import {Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Fee from "../src/pages/Fee";
import Admission from "../src/pages/Admission";
import Pagenotfound from "./pages/Pagenotfound";
import Provisional from "./pages/admsubpages/Provisional";


const App = () => {
    return (
       
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/payfee" element={<Fee/>} /> 
                <Route path="/admission" element={<Admission/>}/> 
                <Route path="/provisional" element={<Provisional/>}/>
                <Route path="/*" element={<Pagenotfound/>}/>
            </Routes>
            
    )
}

export default App