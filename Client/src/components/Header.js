import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#pricing">Add</Nav.Link>
            <Nav.Link href="#features">Edit</Nav.Link>
            <Nav.Link href="#home">Available</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
export default Header;
