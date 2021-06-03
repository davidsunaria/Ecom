import React from "react"
import { ShopContext } from './context';

class SearchData extends React.Component {
    static contextType = ShopContext;





    render() {
        let data = this.context.selectItem

        return (
            <>
                <div className="container">
                    <div className="row">
                        {data}
                    </div>
                </div>

            </>
        )
    }
}

export default SearchData