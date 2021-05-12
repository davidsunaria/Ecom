import React from "react"
import { BrowserRouter, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import HomeDynamic from "./Pages/HomeDynamic"
import ItemRoute from "./Pages/ItemRoute"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Hats from "./Pages/Hats"
import LoginPage from "./Pages/LoginPage"
import { Navbar, Nav, NavDropdown, Form, FormControl, Badge, Modal, Table, Button } from 'react-bootstrap'
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
    subTotal: 0,
    currentItem: "developer",
    log: true,
    username: "",
    pass: "",
    password: "admin",
    loginUser: "admin",
    btnText: "Login"


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
    data2.total = parseInt(data2.price) * data2.count
    this.state.carts.push({ ...data2 })
    this.setState({ carts: [...this.state.carts] }, () => {
      this.makeTotal()
    }
    )
  }

  popcart() {
    this.state.carts.pop()
    this.setState(this.state)
  }

  removeAll() {
    this.setState({ carts: [] })
  }

  removeRow(index) {
    console.log(index)
    this.state.carts[index].total = 0
    this.state.carts.splice(index, 1)
    this.setState({
      carts: [...this.state.carts]
    }, () => {
      this.makeTotal()
    })
  }

  makeTotal = () => {
    let subtotal = 0
    this.state.carts.map((singleData) => {
      subtotal = subtotal + singleData.total
    })
    this.setState({
      subTotal: subtotal
    })

  }

  // priceDetail = () => {

  //   // let data = this.state.carts.reduce((accum = 0, current = 0) => {
  //   //   return parseInt(accum) + parseInt(current.price)
  //   //   // console.log(current)
  //   // })
  //   // return data
  //   let total = 0
  //   for (let i = 0; i < this.state.carts.length; i++) {
  //     total = total + parseInt(this.state.carts[i].price);

  //   }
  //   return total;

  // }

  addCount = (index) => {
    //console.log(id)
    let tempCart = [...this.state.carts]
    // let selectItem = tempCart.find(singleData => singleData.id === id)
    //console.log(selectItem)
    // let index = tempCart.indexOf(selectItem)
    // let product = tempCart[index]
    tempCart[index].count++
    tempCart[index].total = parseInt(tempCart[index].price) * tempCart[index].count

    this.setState({
      carts: [...tempCart]

    }, () => {
      this.makeTotal()
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
      tempCart[index].total = parseInt(tempCart[index].price) * tempCart[index].count
      this.setState({
        carts: [...tempCart]

      }, () => {
        this.makeTotal()
      })
    }

  }

  inputValue = (event) => {
    let currentItem = event.target.value
    this.setState({
      currentItem: currentItem
    })
  }

  submitValue = () => {
    let searchData = this.state.products.filter(singleData => {
      if (this.state.currentItem == singleData.title) {
        return true
      }
      else {
        return false
      }
    })
    console.log(searchData)
    // return this.state.map.searchData(singleData => {

    // })
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
          <td><button className="btn btn-info" onClick={() => {
            this.removeRow(i)
          }}>Del</button></td>
        </tr >
      </>
    })
  }

  login = () => {
    if (this.state.log == true) {
      this.setState({
        log: false
      })
    }
    else {
      this.setState({
        log: true
      })
    }

  }
  changeuser(value) {
    this.setState({
      username: value
    })
  }

  changepassword(value) {
    this.setState({
      pass: value
    })
  }

  onsubmit() {
    if (this.state.username == this.state.loginUser &&
      this.state.pass == this.state.password) {
      this.setState({
        username: "",
        log: true,
        pass: "",
        btnText: "Logout"
      })
    }
    else {
      this.setState({
        log: false,
        btnText: "Login"
      })
    }

  }


  render() {
    // console.log("carts number:", this.state.carts)
    let page = null
    if (this.state.log == true) {
      page = <>
        <Route exact path="/" component={HomeDynamic} />
        <Route path="/About" component={About} />
        <Route path="/item" component={ItemRoute} />
        <Route path="/Hats" component={Hats} />
        <Route path="/contact" component={Contact} />
      </>
    }
    else {
      page =
        <LoginPage />

    }
    return (
      <ShopContext.Provider value={{
        ...this.state, handler: this.getcart.bind(this),
        handler2: this.popcart.bind(this), handler3: this.removeAll.bind(this),
        handler4: this.changeuser.bind(this), handler5: this.onsubmit.bind(this),
        handler6: this.changepassword.bind(this),
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
              <button className="btn btn-danger mr-4" onClick={this.login}>{this.state.btnText}</button>

              <Button variant="primary" className="mr-3" onClick={this.handleShow}>
                Cart <Badge variant="light">{this.state.carts.length}</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.currentItem} onChange={this.inputValue} />
                <Button variant="outline-success" onClick={this.submitValue}>Search</Button>
              </Form>
            </Navbar.Collapse>

          </Navbar>

          {page}
        </BrowserRouter>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            {/* <Modal.Title>SubTotal : {this.priceDetail()}</Modal.Title> */}
            <Modal.Title>SubTotal : {this.state.subTotal}</Modal.Title>
          </Modal.Header>
          <Modal.Body><Table striped bordered hover>
            <thead>
              <tr>
                <th>Item pic</th>
                <th>Item Name</th>
                <th>Per Item price</th>
                <th>Quantity</th>
                <th>Total price</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.cartsData()}
            </tbody>
          </Table></Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
          </Button>
          </Modal.Footer> */}
        </Modal>

      </ShopContext.Provider>
    )
  }
}



export default App;
