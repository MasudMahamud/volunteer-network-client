import React from 'react';
import './SideBar.css';
import { Nav, Navbar, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SideBar = () => {

    return (
        <div className=" d-flex flex-column  col-md-2 col-sm-4" >
            <Navbar bg="light" expand={false}>
                <Container fluid>
                    <Navbar.Brand href="#"> Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-brand" style={{ fontFamily: 'auto' }}>Dashboard Menu</Offcanvas.Title>
                        </Offcanvas.Header> <hr />
                        <Offcanvas.Body>
                            <Nav className="ps-4" style={{ fontFamily: 'auto' }}>
                                <Link to="/" className="text-dark"> <span>Home</span></Link> <br />
                                <Link to="/allVolunteer" className="text-dark"> <span>Register volunteer</span></Link> <br />
                                <Link to="/addEvent" className="text-dark"> <span>Add event</span></Link> <br />
                                <Link to="/addBlog" className="text-dark"> <span>Add blog</span></Link> <br />
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
};

export default SideBar;