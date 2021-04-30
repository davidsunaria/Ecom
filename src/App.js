import React from "react"
import { BrowserRouter, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import HomeDynamic from "./Pages/HomeDynamic"
import ItemRoute from "./Pages/ItemRoute"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Hats from "./Pages/Hats"
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Badge, Modal, Table } from 'react-bootstrap'
import { ShopContext } from './Pages/context';
import productsData from './data.json';
import SingleItem from "./Pages/SingleItem";
import { findAllByDisplayValue } from "@testing-library/dom";
class App extends React.Component {

  state = {
    products: productsData,
    carts: [],
    show: false,
    totalPrice: 0,


  }

  handleShow = () => {
    this.setState({
      show: true,
    })
  }
  handleClose = () => {
    this.setState({
      show: false
    })
  }

  getcart(selectedId) {
    let data1 = this.state.products.map((singleData) => {
      return singleData.items.find((SingleItem) => {
        if (SingleItem.id == selectedId) {
          return true
        }
        else {
          return false
        }
      })
    })

    let data2 = data1.find((singleValue) => {
      if (singleValue == undefined) {
        return false
      }
      else {
        return true
      }
    })

    // this.state.products.forEach((singleData) => {
    //   if (data2 == false) {

    //   }
    // })

    data2.count = 1
    this.state.carts.push({ ...data2 })
    this.setState(this.state)
  }

  popcart() {
    this.state.carts.pop()
    this.setState(this.state)
  }

  removeAll() {
    this.setState({ carts: [] })
  }

  priceDetail = () => {

    // let data = this.state.carts.reduce((accum = 0, current = 0) => {
    //   return parseInt(accum) + parseInt(current.price)
    //   // console.log(current)
    // })
    // return data
    let total = 0
    for (let i = 0; i < this.state.carts.length; i++) {
      total = total + parseInt(this.state.carts[i].price);

    }
    return total;

  }

  addCount = (index) => {
    //console.log(id)
    let tempCart = [...this.state.carts]
    // let selectItem = tempCart.find(singleData => singleData.id === id)
    //console.log(selectItem)
    // let index = tempCart.indexOf(selectItem)
    // let product = tempCart[index]
    tempCart[index].count++

    this.setState({
      carts: [...tempCart]
    })
  }

  MinusCount = (index) => {
    //console.log(id)
    let tempCart = [...this.state.carts]
    // let selectItem = tempCart.find(singleData => singleData.id === id)
    // // console.log(selectItem)
    // let index = tempCart.indexOf(selectItem)
    // let product = tempCart[index]
    // product.count = product.count - 1;
    if (tempCart[index].count > 0) {
      tempCart[index].count--
      this.setState({
        carts: [...tempCart]
      })
    }

  }

  cartsData() {


    return this.state.carts.map((singleData, i) => {
      let price = null;
      if (singleData.count === 1) {
        price = singleData.price
      }
      else {
        price = parseInt(singleData.price) * singleData.count
      }
      return <>
        <tr key={singleData.id}>
          <td><img src={singleData.imageUrl} className="cart-img2" /></td>
          <td>{singleData.name}</td>
          <td>{singleData.price}</td>
          <td>
            <span style={{ cursor: "pointer" }} onClick={() => {
              this.MinusCount(i)
            }}>&lt; &nbsp;</span>
            {singleData.count}
            <span style={{ cursor: "pointer" }} onClick={() => {
              this.addCount(i)
            }}
            >&nbsp; &gt;</span>
          </td>
          <td>{price}</td>
        </tr >
      </>
    })
  }


  render() {
    return (
      <ShopContext.Provider value={{
        ...this.state, handler: this.getcart.bind(this),
        handler2: this.popcart.bind(this), handler3: this.removeAll.bind(this)
      }}>
        <BrowserRouter>
          <Navbar bg="warning" expand="lg" sticky="top" className="justify-content-center">
            <Navbar.Brand ><img src="/img/logo.png" alt="logo" width="70" /></Navbar.Brand>
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
                  <LinkContainer to="/Item/Mens">
                    <NavDropdown.Item>Mens</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Item/Womens">
                    <NavDropdown.Item>Women</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Item/Sneakers">
                    <NavDropdown.Item>Shoes</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/Item/Jackets">
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

              <Button variant="primary" className="mr-3" onClick={this.handleShow}>
                Cart <Badge variant="light">{this.state.carts.length}</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
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
          <Route path="/contact" component={Contact} />
        </BrowserRouter>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>SubTotal : {this.priceDetail()}</Modal.Title>
          </Modal.Header>
          <Modal.Body><Table striped bordered hover>
            <thead>
              <tr>
                <th>Item pic</th>
                <th>Item Name</th>
                <th>Per Item price</th>
                <th>Quantity</th>
                <th>Total price</th>
              </tr>
            </thead>

            <tbody>
              {this.cartsData()}
            </tbody>
          </Table></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer>
        </Modal>

      </ShopContext.Provider>
    )
  }
}



export default App;
