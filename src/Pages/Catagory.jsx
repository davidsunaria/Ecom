import React from "react"
import { ShopContext } from './context'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Catagory extends React.Component {

    static contextType = ShopContext



    getCatagory() {
        return this.context.Catagory.map((singleItem) => {
            // console.log(singleItem)
            return <div className="col-md-4 col-sm-12 mt-4" key={singleItem.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={singleItem.url} />
                    <Card.Body>
                        <Card.Title>{singleItem.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Link to={"item/" + singleItem.title}  >
                            <Button variant="primary">Shop Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>



        })
    }






    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        {this.getCatagory()}
                    </div>

                </div>
            </>
        )
    }
}

export default Catagory