import React from "react"
import { Card } from 'react-bootstrap'
import { ShopContext } from './context'


class Jackets extends React.Component {
    static contextType = ShopContext



    getHats() {

        let data1 = this.context.products.filter((singleItem) => {

            //console.log(singleItem.title)
            if (singleItem.title == "Jackets") {
                return true
            }
            else {
                return false
            }
        })

        return data1.map((singleValue) => {
            // console.log(singleValue.items)
            return singleValue.items.map((singleData) => {
                // console.log(singleData.name)
                return <>

                    <div className="col-md-4 col-sm-12 mt-4 " key={singleData.id}>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src={singleData.imageUrl} />
                            <Card.Body>
                                <Card.Title>{singleData.name} {singleData.price}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div >

                </>

            })
        })

    }




    render() {

        return (
            <>
                <div className="container">
                    <div className="row">
                        {this.getHats()}
                    </div>
                </div>
            </>
        )
    }


}

export default Jackets

