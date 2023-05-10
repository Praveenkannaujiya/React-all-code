import { Container, Button, Form, Nav, Navbar,  } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css'

const Navbardeny = () => {
    return (
        <Navbar bg="warning" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Deny</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                        <Nav.Link href="/Login">LoginPage</Nav.Link>
                        <Nav.Link href="/Calculator">Calculator</Nav.Link>
                       
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbardeny;