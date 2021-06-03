import React from "react"
import { Card, Button, Modal, } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import { ShopContext } from './context';




class ItemCollection extends React.Component {

    static contextType = ShopContext;
    state = {

        data: this.context.products,
        show: false,
        count: 0,
        rate: 0
    }

    handleShow = (id) => {
        let count = this.state.count + 1
        this.context.handler(id)
        this.setState({
            show: false,
            count: count,
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }
    getCatagoryWise() {
        let select = this.state.data.filter((singleCatagory) => {
            if (singleCatagory.title == this.props.match.params.title) {
                return true
            }
            else {
                return false
            }
        })

        return select.map((singleData) => {
            return singleData.items.map((singleValue) => {
                //  console.log(singleValue.name)
                return <div className="col-md-4 col-sm-12 mt-4 " key={singleValue.id}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={singleValue.imageUrl} />
                        <Card.Body>
                            <Card.Title>{singleValue.name} {singleValue.price}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Link to={this.props.match.params.title + "/" + singleValue.id}  >
                                <Button variant="success">Shop Now</Button>
                            </Link>
                            <Button variant="primary" onClick={() => {
                                this.handleShow(singleValue.id)
                            }} className="ml-3">
                                Add to Cart
                           </Button>
                            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Total Item: {this.state.count}</Modal.Title><br />
                                </Modal.Header>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                 </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                    </Card>
                </div >
            })

        })


    }






    render() {

        let item = this.props.match.params.title

        if (item == "Mens" || item == "Womens") {
            item = this.props.match.params.title + " Items"
        }

        console.log(this.props.match.params)
        return (
            <>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col">
                            <h1 className="text-center text-white bg-dark mt-3"> <marquee width="100%" direction="left" >
                                There are 20% discount for every {item}  </marquee></h1>
                        </div>
                    </div>
                    <div className="row">
                        {this.getCatagoryWise()}
                    </div>
                </div>
            </>
        )
    }
}

export default ItemCollection