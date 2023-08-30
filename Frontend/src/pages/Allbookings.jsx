import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import '../styles/mybooking.css'

const Allbookings = () => {

  const userid=localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRole')

  const [bookings, setBookings] = useState([]);
  const handleClick = async (e) => {
    const res = axios.get("http://localhost:8080/api/bookings/");

    const data = (await res).data;

    setBookings(data)
  }

  return (
    <>
      {userid && userRole ==='ADMIN'? 
      <div className='cent'>
          <Button onClick={handleClick}>Fetch Bookings</Button>
          <Table className="table-custom" striped bordered hover>
            <thead>
              <tr>
                <th>Booking id</th>
                <th>Customer Name</th>
                <th>Travelers</th>
                <th>Email</th>
                <th>Booking Date</th>
                <th>Total Cost </th>
                <th>User Id </th>
                <th>Payment Id </th>
                <th>Travel Package Id </th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booked, index) => (
                <tr key={index}>
                  <td>{booked.bookingId}</td>
                  <td>{booked.custName}</td>
                  <td>{booked.travelers}</td>
                  <td>{booked.email}</td>
                  <td>{booked.bookingDate}</td>
                  <td>{booked.totalCost}</td>
                  <td>{booked.user.userId}</td>
                  <td>{booked.payment.paymentId}</td>
                  <td>{booked.travelPackage.packId}</td>
                  <td>{booked.contactNo}</td>
                  

                </tr>
              ))}

            </tbody>
          </Table>
        </div>
        : <div className='cent'>
          <h3>Please login first</h3>
          <Button><Link to='/login'>Login</Link></Button>
        </div>}
    </>
  )
}

export default Allbookings
