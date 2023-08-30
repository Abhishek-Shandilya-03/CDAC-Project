import React from 'react'
import layerimg from "../assets/images/layer.png"
import "../styles/home.css"
import Gallery from '../components/Gallery/Gallery'
import Service from '../components/Services/Service'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {

  // const [searchCity, setSearchCity] = useState('');
  // const [searchCountry, setSearchCountry] = useState('');

  // const handleCityChange = (e) => {
  //   setSearchCity(e.target.value);
  // };

  // const handleCountryChange = (e) => {
  //   setSearchCountry(e.target.value);
  // };

  return (
    <>
      <section id="hero" className='home-section'>
        <div className="background">
          <img className="bg" src={layerimg} alt="" />
        </div>
        <div className="content">
          <div className="title">
            <h1 className='tag'>TRAVEL TO EXPLORE</h1>
            <p>
              "Embark on a journey of limitless horizons with our travel website. Discover new destinations, immerse yourself in diverse cultures, and create memories that last a lifetime. Whether you're seeking the tranquility of serene landscapes or the thrill of urban exploration, our platform is your gateway to unforgettable experiences."
            </p>
          </div>
          <div className="search">
            

            <button className='exp'> <Link
              to="/tours"
            >
              Explore Now
            </Link></button>
          </div>
        </div>
      </section>
      <section>
        <div className='gal-text'>
          <h3 >What we offer</h3>
        </div>
        <Service />
      </section>
      <section>
        <div className='gal-text'>
          <h3 >Gallery</h3>
        </div>

        <Gallery />
      </section>
    </>
  )
}

export default Home
