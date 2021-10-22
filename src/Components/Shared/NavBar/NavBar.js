import React, { useContext, useEffect, useState } from 'react';
import './NavBar.css';
import Logo from '../../../Image/logos/mainLogo.png'
import { Link, } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsIsAdmin(data))
    }, [])


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

                            <Link to="/blog">Blog </Link>

                            <Link to="/login">Login </Link>
                            {isAdmin &&
                                <Link to="/dashboard">
                                    <span className="admin">Admin</span>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;