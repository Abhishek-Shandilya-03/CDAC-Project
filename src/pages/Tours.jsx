import React from 'react'

import TourCard from '../shared/tourCard'
import { Container, Row, Col } from "reactstrap";

import tours from "../shared/demo_data"
import "../styles/tours.css"

const Tours = () => {


  return (

    <Container className='card-container'>

      {tours.map((tour) => (

        <TourCard tour={tour} />

      ))}

    </Container>


  )
}

export default Tours
