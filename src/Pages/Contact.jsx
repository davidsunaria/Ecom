
import { Form, Button } from 'react-bootstrap'
function Contact() {


    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <h4 className="mt-5">Call to Us:</h4>
                        <p>We're available from 10 am - 10 pm<br /> EST, 7 days a week.</p>
                        <h5>Customer Service:</h5>
                        <p>6-146-389-574</p>
                        <h5>Careers:</h5>
                        <p>6-146-389-574</p>
                        <hr />

                        <h4 className="mt-1">Write to Us:</h4>
                        <p>Fill out our form and we will contact<br /> you within 24 hours.</p>
                        <h5>Customer Service:</h5>
                        <p>customer@example.com</p>
                        <h5>Careers:</h5>
                        <p>careers@example.com</p>
                        <hr />
                        <h4 className="mt-1"> Find Us:</h4>
                        <p>Want to visit our Offline Store?</p>

                    </div>
                    <div className="col-md-1"></div>

                    <div className="col-md-7">
                        <h1 className="mb-4 ml-2">Contact Us</h1>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Name*</Form.Label>
                                <Form.Control type="email" placeholder="Your Name*" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address*</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Title*</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Messages*</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="dark" className="border-rad0 pt-2 pb-2 pl-3 pr-3">Send Messages</Button>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact