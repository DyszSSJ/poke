import { ReactNode } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/poke.png';

interface Props {
    children: ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="pokeapi"
                            className='d-inline-block align-top logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                        <Nav>
                            <LinkContainer to="/">
                                <Nav.Link
                                    className='fs-5'
                                >Sobre Mí</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/pokemon">
                                <Nav.Link
                                    className='fs-5'
                                >Pokémon</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </>
    );
};

export default Sidebar;
