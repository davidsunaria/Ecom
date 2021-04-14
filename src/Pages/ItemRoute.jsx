import React from "react"
import Item from "./Item"
import { Route, Switch } from 'react-router-dom';
import ItemCollection from "./ItemCollection";


class HomeDynamic extends React.Component {


    render() {
        //console.log(this.props.match.path)
        return (
            <>
                <Route exact path={this.props.match.path} component={Item} />
                <Route path={this.props.match.path + "/:title"} component={ItemCollection} />
            </>
        )
    }
}

export default HomeDynamic