import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Naf.css";

function Naf() {
  return (
    <Navbar   expand="lg">
      <Container>
        <Navbar.Brand href="#home">Food AlMASRI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About us</Nav.Link>  
            <Nav.Link href="#food">explore food</Nav.Link>
            <Nav.Link href="#questions">Review</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='son'>655598484841</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naf;