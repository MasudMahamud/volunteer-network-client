import React from 'react';
import './NavBar.css';
import Logo from '../../../Image/logos/mainLogo.png'
import { Link, } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    return (
        <div className="my-nav row">
        <Navbar bg="light"  fixed='top' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img style={{maxWidth:'140px'}} src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to="/">Home</Link>                      

                        <Link  to="/dashboard">Donation</Link>

                        <Link to="/blog">Events</Link>

                        <Link  to="/contract">Blog </Link>

                        
                    </Nav>



                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>   
        // <div className="my-nav">
        //     <div className="Container">
        //         <Navbar fixed='top' expand='lg' >
        //         <Navbar.Brand>
        //             <img src={Logo} alt="" />
        //         </Navbar.Brand>

        //         <Navbar.Toggle />

        //         <Navbar.Collapse className="justify-content-end">
        //             <div >
        //                 <Nav className="nav-title ">
        //                     <Link me-5 to="/#">
        //                         <span> Home </span>
        //                     </Link>
        //                     <Link me-5 to="/#">
        //                         <span >Donation </span>
        //                     </Link>
        //                     <Link to="/#">
        //                         <span >Events  </span>
        //                     </Link>
        //                     <Link to="/#">
        //                         <span >Blog </span>
        //                     </Link>
        //                     <Link to="/#">
        //                         <span className="register"> Register </span>
        //                     </Link>
        //                     <Link to="/#">
        //                         <span className="admin">Admin</span>
        //                     </Link>
        //                     {/* <Link to="/">
        //                         <p className="admin"> <AccountCircleIcon/>  {loggedInUser.name}</p>
        //                     </Link> */}
        //                 </Nav>
        //             </div>
        //         </Navbar.Collapse>
        //     </Navbar>
        //     </div>
        //     </div>
    );
};

export default NavBar;