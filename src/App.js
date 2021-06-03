import React from "react"
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import HomeDynamic from "./Pages/HomeDynamic"
import ItemRoute from "./Pages/ItemRoute"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Hats from "./Pages/Hats"
import LoginPage from "./Pages/LoginPage"
import Paymentdone from "./Pages/Paymentdone";

import { Navbar, Nav, NavDropdown, Form, FormControl, Badge, Modal, Table, Button, Card } from 'react-bootstrap'
import { ShopContext } from './Pages/context';
import productsData from './data.json';
import SearchData from "./Pages/SearchData"
import SingleItem from "./Pages/SingleItem";
import Cart from "./Pages/Cart"
import { findAllByDisplayValue } from "@testing-library/dom";
class App extends React.Component {

  state = {
    products: productsData,
    carts: [],
    show: false,
    totalPrice: 0,
    subTotal: 0,
    currentItem: null,
    log: false,
    username: "",
    pass: "",
    password: "admin",
    loginUser: "admin",
    btnText: "Login",
    selectItem: null,
    submit: false,
    subcount: "",
    proceed: true

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
  handleClose2 = () => {
    this.setState({
      show: false,
      proceed: false
    })
  }

  getcart(selectedId) {
    let tempcart = [...this.state.carts]
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
    let check = tempcart.every(singleData => {
      return singleData.id !== selectedId
    })
    if (check) {
      this.state.carts.push({ ...data2 })
      this.setState({
        carts: [...this.state.carts]
      }, () => {
        this.makeTotal()
      }
      )
    }
    else {
      let iteminc = tempcart.find(singleData => {
        return singleData.id == selectedId
      })
      iteminc.count += 1
      iteminc.total = parseInt(iteminc.price) * iteminc.count
      let oldItem = this.state.carts.filter(singleData => {
        return singleData.id !== selectedId
      })
      this.setState({
        carts: [...oldItem, { ...iteminc }]
      }, () => {
        this.makeTotal()
      })
    }

  }

  popcart() {
    this.state.carts.pop()
    this.setState(this.state)
  }

  removeAll() {
    this.setState({ carts: [] })
  }

  removeRow(id) {
    console.log(id)
    let item = this.state.carts.filter(singleData => {
      return singleData.id !== id
    })
    // this.state.carts[index].total = 0
    // this.state.carts.splice(index, 1)
    this.setState({
      carts: [...item]
    }, () => {
      this.makeTotal()
    })
  }

  makeTotal = () => {
    let subtotal = 0
    let subCount = 0
    this.state.carts.map((singleData) => {
      subtotal = subtotal + singleData.total
    })
    this.state.carts.map((singleData) => {
      subCount = subCount + singleData.count
    })

    this.setState({
      subTotal: subtotal,
      subcount: subCount
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

  addCount = (id) => {
    console.log("add count id", id)
    let tempCart = [...this.state.carts]
    let selectItem = tempCart.find(singleData => singleData.id === id)
    //console.log(selectItem)
    // let index = tempCart.indexOf(selectItem)
    // let product = tempCart[index]
    console.log("addcounttt", selectItem)
    selectItem.count++
    selectItem.total = parseInt(selectItem.price) * selectItem.count

    this.setState(() => {
      return {
        carts: [...this.state.carts]
      }

    }, () => {
      this.makeTotal()
    })
  }

  MinusCount = (id) => {
    //console.log(id)
    let tempCart = [...this.state.carts]
    let selectItem = tempCart.find(singleData => singleData.id === id)
    // // console.log(selectItem)
    // let index = tempCart.indexOf(selectItem)
    // let product = tempCart[index]
    // product.count = product.count - 1;
    if (selectItem.count > 0) {
      selectItem.count--
      selectItem.total = parseInt(selectItem.price) * selectItem.count
      this.setState(() => {
        return {
          carts: [...this.state.carts]
        }

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
    if (this.state.currentItem !== null) {

      let regex = new RegExp(this.state.currentItem, "gi")
      //console.log(regex)
      let catagory = this.state.products.filter(singleData => {
        return singleData.title.match(regex)
      })
      console.log("regexvalue", catagory)
      let selectedData = catagory.map(singleData => {
        return singleData.items.map(singleItem => {
          return <div className="col-md-4 mt-3" key={singleItem.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={singleItem.imageUrl} />
              <Card.Body>
                <Card.Title>{singleItem.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        })
      })
      console.log(selectedData)

      this.setState({
        selectItem: selectedData,
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
              this.MinusCount(singleData.id)
            }}>&lt; &nbsp;</span>
            {singleData.count}
            <span style={{ cursor: "pointer" }} onClick={() => {
              this.addCount(singleData.id)
            }}
            >&nbsp; &gt;</span>
          </td>
          <td>{price}</td>
          <td><button className="btn btn-info" onClick={() => {
            this.removeRow(singleData.id)
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
  }

  logout = () => {
    this.setState({
      log: false
    })
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

  payment() {
    <Route path="/login" component={LoginPage} />
    // this.setState({
    //   log: false
    // })

  }

  onsubmit() {
    if (this.state.username == this.state.loginUser &&
      this.state.pass == this.state.password) {
      this.setState({
        username: "",
        log: true,
        pass: "",
      })
    }

  }


  render() {
    // console.log("carts number:", this.state.carts)

    // if (this.state.proceed == false) {
    //   <Route path="/login" component={LoginPage} />
    // }
    console.log(this.props.match)
    let page = null


    page = <>
      <Route exact path="/" >
        <HomeDynamic />
      </Route>
      <Route path="/About" component={About} />
      <Route path="/item" component={ItemRoute} />
      <Route path="/Hats" component={Hats} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={LoginPage} />
      <Route path="/cart" component={Cart} />
      <Route path="/Paymentdone" component={Paymentdone} />
    </>

    // if (this.state.log == "change") {
    //   page =
    //     <SearchData />
    // }

    return (
      <ShopContext.Provider value={{
        ...this.state, handler: this.getcart.bind(this),
        handler2: this.popcart.bind(this), handler3: this.removeAll.bind(this),
        handler4: this.changeuser.bind(this), handler5: this.onsubmit.bind(this),
        handler6: this.changepassword.bind(this), handler7: this.payment.bind(this)
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
                <LinkContainer to="/About" >
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

              {
                this.state.log === false ? <LinkContainer className="btn btn-danger mr-4" to="/login">
                  <Nav.Link >Login</Nav.Link>
                </LinkContainer> : <LinkContainer className="btn btn-danger mr-4" to="/" onClick={this.logout}>
                  <Nav.Link >Logout</Nav.Link>
                </LinkContainer>
              }

              <Button variant="primary" className="mr-3" onClick={this.handleShow}>
                Cart <Badge variant="light">{this.state.subcount}</Badge>
                <span className="sr-only">unread messages</span>
              </Button>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.currentItem} onChange={this.inputValue} />
                <Button variant="outline-success" onClick={this.submitValue}>Search</Button>
              </Form>
            </Navbar.Collapse>

          </Navbar>
          {page}

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
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={this.handleClose}>
              Close
          </Button> */}
              <Link to="/cart">
                <button onClick={this.handleClose} className="btn btn-info">
                  Proceed
                </button>
              </Link>
            </Modal.Footer>
          </Modal>


        </BrowserRouter>

      </ShopContext.Provider >
    )
  }
}



export default App;
