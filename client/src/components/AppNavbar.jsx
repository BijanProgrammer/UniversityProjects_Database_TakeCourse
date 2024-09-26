import React, { Component } from 'react';

import { Container, Nav, Navbar } from 'react-bootstrap';

class AppNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" data-bs-theme="dark" expand="sm" className="mb-5">
                    <Container>
                        <Navbar.Brand href="/">Take Course</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-collapse" />
                        <Navbar.Collapse id="navbar-collapse">
                            <Nav navbar className="ms-auto">
                                <Nav.Item>
                                    <Nav.Link
                                        href="https://github.com/BijanEisapour/UniversityProjects_Database_TakeCourse"
                                        target="_blank"
                                    >
                                        Github Repo
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;
