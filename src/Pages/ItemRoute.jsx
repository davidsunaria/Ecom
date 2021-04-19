import React from "react"
import Item from "./Item"
import { Route, Switch } from 'react-router-dom';
import ItemCollection from "./ItemCollection";
import SingleItem from "./SingleItem";
import Demo from "./demo";



class HomeDynamic extends React.Component {


    render() {
        //console.log(this.props.match.path)
        return (
            <>
                <Route exact path={this.props.match.path} component={Item} />
                <Route exact path={this.props.match.path + "/:title"} component={ItemCollection} />
                <Route exact path={this.props.match.path + "/:title" + "/:id"} component={SingleItem} />
                {/* <Route path={this.props.match.path + "/:title" + "/:id" + "/:name"} component={Demo} /> */}

            </>
        )
    }
}

export default HomeDynamic