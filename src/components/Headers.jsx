import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import logo from '../assets/img/bolelaLogo.png';
const Headers = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar  color="dark" dark expand="md">
                <NavbarBrand className='nav-brand ' style={{color:"#79bf3a", fontWeight:"bold",}}>
                <img src={logo}/></NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} className="justify-content-center" navbar>
                    <Nav className="justify-content-center fs-6" navbar>
                        <NavItem>
                            <NavLink href="#">Instagram</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Catálogo de Produtos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Promoções</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contato</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Headers;