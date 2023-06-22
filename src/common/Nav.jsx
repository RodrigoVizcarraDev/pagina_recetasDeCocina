import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate} from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const cerrarSesion = () => {
    // sacar al usuario del localStorage
    // navegar al inicio
    localStorage.removeItem("usuario");
    setUsuarioLogueado({});
    navegacion("/");
  }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>
                    Cocinar es Amor
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink
                            end
                            className={"nav-item nav-link"}
                            as={Link}
                            to={"/"}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            end
                            className={"nav-item nav-link"}
                            as={Link}
                            to={"/registro"}
                        >
                            Registro
                        </NavLink>
                        {usuarioLogueado.nombreUsuario ? (
                            <>
                                <NavLink
                                    end
                                    className={"nav-item nav-link"}
                                    as={Link}
                                    to={"/administrador"}
                                >
                                    Administrador
                                </NavLink>
                                <Button variant="light" onClick={cerrarSesion}>Logout</Button>
                            </>
                        ) : (
                            <NavLink
                                end
                                className={"nav-item nav-link"}
                                as={Link}
                                to={"/login"}
                            >
                                Iniciar Sesion
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
