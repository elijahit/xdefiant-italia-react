import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import XdefiantSVG from "/src/assets/xdefianticon.ico";
import XDefiantBackground from "/src/assets/xdefiantitaliabackground.jpg";


function Header({ isPage }) {

  return (
    <Navbar id="navbar" expand="lg" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none text-white" to={"/"}>
            <img
              alt="Logo XDefiant Italia"
              src={XdefiantSVG}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            XDefiant Italia
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav id="navigation-principal" className="ms-auto d-lg-flex align-items-lg-center gap-3 mt-3 mt-lg-0">
            <Link className={isPage == "home" ? "link-navbar text-decoration-none text-white" : "link-navbar text-decoration-none text-white-50"} to={"/"}>
              Home
            </Link>
            <NavDropdown title="Articoli" id="basic-nav-dropdown" data-bs-theme="custom">
              <NavDropdown.Item href="/posts/penalita-spamming">Penalità per il Jump e Crouch Spamming</NavDropdown.Item>
              <NavDropdown.Item href="/posts/patch-y1s03">XDefiant Patch Y1S0.3</NavDropdown.Item>
              <NavDropdown.Item href="/posts/patch-y1s04">XDefiant Patch Y1S0.4</NavDropdown.Item>
            </NavDropdown>
            <Link className={isPage == "about" ? "link-navbar text-decoration-none text-white" : "link-navbar text-decoration-none text-white-50"} to={"/about"}>
              Chi siamo
            </Link>
            <a className="link-navbar text-decoration-none text-white-50" href="https://discord.com/servers/xdefiant-italia-1124809941744619602">
              Discord
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;