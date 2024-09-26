import React, { Component } from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Take Course</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse navbar isOpen={this.state.isOpen}>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink href="https://github.com/BijanEisapour/UniversityProjects_Database_TakeCourse">
                                        Github Repo
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;
