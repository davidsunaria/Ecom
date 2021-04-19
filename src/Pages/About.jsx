import React from "react"
import { Container, Row, Col } from "react-bootstrap"


class About extends React.Component {

    state = {
        clothes: [
            {
                id: 1,
                url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            },
            // {
            //     id: 2,
            //     url: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=426&q=80"
            // },
            // {
            //     id: 3,
            //     url: "https://images.unsplash.com/photo-1515651673377-6abc94e6e889?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=366&q=80"
            // },
            // {
            //     id: 4,
            //     url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"

            // }
        ]
    }

    getData() {
        return this.state.clothes.map((single) => {
            return <div className="mr-2" style={{ display: "inline-block" }} key={single.id}>
                <img src={single.url} alt="about" height="500" width="400" />
            </div>

        })
    }




    render() {

        return (
            <>
                <h3 className="text-center text-white bg-primary mt-2 pb-2 pt-2">About Us</h3>
                <Container>
                    <Row>
                        <Col md="5"> {this.getData()}</Col>
                        <Col md="7">
                            <p className="text-justify mt-4">
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                                used to demonstrate the visual form of a document or a typeface without relying on
                                meaningful content. Lorem ipsum may be used as a placeholder before final
                                copy is available. It is also used to temporarily replace text in a process
                                called greeking, which allows designers to consider the form of a webpage
                                or publication, without the meaning of the text influencing the design.
                                Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum',
                                a 1st century BC text by the Roman statesman and philosopher Cicero,
                                with words altered, added, and removed to make it nonsensical and improper Latin.
                                Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s,
                                when it was popularized by advertisements for Letraset transfer sheets.[1] Lorem ipsum
                                was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic
                                and word-processing templates for its desktop publishing program PageMaker. Other popular
                                word processors including Pages and Microsoft Word have since adopted Lorem ipsum,[2] as
                                have many LaTeX packages,[3][4] [5] web content managers such as Joomla! and WordPress, and
                                CSS libraries such as Semantic UI.[6]
                            </p>
                        </Col>

                    </Row>
                </Container>


            </>
        )
    }
}

export default About