import React from "react"
import { Card, Button, ListGroup, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SingleItem extends React.Component {



    state = {

        data: [
            {
                id: 1,
                title: 'Hats',
                routeName: 'hats',
                url: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                items: [
                    {
                        id: 1,
                        name: 'Brown Brim',
                        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                        price: "25$",
                    },
                    {
                        id: 2,
                        name: 'Blue Beanie',
                        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                        price: "18$",
                    },
                    {
                        id: 3,
                        name: 'Brown Cowboy',
                        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                        price: "35$",
                    },
                    {
                        id: 4,
                        name: 'Grey Brim',
                        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                        price: "25$",
                    },
                    {
                        id: 5,
                        name: 'Green Beanie',
                        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                        price: "18$"
                    },
                    {
                        id: 6,
                        name: 'Palm Tree Cap',
                        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                        price: "14$"
                    },
                    {
                        id: 7,
                        name: 'Red Beanie',
                        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                        price: "18$"
                    },
                    {
                        id: 8,
                        name: 'Wolf Cap',
                        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                        price: "14$"
                    },
                    {
                        id: 9,
                        name: 'Blue Snapback',
                        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                        price: "16$"
                    },
                ],
            },
            {
                id: 2,
                title: 'Sneakers',
                routeName: 'sneakers',
                url: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                items: [
                    {
                        id: 10,
                        name: 'Adidas NMD',
                        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                        price: "220$",
                    },
                    {
                        id: 11,
                        name: 'Adidas Yeezy',
                        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                        price: "280$",
                    },
                    {
                        id: 12,
                        name: 'Black Converse',
                        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                        price: "110$",
                    },
                    {
                        id: 13,
                        name: 'Nike White AirForce',
                        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                        price: "160$",
                    },
                    {
                        id: 14,
                        name: 'Nike Red High Tops',
                        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
                        price: "160$",
                    },
                    {
                        id: 15,
                        name: 'Nike Brown High Tops',
                        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
                        price: "160$",
                    },
                    {
                        id: 16,
                        name: 'Air Jordan Limited',
                        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
                        price: "190$",
                    },
                    {
                        id: 17,
                        name: 'Timberlands',
                        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
                        price: "200$",
                    },
                ],
            },
            {
                id: 3,
                title: 'Jackets',
                routeName: 'jackets',
                url: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                items: [
                    {
                        id: 18,
                        name: 'Black Jean Shearling',
                        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                        price: "125$",
                    },
                    {
                        id: 19,
                        name: 'Blue Jean Jacket',
                        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                        price: "90$"
                    },
                    {
                        id: 20,
                        name: 'Grey Jean Jacket',
                        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                        price: "90$"
                    },
                    {
                        id: 21,
                        name: 'Brown Shearling',
                        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                        price: "165$",
                    },
                    {
                        id: 22,
                        name: 'Tan Trench',
                        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                        price: "185$",
                    },
                ],
            },
            {
                id: 4,
                title: 'Womens',
                routeName: 'womens',
                url: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                items: [
                    {
                        id: 23,
                        name: 'Blue Tanktop',
                        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                        price: "25$"
                    },
                    {
                        id: 24,
                        name: 'Floral Blouse',
                        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
                        price: "20$"
                    },
                    {
                        id: 25,
                        name: 'Floral Dress',
                        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                        price: "80$"
                    },
                    {
                        id: 26,
                        name: 'Red Dots Dress',
                        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
                        price: "80$"
                    },
                    {
                        id: 27,
                        name: 'Striped Sweater',
                        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                        price: "45$"
                    },
                    {
                        id: 28,
                        name: 'Yellow Track Suit',
                        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                        price: "135$",
                    },
                    {
                        id: 29,
                        name: 'White Blouse',
                        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                        price: "20$"
                    },
                ],
            },
            {
                id: 5,
                title: 'Mens',
                routeName: 'mens',
                url: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                items: [
                    {
                        id: 30,
                        name: 'Camo Down Vest',
                        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
                        price: "325$",
                    },
                    {
                        id: 31,
                        name: 'Floral T-shirt',
                        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
                        price: "20$"
                    },
                    {
                        id: 32,
                        name: 'Black & White Longsleeve',
                        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
                        price: "25$"
                    },
                    {
                        id: 33,
                        name: 'Pink T-shirt',
                        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
                        price: "25$"
                    },
                    {
                        id: 34,
                        name: 'Jean Long Sleeve',
                        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                        price: "40$"
                    },
                    {
                        id: 35,
                        name: 'Burgundy T-shirt',
                        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                        price: "25$",
                    },
                ],
            },
        ],
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


    add(rate) {

        let count = this.state.count + 1
        let newRate = parseInt(rate) * count
        this.setState({ count: count, amount: newRate })
    }


    remove(rate) {
        if (this.state.count >= 1) {
            let count = this.state.count - 1
            let newRate = parseInt(rate) * count
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

    addcart() {
        this.setState({ cart: false })
    }

    addcart2() {
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
                                                    this.addcart()
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

                    return <>
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
                                            this.remove(lastdata.price)
                                        }} style={{ cursor: "pointer" }}>&lt; &nbsp;</span>
                                        {this.state.count}
                                        <span onClick={() => {
                                            this.add(lastdata.price)
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


                    </>

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
