import React from "react"
import Home from "./Home"
import { Route, Switch } from 'react-router-dom';
import SingleProduct from "./SingleProduct";


class HomeDynamic extends React.Component {


    render() {
        console.log(this.props.match.path)
        return (
            <>
                <Route exact path={this.props.match.path} component={Home} />
                {/* <Route path={this.props.match.path + ":title"} component={SingleProduct} /> */}
            </>
        )
    }
}

export default HomeDynamic