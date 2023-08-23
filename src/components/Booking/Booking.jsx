import React, { useState } from 'react'
import "./booking.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const Booking = ({pack}) => {
    const{price, packageName}=pack;
    
    const serviceCharge=0.1*Number(price)
  
    const[booking, setBooking]=useState({
        Name: "",
        userEmail:"",
        phno:"",
        guests:0,
        date:"",
        packageName: packageName
    })
    const handleChange = (e) => {
        setBooking(
          (prev) => ({ ...prev, packageName: packageName, [e.target.id]: e.target.value }),
          [packageName]
        );
    };
    const totalAmount = booking.guests*Number(price);
    return (
        <div className='booking-form'>
            <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="Name">
                        <Form.Label>Customer</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={handleChange}onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="userEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="phno">
                        <Form.Label>Phon no.</Form.Label>
                        <Form.Control type="text" placeholder="Phno" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="guests">
                        <Form.Label>Number of travelers</Form.Label>
                        <Form.Control type="Number" placeholder="Enter number" onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="date">
                        <Form.Label>Date of trip</Form.Label>
                        <Form.Control type="date" placeholder="Enter Date" onChange={handleChange}/>
                    </Form.Group>
                    <strong>Total amount :</strong> Rs. {totalAmount}
                </Row>


                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Book
                </Button>
            </Form>
        </div>
    )
}

export default Booking
