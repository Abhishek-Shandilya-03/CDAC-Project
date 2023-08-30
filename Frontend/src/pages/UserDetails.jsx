import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { Link } from 'react-router-dom';
const UserDetails = () => {

  const user = localStorage.getItem('userId');
  const userRole = localStorage.getItem('userRole')

  const [users, setUsers] = useState([]);
  const handleClick = async (e) => {
    const res = axios.get("http://localhost:8080/user/");

    

    setUsers((await res).data)
  }

  const onDelete = async (uid) => {
    console.log(uid)
    const res = await axios.delete(`http://localhost:8080/user/${uid}`)
    if (res.status === 200) {
      alert("user with id : " + uid + " is deleted")
      handleClick();
    }
  }
  return (
    <>
      {user && userRole === 'ADMIN' ?
        <div className='cent'>
          <Button onClick={handleClick}>Fetch Users</Button>
          <Table className="table-custom" striped bordered hover>
            <thead>
              <tr>
                <th>User id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Contact </th>
                <th>Action </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.userId}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.contactNo}</td>
                  {user === (user.userId) ? null : <td><Button onClick={() => onDelete(user.userId)}>Delete</Button></td>}

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

export default UserDetails
