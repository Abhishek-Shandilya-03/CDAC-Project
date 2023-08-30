
import { React, useState, useEffect } from 'react';
import TourCard from '../shared/tourCard';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import '../styles/tours.css';
import { useLocation } from 'react-router-dom';

const Tours = () => {

  
  const location = useLocation();

  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    async function fetchTours() {
      try {
        const response = await axios.get('http://localhost:8080/api/packages/');
        setTours(response.data);
        setFilteredTours(response.data);
      } catch (error) {
        console.error('Error fetching tours', error);
      }
    }

    fetchTours();
  }, []);

  // useEffect(() => {
  //   async function searched() {
  //     const queryParams = new URLSearchParams(location.search);
  //       const cityParam = queryParams.get('city');
  //       const countryParam = queryParams.get('country');
  //       if (cityParam && countryParam) {
  //         setFilteredTours(filteredTours.filter(
  //           (tour) =>
  //             tour.country.toLowerCase().includes(cityParam.toLowerCase()) &&
  //             tour.city.toLowerCase().includes(countryParam.toLowerCase())
  //         ))}
  //   }
  
  //   searched();
  //   console.log(filteredTours)
  // }, [location.search]);

  const handleSearch = () => {
    const filteredTours = tours.filter(
      (tour) =>
        tour.country.toLowerCase().includes(searchCountry.toLowerCase()) &&
        tour.city.toLowerCase().includes(searchCity.toLowerCase())
    );
    setFilteredTours(filteredTours);
    setSearchCity('');
    setSearchCountry('');
  };

  return (
    <div>
      <div className='search-tours'>
        <div className='container-home'>
          <label htmlFor=''>Where you want to go</label>
          <input
            type='text'
            placeholder='Search Your location'
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </div>
        <div className='container-home'>
          <label htmlFor=''>Country</label>
          <input
            type='text'
            placeholder='Country'
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
          />
        </div>

        <button className='exp' onClick={handleSearch}>
          Search
        </button>
      </div>

      <Container className='card-container home-section'>
        {filteredTours.map((tour) => (
          <TourCard key={tour.packId} tour={tour} />
        ))}
      </Container>
    </div>
  );
};

export default Tours;














// import { React, useState, useEffect } from 'react'

// import TourCard from '../shared/tourCard'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import axios from 'axios';
// // import tours from "../shared/demo_data"
// import "../styles/tours.css"

// const Tours = () => {

//   const [tours, setTours] = useState([]);

//   useEffect(() => {
//     async function fetchTours() {
//       try {
//         // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
//         const response = await axios.get('http://localhost:8080/api/packages/');
//         setTours(response.data);
//       } catch (error) {
//         console.error('Error fetching tours', error);
//       }

//     }

//     fetchTours();
//   }, []);

//   const [searchCountry, setSearchCountry] = useState('');
//   const [searchCity, setSearchCity] = useState('');


//   return (


//     <div>
//       <div className="search-tours">
//         <div className="container-home">
//           <label htmlFor="">Where you want to go</label>
//           <input type="text" placeholder="Search Your location" value={searchCity}
//             onChange={(e) => setSearchCity(e.target.value)} />
//         </div>
//         <div className="container-home">
//           <label htmlFor="">Country</label>
//           <input type="text" placeholder='Country' value={searchCountry}
//             onChange={(e) => setSearchCountry(e.target.value)} />
//         </div>
//         {/* <div className="container">
//               <label htmlFor="">Date</label>
//               <input type="date" />
//             </div> */}

//         <button className='exp'>Search</button>
//       </div>



//       <Container className='card-container home-section'>

        
//         {tours.map((tour) => (

//           <TourCard tour={tour} />

//         ))}

//       </Container>

      
//     </div>

//   )
// }

// export default Tours