import React from "react"
import { ShopContext } from './context';
import { Card, Button, Modal, Form, Tab, Row, Col, Sonnet, Nav } from "react-bootstrap"
import { BrowserRouter, Link, Route } from 'react-router-dom';
//import Paymentdone from "./Paymentdone";


class Cart extends React.Component {

    state = {
        show: false,
        currentvalue: null,
        currentvalue2: null,
        currentvalue3: null,
        name: null,
        address: null,
        email: null,
        detail: true,
        btntext: true
    }


    static contextType = ShopContext;

    name = (event) => {
        let newValue = event.target.value
        this.setState({
            currentvalue: newValue
        })
    }

    address = (event) => {
        let newValue = event.target.value
        this.setState({
            currentvalue3: newValue
        })
    }
    email = (event) => {
        let newValue = event.target.value
        this.setState({
            currentvalue2: newValue
        })
    }


    buy = () => {
        if (this.context.log == false) {
            this.props.history.push("login");
        }

        else {
            this.setState({
                show: true,
                detail: true,
                btntext: false
            })
        }

    }

    buy2 = () => {
        if (this.context.log == false) {
            this.props.history.push("login");
        }

        else {
            this.setState({
                show: true,
                detail: true,
                // btntext: true
            })
        }

    }


    paymentInfo = () => {
        if (this.context.log == false) {
            this.props.history.push("login");
        }

        else {
            this.setState({
                show: true,
                detail: false
            })
        }

    }

    handleClose = () => {

        this.setState({
            show: false,
            name: this.state.currentvalue,
            email: this.state.currentvalue2,
            address: this.state.currentvalue3
        })
        // this.state.currentvalue = ""
        // this.state.currentvalue2 = ""
        this.state.currentvalue3 = ""

    }



    cartsData() {
        return this.context.carts.map(SingleItem => {
            return <div className="col-md-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={SingleItem.imageUrl} />
                    <Card.Body>
                        <Card.Title>{SingleItem.name + "(" + SingleItem.count + ")"}</Card.Title>
                        <Card.Title>{"Price" + "=" + SingleItem.price}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        })
    }

    render() {

        let btn = null

        if (this.state.btntext == true) {

            btn = <Button variant="success" onClick={this.buy} >
                ADD Addess
        </Button>
        }

        else {


            btn = <Button variant="success" onClick={this.buy2} >
                Change Addess
        </Button>

        }


        let model = null

        if (this.state.detail == true) {

            model = <Modal
                show={this.state.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Payment Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>

                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name*</Form.Label>
                            <Form.Control type="email" placeholder="Your Name*"
                                value={this.state.currentvalue} onChange={this.name} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address*</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com"
                                value={this.state.currentvalue2} onChange={this.email} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control as="textarea" rows={3}
                                value={this.state.currentvalue3} onChange={this.address} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={this.handleClose}>
                Close
</Button>  */}
                    <Button variant="primary" onClick={this.handleClose}>Proceed</Button>
                </Modal.Footer>
            </Modal>

        }

        else {

            model = <Modal
                show={this.state.show}
                onHide={this.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Payment Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={5}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Credit/Debit Card</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Net banking</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">UPI</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth">Cash On Deleviery </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={7}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Form onSubmit={this.submit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Card Number</Form.Label>
                                                <Form.Control type="text" placeholder="Enter email"
                                                    value={this.context.username} onChange={this.changeuser} />

                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Name On Card</Form.Label>
                                                <Form.Control type="text" placeholder="Password"
                                                    value={this.context.pass} onChange={this.changepass}
                                                />
                                            </Form.Group>
                                            {/* <Button variant="success" type="submit" >
                                                PAY  {this.context.subTotal +
                                                    "$"} SECURELY
                                            </Button> */}
                                        </Form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h4>Select bank</h4>
                                        <img
                                            className="d-block w-100"
                                            src="img/bankLogo.jpg"
                                        />
                                        {/* <Button variant="success" type="submit" className="mt-3 ml-5" >
                                            PAY  {this.context.subTotal} SECURELY
                                            </Button> */}
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Form onSubmit={this.submit}>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Enter Your UPI ID</Form.Label>
                                                <Form.Control type="text" placeholder="UPI ID"
                                                    value={this.context.username} onChange={this.changeuser} />

                                            </Form.Group>


                                            {/* <Button variant="success" type="submit" className=" ml-5" >
                                                PAY  {this.context.subTotal} SECURELY
                                            </Button> */}
                                        </Form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <h3>Cash On Deleivery</h3>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={this.handleClose}>
            Close
</Button>  */}
                    <Link to="/Paymentdone">  <Button variant="primary" onClick={this.handleClose}>
                        PAY  {this.context.subTotal
                            + "$"} SECURELY
                    </Button></Link>
                </Modal.Footer>
            </Modal>

        }



        let userdetail = null
        if (this.context.carts.length > 0 && this.state.name !== null && this.state.email !== null && this.state.address !== null) {
            userdetail = <div className="row mt-3" >
                <div className="col-md-3"></div>
                <div className="col-md-6 bg-info text-white">
                    <h1 className="text-center">Name: {this.state.name}</h1>
                    <h1 className="text-center">Email: {this.state.email}</h1>
                    <h1 className="text-center">Address: {this.state.address}</h1>
                </div>
            </div>
        }
        console.log(this.props)
        return (
            <>


                <div className="container">
                    <h3 className="text-center text-white bg-primary mt-3 pb-2 pt-2">Cart Summary</h3>
                    <div className="row">
                        {this.cartsData()}

                    </div>
                    {userdetail}
                    <div className="text-center mt-3 mb-3">
                        {btn}
                        <Button variant="primary" className="ml-3" onClick={this.paymentInfo} >
                            Proceed to Payment
                                    </Button>
                    </div>
                </div>
                {model}

                {/* <Route path="/Paymentdone" component={Paymentdone} /> */}

            </>
        )
    }
}

export default Cart;