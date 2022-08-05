import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth()

  return (
    <div className="mb-2 bg-info">
      <Navbar expand="lg ">
        <Container>
          <Navbar.Brand href="/">
            <h1 className="fw-bolder">IT-Travel</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="fw-bold fs-5 text-dark" as={Link} to="/home">
                Home
              </Nav.Link>
              {
                user?.email && <Nav.Link className="fw-bold fs-5 text-dark" as={Link} to="/order">
                  My Order
                </Nav.Link>
              }
              {
                user?.email && <Nav.Link className="fw-bold fs-5 text-dark" as={Link} to="/createNewEvent">
                  Create New Event
                </Nav.Link>
              }
              {
                (user?.email) && <Nav.Link className="fw-bold fs-5 text-dark" as={Link} to="/management">
                  Managment
                </Nav.Link>
              }
            </Nav>
            <div className="">
            </div>

            {
              (user?.email) ? <Link to="/login">
                <button className="btn btn-success" onClick={logOut}>Log out</button>
              </Link> : <Link to="/login">
                <button className="btn btn-danger">Login</button>
              </Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
