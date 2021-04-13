import React from "react"
import { ShopContext } from './context'
import { BrowserRouter, Route, Link } from 'react-router-dom';


class SingleProduct extends React.Component {

    //static contextType = ShopContext

    // getProducts() {
    //       this.context.catagory.map((SingleItem))
    // }

    getData() {

        return <h2> {this.props.match.params.title}</h2>
    }


    render() {
        console.log(this.props.match.params.title)
        return (
            <>
                <h1>{this.props.match.params.title}</h1>
                {this.getData()}
            </>
        )
    }


}

export default SingleProduct