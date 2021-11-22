import React from 'react';
import {  Container, Navbar } from 'react-bootstrap';

function Header () {

    return(
        <Container>
            <Navbar>
                <Navbar.Text>
                    Where in the world?
                </Navbar.Text>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Dark Mode
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header;