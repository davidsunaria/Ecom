import React from "react"
import { BrowserRouter, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import HomeDynamic from "./Pages/HomeDynamic"
import ItemRoute from "./Pages/ItemRoute"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Hats from "./Pages/Hats"
import Mens from "./Pages/Mens"
import Womens from "./Pages/Women"
import Shoes from "./Pages/Shoes"
import Jackets from "./Pages/Jackets"
import Item from "./Pages/Item"
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap'
import { ShopContext } from './Pages/context';
import productsData from './data.json';
class App extends React.Component {

  state = {
    products: productsData,
    carts: []
  }


  render() {
    return (
      <ShopContext.Provider value={{ ...this.state }}>
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
                  <LinkContainer to="/Hats">
                    <NavDropdown.Item>Hats</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Mens">
                    <NavDropdown.Item>Mens</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Women">
                    <NavDropdown.Item>Women</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Shoes">
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Jackets">
                    <NavDropdown.Item>Jackets</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to="/Item">
                  <Nav.Link >Item</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
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
          <Route path="/item" component={ItemRoute} />
          <Route path="/Hats" component={Hats} />
          <Route path="/Mens" component={Mens} />
          <Route path="/Women" component={Womens} />
          <Route path="/Shoes" component={Shoes} />
          <Route path="/contact" component={Contact} />
          <Route path="/Jackets" component={Jackets} />
        </BrowserRouter>
      </ShopContext.Provider>
    )
  }
}



export default App;
