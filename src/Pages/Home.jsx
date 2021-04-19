import React from "react"

import { ShopContext } from './context'
import Slider from "./Carousel"
import Catagory from "./Catagory"

class Home extends React.Component {
    static contextType = ShopContext



    render() {
        //console.log(this.props.match.path)
        return (
            <>
                <ShopContext.Provider value={{ Catagory: this.context.products, brand: this.props.match.path }}>
                    <Slider />
                    <Catagory />
                </ShopContext.Provider>
            </>
        )
    }
}

export default Home