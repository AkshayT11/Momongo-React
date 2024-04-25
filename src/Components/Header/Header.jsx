import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Nav, Navbar, Container,NavDropdown  } from 'react-bootstrap';
import logo from "../../assets/anlogo.png";
import { Link } from 'react-router-dom';
import menu from "../../json-api/menu.json"


function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-deepblue text-white pb-2">
      <Container >
        <Link to="/">
        <Navbar.Brand >
            <img src= {logo} style={{width:"150px"}}   alt="logo"   />
        </Navbar.Brand>
        </Link>
        
        <Navbar.Toggle className='bg-light'  aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            {/* <Link to="/" className='text-danger nav-link'>Flights</Link>
            <Link to="/hotel" className='text-white nav-link'>Hotel</Link>
            <Link to="/hotel" className='text-white nav-link'>Car Hire</Link>
            <Link to="/hotel" className='text-white nav-link'>Trip Finder</Link>
            <Link to="/hotel" className='text-white nav-link'>Inspiration</Link> */}

            {
              menu.map((item,index)=>{
                return(
                  <Link to={item.link} className='text-white nav-link'>{item.menu} </Link>
                )
              })
            }
            
          </Nav>
            <div className="d-flex">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Link to="/login" className='text-success mx-3 nav-link'>Log In</Link>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
    </div>
  )
}

export default Header