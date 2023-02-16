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
import { CartContext } from '../context/Context';


type Props = {
  handleOpen : (state:boolean) => void;
}

   
const NavBar =({ handleOpen }: Props)=>{

  const { cartItems } = useContext(CartContext);

  return (  
    <Navbar id="nav" collapseOnSelect expand="lg"  style={{backgroundColor:"#39c010"}}>
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
              
              <NavDropdown.Item href="/dogfood/umido" >Cibo umido</NavDropdown.Item>
              
              <NavDropdown.Item href="/dogfood/secco">Cibo secco</NavDropdown.Item>

              <NavDropdown.Divider />
              
              <NavDropdown.Item href="/dogfood">
                Visualizza tutti
              </NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Cibo per gatti" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/catfood/umido">
                Cibo umido
              </NavDropdown.Item>
              <NavDropdown.Item href="/catfood/secco">Cibo secco</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/catfood">
                Visualizza tutti
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Accessori per cani" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/dogaccessories/gioco" >Gioco</NavDropdown.Item>
            <NavDropdown.Item href="/dogaccessories/guinzaglio">Guinzaglio</NavDropdown.Item>
            <NavDropdown.Item href="/dogaccessories/collare">Collare</NavDropdown.Item>
            <NavDropdown.Item href="/dogaccessories/ciotola">Ciotola</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/dogaccessories">
                Visualizza tutti
              </NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Accessori per gatti" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/cataccessories/gioco">Gioco</NavDropdown.Item>
            <NavDropdown.Item href="/cataccessories/tiragraffi">Tiragraffi</NavDropdown.Item>
            <NavDropdown.Item href="/cataccessories/lettiera">Lettiera</NavDropdown.Item>
            <NavDropdown.Item href="/cataccessories/ciotola">Ciotola</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/cataccessories">
                Visualizza tutti
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Link className="nav-link" to="/newsletter" style={{textDecoration:"none"}}>
            Iscriviti alla Newsletter
          </Link>
          <Nav.Link href="#action/4.7" onClick={()=>{
            let f=document.getElementById("footerContact");
            f?.scrollIntoView(false);
            }}>
              Contatti</Nav.Link>
          </Nav>
        
          <FaShoppingCart className="login_menu" onClick={() => handleOpen(true)}  /> 
          <Badge pill bg="danger" style={{float: "right"}}> {getTotalItems(cartItems)}</Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;