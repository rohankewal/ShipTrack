import { useState } from "react";
import {
	Badge,
	Button,
	Container,
	Form,
	Modal,
	Nav,
	Navbar,
} from "react-bootstrap";
import { BiExport, BiImport, BiSolidPlusSquare } from "react-icons/bi";
import "./Header.css";

function Header(props) {
	const [addShow, setAddShow] = useState(false);
	const [selectedOption, setSelectedOption] = useState("On Time");
	const [shipmentID, setShipmentID] = useState("");
	const [trackingNumber, setTrackingNumber] = useState("");
	const [originDestination, setOriginDestination] = useState("");
	const [eta, setEta] = useState("");

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
	};

	const handleSubmit = () => {
		const newShipment = {
			shipmentID: shipmentID,
			trackingNumber: trackingNumber,
			originDestination: originDestination,
			eta: eta,
			status: selectedOption,
		};
		props.onAddShipment(newShipment);
		setAddShow(false); // Close the modal
	};

	return (
		<Navbar bg="light" variant="light" expand="lg" className="sticky-top">
			<Container>
				<Navbar.Brand href="/">ShipTrack</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Button variant="light">
							<BiImport style={{ fontSize: "1.5rem" }} /> Import
						</Button>
						<Button variant="light">
							<BiExport style={{ fontSize: "1.5rem" }} /> Export
						</Button>
						{/* todo: fix onClick not opening modal */}
						<Button variant="light" onClick={() => setAddShow(true)}>
							<BiSolidPlusSquare style={{ fontSize: "1.5rem" }} /> Add Shipment
						</Button>{" "}
					</Nav>
				</Navbar.Collapse>
			</Container>
			{/* Add Shipment Modal */}
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={addShow}
				onHide={() => setAddShow(false)}
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						ShipTrack
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Add New Shipment</h4>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Shipment ID</Form.Label>
							<Form.Control
								type="text"
								placeholder="123456789"
								value={shipmentID}
								onChange={(e) => setShipmentID(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Tracking Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="123456789"
								value={trackingNumber}
								onChange={(e) => setTrackingNumber(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Origin Destination</Form.Label>
							<Form.Control
								type="text"
								placeholder="City, Sate"
								value={originDestination}
								onChange={(e) => setOriginDestination(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>ETA</Form.Label>
							<Form.Control
								type="date"
								placeholder="123456789"
								value={eta}
								onChange={(e) => setEta(e.target.value)}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlSelect1">
							<Form.Label>Status</Form.Label>
							<div>
								{["On Time", "Delayed", "Arrived", "Cancelled"].map(
									(option) => (
										<Badge
											key={option}
											bg={option === selectedOption ? "primary" : "secondary"}
											onClick={() => handleOptionClick(option)}
											style={{
												cursor: "pointer",
												marginRight: "5px",
												fontSize: "1rem",
											}}
										>
											{option}
										</Badge>
									)
								)}
							</div>
							<Form.Control
								type="hidden"
								value={selectedOption}
								onChange={(e) => setSelectedOption(e.target.value)}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={handleSubmit}>Add Shipment</Button>
				</Modal.Footer>
			</Modal>
		</Navbar>
	);
}

export default Header;
