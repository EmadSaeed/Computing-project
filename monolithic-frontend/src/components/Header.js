import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
    return (
        <header>
            <Navbar style={{ background: '#faeccc' }} expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <h1 className='fs-2'>Monolithic Shop</h1>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="ms-auto">
                            <LinkContainer to='/basket'>
                                <Nav.Link><IoMdCart /> Basket</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><FaUserAlt />Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header