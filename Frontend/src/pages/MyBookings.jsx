import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/mybooking.css'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';

import axios
  from 'axios';
const MyBookings = () => {


  const user = localStorage.getItem('userId');
  const [bookings, setBookings] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // useEffect(() => {
  //   async function fetchBookings() {
  //     try {
  //       if (user) {
  //         const response = await axios.get("http://localhost:8080/api/bookings/"); // Replace YOUR_API_ENDPOINT with your actual API endpoint
  //         setBookings(response.data);
  //         console.log(bookings);
  //         const filtered = bookings.filter((book) => (book.user.userId==user))
  //         console.log(filtered);
  //         setFiltered(filtered);
  //         console.log(filtered);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching bookings', error);
  //     }
  //   }

  //   fetchBookings();
  // }, [user]);

  useEffect(() => {
    fetchBookings(); // Fetch bookings on page load
  }, []);

  async function fetchBookings() {
    try {
      if (user) {
        const response = await axios.get("http://localhost:8080/api/bookings/");
        setBookings(response.data);
        console.log(bookings);
        const filtered = bookings.filter((book) => book.user.userId == user);
        console.log(filtered);
        setFiltered(filtered);
        console.log(filtered);
      }
    } catch (error) {
      console.error('Error fetching bookings', error);
    }
  }

  return (
    <>
      {user ? (

        <div>
          <h2>Your Bookings</h2>
          <Button onClick={fetchBookings}>Fetch</Button>
          {bookings.length > 0 ? (
            <Table className="table-custom" striped bordered hover>
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Booking Date</th>
                  <th>Contact No</th>
                  <th>Total Cost</th>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Travelers</th>
                  {/* Add more table headers as needed */}
                </tr>
              </thead>
              <tbody>
                {filtered.map((booking) => (
                  <tr key={booking.bookingId}>
                    <td>{booking.bookingId}</td>
                    <td>{booking.bookingDate}</td>
                    <td>{booking.contactNo}</td>
                    <td>{booking.totalCost}</td>
                    <td>{booking.custName}</td>
                    <td>{booking.email}</td>
                    <td>{booking.travelers}</td>
                    {/* Add more table cells as needed */}
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      ) : (
        <div className='cent'>
          <h3>Please login first</h3>
          <Button>
            <Link to='/login'>Login</Link>
          </Button>
        </div>
      )}
    </>
  )
}

export default MyBookings
