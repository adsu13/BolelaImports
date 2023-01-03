import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/slide.css";
import ig from "../assets/img/ig.png";
import wpp from "../assets/img/wpp.png";
import tel from "../assets/img/tell.png";


 function Slide() {
  return (
    <section className="container" style={{padding:"2em"}}>
<h2 class="display-5 text-center">Contate-me</h2>
<div className="row justify-content-center">        
<div class="card icon" style={{width: "18rem", margin:"1.5em" }}>
  <a href="https://www.instagram.com/bolelaimports/" target='_blank'>
  <img src={ig} className="card-img-top"/>
  </a>
  
</div>
<div class="card icon" style={{width: "18rem", margin:"1.5em"}}>
  <a href="https://wa.me/558398712529" target='_blank'>
  <img src={wpp} className="card-img-top"/>
  </a>
  
</div>

<div class="card icon" style={{width: "18rem", margin:"1.5em"}}>
    
  <a href="tel:558398712529" target='_blank'><img src={tel} className="card-img-top"/></a>
  
  
</div>      
					</div>		
     
    </section>
  );
}
export default Slide;