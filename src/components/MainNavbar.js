import React, { useState } from 'react';

import { Link } from "react-router-dom";

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function MainNavbar(props) {
    const [navToggler, setNavToggler] = useState(false);

    const toggleHandler = () => {
        setNavToggler(!navToggler)
    }
    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <Container >
                    <NavbarBrand href="/">GVC</NavbarBrand>
                    <NavbarToggler onClick={toggleHandler} />
                    <Collapse isOpen={navToggler} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/manage-questions/">Manage Questions</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/manage-questionnaires/">Manage Questionnaires</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container >
            </Navbar>

        </div>
    )
}


export default MainNavbar;