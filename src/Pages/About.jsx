import React from "react"


class About extends React.Component {

    state = {
        clothes: [
            {
                id: 1,
                url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            },
            {
                id: 2,
                url: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=426&q=80"
            },
            {
                id: 3,
                url: "https://images.unsplash.com/photo-1515651673377-6abc94e6e889?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=366&q=80"
            },
            {
                id: 4,
                url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"

            }
        ]
    }

    getData() {
        return this.state.clothes.map((single) => {
            return <div className="mr-2" style={{ display: "inline-block" }}>
                <img src={single.url} key={single.id} alt="about" height="200" width="300" />
            </div>

        })
    }




    render() {

        return (
            <>
                <h1 style={{ textAlign: "center" }}>About Page</h1>
                { this.getData()}

            </>
        )
    }
}

export default About