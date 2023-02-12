import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import home from './img/home.jpg';
import { FaShoppingCart } from 'react-icons/fa';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getTotalItems } from '../helpers/calculate';
import { CartContext } from '../context/CartContext';

type Props = {
  handleOpen : (state:boolean) => void;
}

const NavBar =({ handleOpen }: Props)=>{

  const { cartItems } = useContext(CartContext);

  return (  
    <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"#39c010"}}>
      <Container>
        <Link to='/'>  <img
              alt="home"
              src={home}
              width="80px"
              height="80px"
              className="d-inline-block align-top"
            />
        </Link>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize: "20px"}}>

            <NavDropdown title="Cibo per cani" id="collasible-nav-dropdown" >
              <Link to='/dogfood/umido' > 
              <NavDropdown.Item href="/dogfood" >Cibo umido</NavDropdown.Item>
              </Link>
              
              <Link to='/dogfood/secco' >
              <NavDropdown.Item href="#action/3.3">Cibo secco</NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
              
              <Link to='/dogfood' >
              <NavDropdown.Item href="#action/3.4">
                Visualizza tutti
              </NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown title="Cibo per gatti" id="collasible-nav-dropdown">
              <Link to='/catfood/umido'><NavDropdown.Item href="#action/3.2">
                Cibo umido
              </NavDropdown.Item></Link>
              <Link to='/catfood/secco'><NavDropdown.Item href="#action/3.3">Cibo secco</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to='/catfood'><NavDropdown.Item href="#action/3.4">
                Visualizza tutti
              </NavDropdown.Item></Link>
            </NavDropdown>

            <NavDropdown title="Accessori per cani" id="collasible-nav-dropdown">
            <Link to='/dogaccessories/gioco'><NavDropdown.Item href="#action/3.2" >Gioco</NavDropdown.Item></Link>
            <Link to='/dogaccessories/guinzaglio'><NavDropdown.Item href="#action/3.3">Guinzaglio</NavDropdown.Item></Link>
            <Link to='/dogaccessories/collare'><NavDropdown.Item href="#action/3.4">Collare</NavDropdown.Item></Link>
            <Link to='/dogaccessories/ciotola'><NavDropdown.Item href="#action/3.5">Ciotola</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to='/dogaccessories'><NavDropdown.Item href="#action/3.6">
                Visualizza tutti
              </NavDropdown.Item></Link>
            </NavDropdown>


            <NavDropdown title="Accessori per gatti" id="collasible-nav-dropdown">
            <Link to='/cataccessories/gioco'><NavDropdown.Item href="#action/3.2">Gioco</NavDropdown.Item></Link>
            <Link to='/cataccessories/tiragraffi'><NavDropdown.Item href="#action/3.3">Tiragraffi</NavDropdown.Item></Link>
            <Link to='/cataccessories/lettiera'><NavDropdown.Item href="#action/3.4">Lettiera</NavDropdown.Item></Link>
            <Link to='/cataccessories/ciotola'><NavDropdown.Item href="#action/3.5">Ciotola</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link to='/cataccessories'><NavDropdown.Item href="#action/3.6">
                Visualizza tutti
              </NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
          <Nav>
          <Link to="/contactUs" style={{textDecoration:"none"}}><Nav.Link href="action/4" >Invia un messaggio</Nav.Link></Link>
          <Nav.Link href='javascript:window.scrollTo(0,999999);'>Contatti</Nav.Link>
          </Nav>
        
          <FaShoppingCart className="login_menu" onClick={() => handleOpen(true)}  /> 
          <Badge pill bg="danger" style={{float: "right"}}> {getTotalItems(cartItems)}</Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;