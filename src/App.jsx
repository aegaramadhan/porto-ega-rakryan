import React, { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";
import pp from "./assets/portopp.png"

class PortoFolio extends Component {
  render() {
    return (
      <div className="portofolio">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light padding-1rem justify-content-center display-flex bg-white">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">EGALHAOO</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">AboutMe</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Project</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Testimonials</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                <button type="button" class="btn btn-warning">DonwloadCV</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>


      <div className='banner'>
      <div className='font-banner'>
        <div className='font-atas'>
          <p>HI am</p>
          <p id="jeruk">Fawzi Sayed</p>
          <div className='highlight'>
          <p>Website <br /> Depeloper</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br />massa nibh lectus netus in. Aliquet donec morbi convallis <br /> pretium. Turpis tempus pharetra</p>
          <div className='gambar1'></div>
          <img src={pp}/>
        </div>
        
      </div>
      </div>

      </div>
      
        

    )
  }
}
export default PortoFolio;
