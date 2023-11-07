import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
// import "./App.css";
import Dashboard from "./components/DashBoard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Shipment } from "./types";

function App() {
	const [shipments, setShipments] = useState<Shipment[]>([]);

	const handleAddShipment = (shipment: Shipment) => {
		setShipments([...shipments, shipment]);
	};

	return (
		<>
			<Header onAddShipment={handleAddShipment} />
			<Dashboard shipments={shipments} />
			<Footer />
		</>
	);
}

export default App;
