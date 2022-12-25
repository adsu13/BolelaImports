import React, { useRef, useState } from "react";
import img1 from "../assets/img/promocao.jpeg";
 function Promotions() {
  return (
    <section className="container justify-content-center" style={{padding:"2em"}}>
   <h2 class="display-5 text-center">Promoções</h2>
   
    <div className="row justify-content-center">
   <div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img1} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>

<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img1} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img1} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div className="row justify-content-center">
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img1} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img1} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img1} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
</div>
</div>
    </section>
  );
}
export default Promotions;