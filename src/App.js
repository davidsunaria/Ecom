import React from "react"
import { BrowserRouter, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import HomeDynamic from "./Pages/HomeDynamic"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'


class App extends React.Component {



  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar bg="warning" expand="lg" sticky="top" className="justify-content-center">
            <Navbar.Brand ><img src="img/logo.png" alt="logo" width="70" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ml-5">
                <LinkContainer to="/" >
                  <Nav.Link className="text-light" >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/About">
                  <Nav.Link >About</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">T-Shirt</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Jeans</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Shoes</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">TROUSERS</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3"> Saree</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to="/Contact">
                  <Nav.Link >Contact Us</Nav.Link>
                </LinkContainer>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={HomeDynamic} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </BrowserRouter>
      </>
    )
  }
}



export default App;
