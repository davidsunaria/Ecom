import React from "react"
import { Card, Button, ListGroup, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ShopContext } from './context';


class SingleItem extends React.Component {
    static contextType = ShopContext;


    state = {

        data: this.context.products,
        count: 0,
        amount: 0,
        cart: true,
        show: false,
        show2: false
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }


    add(rate, batch) {
        // console.log(batch, rate)
        let count = this.state.count + 1
        let newRate = parseInt(rate) * count
        // this.context.carts.push({ ...lastdata })
        this.context.handler(batch)
        this.setState({ count: count, amount: newRate })

    }


    remove(rate, batch) {
        //console.log(batch)
        if (this.state.count >= 1) {
            let count = this.state.count - 1
            let newRate = parseInt(rate) * count
            this.context.handler2()
            this.setState({ count: count, amount: newRate })
        }
        else {
            let linethrough = ""
            this.setState({ line: linethrough })
        }

    }

    // cartcondition() {
    //     if (this.state.count > 5) {
    //         this.setState({
    //             show2: true
    //         })
    //         return <>
    //             <Modal show={this.state.show2} onHide={this.handleClose}>
    //                 <Modal.Header closeButton>
    //                     <Modal.Title>Modal heading</Modal.Title>
    //                 </Modal.Header>
    //                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    //                 <Modal.Footer>
    //                     <Button variant="secondary" onClick={this.handleClose}>
    //                         Close
    //              </Button>
    //                     <Button variant="primary" onClick={this.ControlhandleClose}>
    //                         Save Changes
    //              </Button>
    //                 </Modal.Footer>
    //             </Modal>
    //         </>
    //     }

    // }

    addcart(id) {
        this.context.handler(id)
        this.setState({ cart: false, count: 1 })
    }

    addcart2() {
        this.context.handler3()
        this.setState({ cart: true, count: 0, amount: 0 })
    }



    selectedItem() {
        let data = this.state.data.filter((SingleItem) => {
            if (SingleItem.title == this.props.match.params.title) {
                return true
            }
            else {
                return false
            }

        })



        let finalData = data.map((Singleproduct) => {
            // console.log(Singleproduct.items)
            return Singleproduct.items.filter((filterData) => {
                if (filterData.id == this.props.match.params.id) {
                    return true
                }
                else {
                    return false
                }
            })
        })

        return finalData.map((finalItem) => {

            return finalItem.map((lastdata) => {

                if (this.state.cart == true) {

                    return <div className="container" key={lastdata.id}>
                        <div className="row">
                            <div className="col-md-5">
                                <ListGroup className="mt-4 ">
                                    <ListGroup.Item variant="warning"> <h2 className=" text-center text-dark">
                                        Item Detail is Below :</h2></ListGroup.Item>
                                    <ListGroup.Item variant="primary"><h5 > Product Id :&nbsp;&nbsp;{lastdata.id}</h5></ListGroup.Item>
                                    <ListGroup.Item variant="primary"><h5>Product Name :&nbsp;&nbsp;&nbsp; {lastdata.name}</h5></ListGroup.Item>
                                    <ListGroup.Item variant="primary"><h5>Price :&nbsp;&nbsp;&nbsp;{lastdata.price}
                                    </h5></ListGroup.Item>
                                    <ListGroup.Item variant="primary"><h5>Catagory : &nbsp;&nbsp; {this.props.match.params.title}</h5></ListGroup.Item>
                                    <ListGroup.Item variant="primary">
                                        <h5>Description : &nbsp;&nbsp;<span className="font10 text-justify">Some quick example text  build on  card title
                                       </span></h5>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="col-md-2"></div>
                            <div className="col-md-5 col-sm-12 mt-4 " key={lastdata.id}>
                                <Card style={{ width: '18rem' }} >
                                    <Card.Img variant="top" src={lastdata.imageUrl} />
                                    <Card.Body>
                                        <Card.Title>{lastdata.name} {lastdata.price}</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
             </Card.Text>
                                        <Link to={this.props.match.params.id}  >
                                            <Button variant="primary" className={this.state.line}
                                                onClick={() => {
                                                    this.addcart(this.props.match.params.id)
                                                }}
                                            >Add to Cart</Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div >
                        </div>
                    </div>

                }

                else {

                    return <div key={lastdata.id}>
                        <h3 className="text-center text-white bg-primary mt-3 pb-2 pt-2">Order Summary</h3>
                        <div className="container jumbotron mt-5">
                            <div className="row text-center">
                                <div className="col-md-2">
                                    <h2>Product</h2><br />
                                    <img src={lastdata.imageUrl} alt="cartImg" className="cart-img" />
                                </div>
                                <div className="col-md-3">
                                    <h2>Description</h2><br /><br />
                                    <h5>{lastdata.name}</h5>
                                </div>
                                <div className="col-md-2">
                                    <h2>Quantity</h2><br /><br />
                                    <h5>
                                        <span onClick={() => {
                                            this.remove(lastdata.price, lastdata.id)
                                        }} style={{ cursor: "pointer" }}>&lt; &nbsp;</span>
                                        {this.state.count}
                                        <span onClick={() => {
                                            this.add(lastdata.price, lastdata.id)
                                        }} style={{ cursor: "pointer" }} >&nbsp; &gt;</span>
                                        {this.condition}
                                    </h5>
                                </div>
                                <div className="col-md-2">
                                    <h2>Price</h2><br /><br />
                                    <h5>{this.state.amount + "$"}</h5>
                                </div>
                                <div className="col-md-3">
                                    {/* <h2>Product</h2> */}
                                    <br /><br /><br /><br />
                                    <button className="btn btn-primary  pl-4 pr-4"
                                        onClick={() => {
                                            this.addcart2()
                                        }}>Cancel Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4 text-center">
                                    {/* <Button variant="success" onClick={() => {
                                        this.add(lastdata.price)
                                    }}>Add Item </Button>
                                    <Button className="ml-2" variant="primary" onClick={() => {
                                        this.remove(lastdata.price)
                                    }}>Remove Item </Button> */}
                                    <Button variant="success" onClick={this.handleShow}>
                                        Buy Now
                                    </Button>

                                    <Modal
                                        show={this.state.show}
                                        onHide={this.handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                    >

                                        <Modal.Header closeButton>
                                            <Modal.Title >Total Price is : {this.state.amount}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>

                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Your Name*</Form.Label>
                                                    <Form.Control type="email" placeholder="Your Name*" />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Email address*</Form.Label>
                                                    <Form.Control type="email" placeholder="name@example.com" />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label>Address*</Form.Label>
                                                    <Form.Control as="textarea" rows={3} />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={this.handleClose}>
                                                Payment Info
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>

                        </div>


                    </div>

                }



            })

        })

    }







    render() {




        //  console.log(this.props.match.params)
        return (
            <>


                {this.selectedItem()}
                {/* {this.cartcondition()} */}



            </>
        )
    }
}

export default SingleItem
