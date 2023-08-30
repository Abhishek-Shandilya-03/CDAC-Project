import React, { useState } from 'react'
import "./createtour.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateTour = () => {

    const user = localStorage.getItem('userRole')

    const [formData, setFormData] = useState({
        name: '',
        country: '',
        city: '',
        description: '',
        accomodation: '',
        duration: '',
        price: 1,
        activities: '',
        photourl: ''
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
            const response = await axios.post('http://localhost:8080/api/packages/', formData);

            if (response.status === 200) {
                // Show success alert
                alert('Data added successfully');
                // Clear form inputs to default values
                setFormData({
                    name: '',
                    country: '',
                    city: '',
                    description: '',
                    accomodation: '',
                    duration: '',
                    price: '',
                    activities: '',
                    photourl: ''
                });
            } else {
                console.log('Failed to add data');
            }
        } catch (error) {
            console.error('Error adding data', error);
        }
    };

    var pid = 0;
    const change = (e) => {
        pid = e.target.value;
        console.log(pid)
    }

    const handleDelete = async (e) => {
        const res = await axios.delete(`http://localhost:8080/api/packages/${pid}`)
        if (res.status === 200) {
            alert("package with id : " + pid + " is deleted")
        }
    }

    //update
    const [updateFormData, setUpdateFormData] = useState({
        
        name: '',
        country: '',
        city: '',
        description: '',
        accomodation: '',
        duration: '',
        price: 1,
        activities: '',
        photourl: ''
    });
    
    var updateId = '';
    const fetch =(e) =>{
        updateId=e.target.value;
        
    }

    const handleUpdateChange = (e) => {
        setUpdateFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleFetch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/packages/${updateId}`);
            setUpdateFormData(response.data);
            console.log(updateFormData)
        } catch (error) {
            console.error('Error fetching package details', error);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            console.log(updateFormData)
            const response = await axios.put(`http://localhost:8080/api/packages/${updateId}`, updateFormData);
            if (response.status === 200) {
                alert('Data updated successfully');
                // Clear update form
                // setUpdateFormData({
                    
                //     // other form fields
                // });
            } else {
                console.log('Failed to update data');
            }
        } catch (error) {
            console.error('Error updating data', error);
        }
    };


    return (
        <>
            {user === 'ADMIN' ?
                <section className='home-section'>
                    <Form className='create-form' onSubmit={handleSubmit}>
                        <Row className="mb-3 form-row">
                            <Col>
                                <h2>Add Package</h2>
                                <Form.Group as={Col} controlId="name" >
                                    <Form.Label>Package Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter package name" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="country" >
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Enter country" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="city" >
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter city" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Description" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="accomodation">
                                    <Form.Label>Accomodation</Form.Label>
                                    <Form.Control type="text" placeholder="Accomodation" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="duration">
                                    <Form.Label>Duration</Form.Label>
                                    <Form.Control type="text" placeholder="Duration e.g. 3N 4D" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Package price per person" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="activities">
                                    <Form.Label>Activities</Form.Label>
                                    <Form.Control type="text" placeholder="Activities" onChange={handleChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="photourl">
                                    <Form.Label>Photo Url</Form.Label>
                                    <Form.Control type="text" placeholder="URL" onChange={handleChange} />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Button variant="primary" type="submit" className='btn-createTour'>
                            Submit
                        </Button>


                    </Form>

                    <Form onSubmit={handleDelete}>

                        <h2>Delete Package</h2>
                        <Form.Group as={Col} controlId="packId">
                            <Form.Label>Package Id</Form.Label>
                            <Form.Control type="number" placeholder="package id" onChange={change} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='btn-createTour'>
                            Delete
                        </Button>
                    </Form>



                    <h2>Update Package</h2>
                    <Form onSubmit={handleFetch}>
                        <h2>Fetch Package Details</h2>
                        <Form.Group as={Col} controlId="packId">
                            <Form.Label>Package Id</Form.Label>
                            <Form.Control type="number" placeholder="package id" onChange={fetch} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='btn-createTour'>
                            Fetch Details
                        </Button>
                    </Form>

                    <Form onSubmit={handleUpdate}>
                        <h2>Update Package</h2>
                        <Form.Group as={Col} controlId="name" >
                            <Form.Label>Package Name</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.name} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="country" >
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.country} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="city" >
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.city} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.description} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="accomodation">
                            <Form.Label>Accomodation</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.accomodation} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="duration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.duration} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder={updateFormData.price} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="activities">
                            <Form.Label>Activities</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.activities} onChange={handleUpdateChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="photourl">
                            <Form.Label>Photo Url</Form.Label>
                            <Form.Control type="text" placeholder={updateFormData.photourl} onChange={handleUpdateChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className='btn-createTour'>
                            Update
                        </Button>
                    </Form>

                    {/* <div id="show">
                package
            </div> */}

                </section>
                : <div className='cent'>
                    <h3>You are not authorized</h3>
                    <Button><Link to='/login'>Login</Link></Button>
                </div>}
        </>

    )
}

export default CreateTour
