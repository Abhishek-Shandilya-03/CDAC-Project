import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import tours from "../shared/demo_data"
import "../styles/tours.css"
import { Container } from 'react-bootstrap';
import Booking from '../components/Booking/Booking';




const TourDetails = () => {
  const { id } = useParams();
  
  let pack = tours.filter(obj => obj.id == id);
  

  return (
    <Container>
      <Row className='overview'>
        <Col lg='8' className='column'>
          <div className='package-overview'>
            <img src={pack[0].photoUrl} />

          </div>
          <div className='describe'>
             <h3>{pack[0].packageName}</h3>
             <h4>Counry: {pack[0].country}</h4>
             <p>
              <strong>Price:</strong> INR.{pack[0].price} /per person<br/>
             <strong>Description:</strong> {pack[0].description}<br/>
             <strong>Duration:</strong> {pack[0].duration}<br/>
             <strong>Accomodation:</strong> {pack[0].accommodation}<br/>
             </p>
             
          </div>
        </Col>
        <Col lg="4">
          <Booking pack={pack[0]}/>
        </Col>
      </Row>






    </Container>
  )
}

export default TourDetails
