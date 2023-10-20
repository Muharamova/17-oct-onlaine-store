import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <>
            <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
                <Container>
                    <Nav className="me-auto">
                       <Nav.Link to="/" as={NavLink}> Home </Nav.Link>
                       <Nav.Link to="/store" as={NavLink}> Store </Nav.Link>
                       <Nav.Link to="/about" as={NavLink}> About </Nav.Link>
                    </Nav>
{/*Todo element korzini*/}

                    <Button
                        variant="info"
                        style={{width: "3rem", height:"3rem", position:"relative"}}
                        className="rounded-circle"
//todo otkritie korzini
                    > Cart
{/*    kartinka korzini*/}

                        <div
                         className="rounded-circle bg-danger d-flex justify-content-center  align-items-center"
                         style={{
                             color:"black",
                             width:"1.5rem",
                             height: "1.5rem",
                             position: "absolute",
                             bottom: 0,
                             right: 0,
                             transform: 'translate(35%, 35%)'

                         }}
                        >

                            <small> 1 </small>
                        </div>

                    </Button>
                </Container>
            </NavbarBs>
        </>
    )
}