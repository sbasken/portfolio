import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbar.css'
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <Navbar className='p-3 sticky-top' bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="portofolio-logo" as={Link} to="/home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
          </Nav>
          <span>
            <a href="https://www.linkedin.com/in/sakibasken/" target="blank">
              <img 
                className="media-icon mx-1" 
                src="https://icons.veryicon.com/png/o/miscellaneous/very-thin-linear-icon/linkedin-103.png" 
                alt="linkedin-icon"
              />
            </a>
          </span>
          <span>
            <a href="https://github.com/sbasken" target="blank">
              <img 
                className='media-icon mx-1' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevjLMoY69RrmdOeKZONLsRySpvdkEwP-SaraZ3hc_8WFS0eR1ALIIL9xuP2_nWbRnawY&usqp=CAU"  
                alt="github-icon"
              />
            </a>
          </span>
          <span>
            <a href="https://medium.com/@sbasken" target="blank">
              <img 
                className='media-icon mx-1' 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-iJyCIHrOtdrcW_6Uoa_kdGbQSc9V9f9-OWB6Op-rFzVpbfCHP-QCUMw04HqcY0BbZE&usqp=CAU"  
                alt="medium-icon"
              />
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;