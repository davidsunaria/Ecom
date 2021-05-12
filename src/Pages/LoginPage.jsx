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

    submit = () => {
        this.context.handler5()
    }


    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 bg-success p-3">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    value={this.context.username} onChange={this.changeuser} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={this.context.pass} onChange={this.changepass}
                                />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.submit}>
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