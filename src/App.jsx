import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers';
import Carousell from './components/Carousell';
import Slide from './components/Slide';
import Promotions from './components/Promotions';
import './assets/css/app.css';
import './assets/css/style.css';



function App() {

  
  return (
    <div className="App">
        <Headers/>
      <Carousell/>
        
        <Promotions/>
        <Slide/>
    </div>
  )
}

export default App
