import React from 'react'
import "./createtour.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


// let arr = [];
// function click() {
//     const packageData = {
//         packageName: document.getElementById("formGridName").value,
//         description: document.getElementById("formGridDesc").value,
//         accommodation: document.getElementById("formGridAcc").value,
//         duration: document.getElementById("formGridDur").value,
//         price: parseFloat(document.getElementById("formGridPrice").value),
//         activities: document.getElementById("formGridActiv").value.split(", "),
//         photoUrl: document.getElementById("formGridUrl").value
//     };

//     arr.push(packageData);
//     console.log(arr.toLocaleString);
//     document.getElementById("show").innerHTML=arr.forEach(obj => {
//         console.log(`Name: ${obj.packageName}, description: ${obj.description}`);
//       });;
// }






const CreateTour = () => {
    return (
        <section>
            <Form className='create-form'>
                <Row className="mb-3 form-row">
                    <h2>Add Package</h2>
                    <Form.Group as={Col} controlId="formGridName" >
                        <Form.Label>Package Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter package name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDesc">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridAcc">
                        <Form.Label>Accomodation</Form.Label>
                        <Form.Control type="text" placeholder="Accomodation" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDur">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" placeholder="Duration e.g. 3N 4D" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Package price per person" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridActiv">
                        <Form.Label>Activities</Form.Label>
                        <Form.Control type="text" placeholder="Activities" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridUrl">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="text" placeholder="URL" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" className='btn-createTour'>
                    Submit
                </Button>


            </Form>

            {/* <div id="show">
                package
            </div> */}

        </section>
    )
}

export default CreateTour
