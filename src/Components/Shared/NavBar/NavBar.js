import React from 'react';
import './NavBar.css';
import Logo from '../../../Image/logos/mainLogo.png'
import { Link, } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    return (
        <div className="my-nav row">
            <Navbar bg="light" fixed='top' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img style={{ maxWidth: '140px' }} src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '80px' }}
                            navbarScroll
                        >
                            <Link to="/">Home</Link>

                            <Link to="/event">Events</Link>

                            <Link to="/#">Blog </Link>

                            <Link to="/#">
                                <span className="register"> Register </span>
                            </Link>
                            <Link to="/#">
                                <span className="admin">Admin</span>
                            </Link>
                            <Link to="/#">
                                <p className="admin"> <AccountCircleIcon />  </p>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;