import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBs from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./navbar.css";
import { navLinks } from '../../data/navLinks';

const Navbar = () => {
    const navRef = useRef(null);
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    useEffect(() => {
        const nav = navRef.current;

        const handleScroll = () => {
            if (window.scrollY > 20) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };

        // const handleHamburger = () => {
        //     const isOpen = hamburger.classList.toggle('open');
        //     hamburger.setAttribute('aria-expanded', isOpen);
        // };

        window.addEventListener('scroll', handleScroll);
        // hamburger.addEventListener('click', handleHamburger);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setShowOffcanvas(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //     
    return (
        <NavbarBs
            ref={navRef}
            expand={false}
            className="nav"
            fixed="top"
        >
            <Container className="nav-inner">

                <NavbarBs.Brand
                    as={Link}
                    to="/"
                    className="nav-logo"
                >
                    prime<span>nest</span>
                </NavbarBs.Brand>

                <NavbarBs.Toggle
                    aria-controls="offcanvas-navbar"
                    onClick={() => setShowOffcanvas(true)}
                />

                <NavbarBs.Offcanvas
                    id="offcanvas-navbar"
                    placement="end"
                    show={showOffcanvas}
                    onHide={() => setShowOffcanvas(false)}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className="nav-logo">
                            prime<span>nest</span>
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <Offcanvas.Body>

                        <Nav className="ms-auto">

                            <Nav.Link
                                as={Link}
                                to="/"
                            >
                                Home
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="/buy"
                            >
                                Buy
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="/rent"
                            >
                                Rent
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="/agents"
                            >
                                Agents
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="/locations"
                            >
                                Locations
                            </Nav.Link>

                        </Nav>

                        <div className="nav-cta-mobile">
                            <Link
                                to="/signin"
                                className="btn-ghost"
                            >
                                Sign In
                            </Link>

                            <Link
                                to="/list-property"
                                className="btn-primary"
                            >
                                List Property
                            </Link>
                        </div>

                    </Offcanvas.Body>
                </NavbarBs.Offcanvas>

                <ul className="nav-links" role="list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/buy">Buy</Link></li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/agents">Agents</Link></li>
                    <li><Link to="/locations">Locations</Link></li>
                </ul>

                <div className="nav-cta">
                    <Link to="/signin" className="btn-ghost">
                        Sign In
                    </Link>

                    <Link to="/list-property" className="btn-primary">
                        List Property
                    </Link>
                </div>

            </Container>
        </NavbarBs>
    );

};

export default Navbar;