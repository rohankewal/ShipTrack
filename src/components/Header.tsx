import { useState } from "react";
import {
	Button,
	Container,
	Form,
	Modal,
	Nav,
	NavDropdown,
	Navbar,
} from "react-bootstrap";
import "./Header.css";

function Header(props) {
	const [modalShow, setModalShow] = useState(false);
	const [loginShow, setLoginShow] = useState(false);

	return (
		<Navbar bg="light" variant="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">ShipTrack</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
						{/* todo: setup "add shipment" button to add new shipments to dashboard */}
						<Nav.Link>Add Shipment</Nav.Link>{" "}
					</Nav>
					<Nav>
						<Nav.Link href="#deets">
							<Button
								variant="outline-primary"
								onClick={() => setLoginShow(true)}
							>
								Login
							</Button>
						</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							<Button variant="primary" onClick={() => setModalShow(true)}>
								Sign Up
							</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>

			{/* Signup Modal */}
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={modalShow}
				onHide={() => setModalShow(false)}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						ShipTrack
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Sign Up</h4>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Full Name</Form.Label>
							<Form.Control type="text" placeholder="John Doe" autoFocus />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Must be 8-12 characters"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Re-type Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Confim your password"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Signup</Button>
				</Modal.Footer>
			</Modal>

			{/* Login Modal */}
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={loginShow}
				onHide={() => setLoginShow(false)}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						ShipTrack
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Login</h4>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="name@example.com" />
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Must be 8-12 characters"
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Login</Button>
				</Modal.Footer>
			</Modal>
		</Navbar>
	);
}

export default Header;
