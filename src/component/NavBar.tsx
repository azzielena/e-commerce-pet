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
              <Link to='/dogfood/umido' className="dropdown-item " > 
              Cibo umido
              </Link>
              
              <Link to='/dogfood/secco' className="dropdown-item " >
              Cibo secco
              </Link>
              <NavDropdown.Divider />
              
              <Link to='/dogfood' className="dropdown-item " >
              
                Visualizza tutti
              
              </Link>
            </NavDropdown>
            <NavDropdown title="Cibo per gatti" id="collasible-nav-dropdown">
              <Link to='/catfood/umido' className="dropdown-item ">
                Cibo umido
              </Link>
              <Link to='/catfood/secco' className="dropdown-item ">Cibo secco</Link>
              <NavDropdown.Divider />
              <Link to='/catfood' className="dropdown-item ">
                Visualizza tutti
              </Link>
            </NavDropdown>
            <NavDropdown title="Accessori per cani" id="collasible-nav-dropdown">
            <Link to='/dogaccessories/gioco' className="dropdown-item ">Gioco</Link>
            <Link to='/dogaccessories/guinzaglio' className="dropdown-item ">Guinzaglio</Link>
            <Link to='/dogaccessories/collare' className="dropdown-item ">Collare</Link>
            <Link to='/dogaccessories/ciotola' className="dropdown-item ">Ciotola</Link>
              <NavDropdown.Divider />
              <Link to='/dogaccessories' className="dropdown-item ">
                Visualizza tutti
              </Link>
            </NavDropdown>
            <NavDropdown title="Accessori per gatti" id="collasible-nav-dropdown">
            <Link to='/cataccessories/gioco' className="dropdown-item ">Gioco</Link>
            <Link to='/cataccessories/tiragraffi' className="dropdown-item ">Tiragraffi</Link>
            <Link to='/cataccessories/lettiera' className="dropdown-item ">Lettiera</Link>
            <Link to='/cataccessories/ciotola' className="dropdown-item ">Ciotola</Link>
            
              <NavDropdown.Divider />
              <Link to='/cataccessories' className="dropdown-item ">
                Visualizza tutti</Link>
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