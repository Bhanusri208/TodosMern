import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import {Link,useNavigate} from 'react-router-dom'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import './Header.css'

// <MdDarkMode className='mode-icon'/>    

const Header = () => {
  
  const loginToken = localStorage.getItem('loginToken')

  const navigate = useNavigate()

  const handleLogout = () => {
    alert("Are you want to Logout")
    localStorage.removeItem("loginToken")
    navigate('/home')
  }

  return (
    <>
      <Navbar bg={loginToken ? "primary" : "dark"} variant="dark">
        <Container>
          <Navbar.Brand><strong>{loginToken ? "My Todos" : "Todos"}</strong></Navbar.Brand>
          <Nav className="ml-auto">
            {loginToken ? (
              <>   
                      <MdLightMode className='mode-icon'/>                       
                       <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                       </>
            ):(
              <>
                <MdLightMode className='mode-icon'/>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}          
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header