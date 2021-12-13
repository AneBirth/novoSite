import React from "react";
import { Route,BrowserRouter,Routes } from "react-router-dom";

import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';

const routes =()=>{
return(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Page1/>}/>
  <Route path="/Page2" element={<Page2/>}/>
  <Route path="/Page3"element={<Page3/>}/>
  <Route path="/Page4"element={<Page4/>}/>
  </Routes>
 </BrowserRouter>

)

}

export default routes;