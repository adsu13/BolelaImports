import React, { useRef, useState } from "react";
import img1 from "../assets/img/produtos/12.jpg";
import img2 from "../assets/img/produtos/1.jpg";
import img3 from "../assets/img/produtos/2.jpg";
import img4 from "../assets/img/produtos/3.jpg";
import img5 from "../assets/img/produtos/4.jpg";
import img6 from "../assets/img/produtos/5.jpg";
import img7 from "../assets/img/produtos/6.jpg";
import img8 from "../assets/img/produtos/7.jpg";
import img9 from "../assets/img/produtos/8.jpg";

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
  <img src={img2} className="card-img-top"/>
  <div class="card-body">
  <h5 class="card-title">IPhone 8 Plus</h5>
    <p class="card-text">Armazenamento: 64GB <br/>Foto: 12 Mpx <br/>Video: 4K<br/> Display: 5.5
1920x1080</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img3} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div className="row justify-content-center">
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img4} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img5} className="card-img-top"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-success">Tenho Interesse!</a>
  </div>
  
</div>
<div class="card" style={{width: "18rem", margin:"1.5em"}}>
  <img src={img6} className="card-img-top"/>
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