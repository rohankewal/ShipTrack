import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
// import "./App.css";
import Dashboard from "./components/DashBoard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	const [shipments, setShipments] = useState([]);

	const addShipment = (newShipment) => {
		setShipments((prevShipments) => [...prevShipments, newShipment]);
	};

	return (
		<>
			<Header onAddShipment={addShipment} />
			<Dashboard shipments={shipments} />
			<Footer />
		</>
	);
}

export default App;
