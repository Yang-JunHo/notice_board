import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-primary bg-opacity-75">
            <Container fluid>
                <Navbar.Brand href="/">Notice Board</Navbar.Brand>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/signin">Signin</Nav.Link>
                    </Nav>
                    <Form>
                        <input placeholder='Search'></input>
                        <Button type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header