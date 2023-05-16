import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { CiLogout } from "react-icons/ci";
import "../css/header.css";

import { logout, reset } from "../features/auth/authSlice";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const onHome = () => {
    navigate("/");
  };
  const onInventory = () => {
    navigate("/inventory");
  };

  return (
    <>
      {user ? (
        // <Navbar bg="dark" variant="dark">
        //   <Container className="nav-container">
        //     <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        //     <Nav className="me-auto">
        //       <Nav.Link href="#pricing">
        //         <span className="nav-link">Inventory</span>
        //       </Nav.Link>
        //       <Nav.Link href="#features">
        //         <span className="nav-link">#</span>
        //       </Nav.Link>
        //       <Nav.Link>
        //         <span className="nav-link"> # </span>
        //       </Nav.Link>
        //       <Nav.Link onClick={onLogout}>
        //         <span className="nav-link">Logout</span>
        //       </Nav.Link>
        //     </Nav>
        //   </Container>
        // </Navbar>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Little of Everything Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link onClick={onHome}>Home</Nav.Link>
                <Nav.Link onClick={onInventory}>Inventory</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4" onClick={onLogout}>
                    Logout <CiLogout />
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Link to="/login"> */}
            <Navbar.Brand id="login-link" onClick={onLogout}>
              Little of Everything Shop
            </Navbar.Brand>
            {/* </Link> */}
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
      )}
      <br />
      <br />
    </>
  );
}
export default Header;
