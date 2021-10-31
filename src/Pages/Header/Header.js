import React from 'react';
import './Header.css'
import logo from '../../Images/logo.jpg'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>

                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src={logo}
                                width="40"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span className="header-Word">T</span>raveller Point
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="nav">
                            <Nav className="m-2 nav-text">
                                <NavLink className="list" to="/home">Home</NavLink>
                                {user?.email && <NavLink className="list" to="/addPackage">Add Package</NavLink>}
                                <NavLink className="list" to="/about">About us</NavLink>
                                {user?.email && <span style={{ color: 'whitesmoke' }}>Hello, {user?.displayName} </span>}

                                {
                                    user.email ?
                                        <button className="list2" onClick={handleLogOut}>log out</button>
                                        :
                                        <NavLink className="list" to="/login">LogIn</NavLink>}

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>



        </div>
    );
};

export default Header;