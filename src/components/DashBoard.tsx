import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

import "./Dashboard.css";

const Dashboard: React.FC = () => {
	// Sample data for line graph
	const shipmentData = [
		{ date: "Jan", air: 4000, sea: 2400, road: 2400 },
		{ date: "Feb", air: 3000, sea: 1398, road: 2210 },
		// ... add more months and data as needed
	];

	return (
		<Container fluid>
			<Row className="mb-4">
				<Col>
					<Card>
						<Card.Header>World Map & Active Shipments</Card.Header>
						<Card.Body>
							<MapContainer
								center={[51.505, -0.09]}
								zoom={3}
								style={{ height: "400px", width: "100%" }}
							>
								<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
								<Marker position={[51.505, -0.09]}>
									<Popup>Active Shipment #123</Popup>
								</Marker>
							</MapContainer>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className="mb-4">
				<Col md={6}>
					<Card>
						<Card.Header>Watchlist of Shipments</Card.Header>
						<Card.Body>
							<Table striped bordered hover variant="light">
								<thead>
									<tr>
										<th>Shipment ID</th>
										<th>Tracking #</th>
										<th>ETA</th>
										<th>Status</th>
									</tr>
								</thead>
							</Table>
						</Card.Body>
					</Card>
				</Col>

				<Col md={6} style={{ height: "400px" }}>
					{" "}
					<Card style={{ height: "100%" }}>
						<Card.Header>Total Shipments by Mode of Transportation</Card.Header>
						<Card.Body style={{ display: "flex", flexDirection: "column" }}>
							<ResponsiveContainer width="100%" height="100%">
								<LineChart data={shipmentData}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="date" />
									<YAxis />
									<Tooltip />
									<Legend />
									<Line
										type="monotone"
										dataKey="air"
										stroke="#8884d8"
										activeDot={{ r: 8 }}
									/>
									<Line type="monotone" dataKey="sea" stroke="#82ca9d" />
									<Line type="monotone" dataKey="road" stroke="#ff7300" />
								</LineChart>
							</ResponsiveContainer>
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<Row className="mb-4">
				<Col>
					<Card>
						<Card.Header>Accounts Receivable</Card.Header>
						<Card.Body>
							<Table striped bordered hover variant="light">
								<thead>
									<tr>
										<th>Transaction Number</th>
										<th>Transaction Date</th>
										<th>Due Date</th>
										<th>Job Inovice #</th>
										<th>Total Amount</th>
									</tr>
								</thead>
							</Table>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Dashboard;
