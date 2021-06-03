import React from "react"
import { ShopContext } from './context';
import { Form, Button } from 'react-bootstrap'

class LoginPage extends React.Component {

    static contextType = ShopContext;

    changeuser = (event) => {
        this.context.handler4(event.target.value)
    }

    changepass = (event) => {
        this.context.handler6(event.target.value)
    }

    submit = (event) => {
        console.log(this.props, event);
        event.preventDefault();
        this.context.handler5();
        this.props.history.goBack();

    }


    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 bg-success p-3">
                        <Form onSubmit={this.submit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="text" placeholder="Enter email"
                                    value={this.context.username} onChange={this.changeuser} />

                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={this.context.pass} onChange={this.changepass}
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }
}

export default LoginPage