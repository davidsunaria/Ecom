import React from "react"
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ShopContext } from './context';
class Item extends React.Component {

    static contextType = ShopContext;
    state = {

        data: this.context.products
    }




    getCatagory() {
        return this.state.data.map((singleItem) => {

            return <div className="col-md-4 col-sm-12 mt-4" key={singleItem.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={singleItem.url} />
                    <Card.Body>
                        <Card.Title>{singleItem.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <div className="extra">
                            <h2 className="text-center text-white mt-5">{singleItem.title}</h2>
                        </div>
                        <Link to={this.props.match.path + "/" + singleItem.title}  >
                            <Button variant="primary">Shop Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>



        })
    }






    render() {
        // console.log(this.props.match.url)
        return (
            <>
                <div className="container">
                    <h1 className="text-center text-white bg-dark mt-3 p-1"> <marquee width="100%" direction="left" >
                        There are 20% discount for every item  </marquee></h1>
                    <div className="row">
                        {this.getCatagory()}
                    </div>

                </div>
            </>
        )
    }
}

export default Item