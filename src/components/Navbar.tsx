import {
  GridView,
  SickOutlined,
  VaccinesOutlined,
  Menu,
} from "@mui/icons-material";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigationbar() {
  return (
    <Navbar className="navbar bg-white" expand="sm" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <span className="logo">Marcello</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon">
          <Menu />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink className="navlinks" to="/">
              Home
            </NavLink>
            <NavLink className="navlinks" to="/store">
              Store
            </NavLink>
            <NavLink className="navlinks" to="/about">
              About
            </NavLink>
            <NavLink className="navlinks" to="">
              <span>Cart&nbsp;&nbsp;</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.06 34.321"
                width="23.06"
                height="23.321"
              >
                <path
                  d="M551.135,1308.75a5.831,5.831,0,0,0-5.831,5.831v4.165h-4.289a2.5,2.5,0,0,0-2.492,2.308l-1.41,18.326a2.5,2.5,0,0,0,2.493,2.69h23.059a2.5,2.5,0,0,0,2.49-2.69l-1.407-18.326a2.5,2.5,0,0,0-2.495-2.308h-4.287v-4.165a5.831,5.831,0,0,0-5.831-5.831Zm4.165,11.662v2.5a.833.833,0,0,0,1.666,0v-2.5h4.287a.833.833,0,0,1,.831.769l1.41,18.326a.833.833,0,0,1-.83.9H539.605a.832.832,0,0,1-.83-.9l1.409-18.326a.834.834,0,0,1,.83-.769H545.3v2.5a.833.833,0,0,0,1.666,0v-2.5Zm0-1.666v-4.165a4.165,4.165,0,0,0-8.33,0v4.165Zm0,0"
                  transform="translate(-536.604 -1308.25)"
                  fill="currentColor"
                  stroke="#f43b00"
                  strokeWidth="1"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span>&nbsp; (3)</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
