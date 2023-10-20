import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
// import "./App.css";
import Dashboard from "./components/DashBoard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<Dashboard />
			<Footer />
		</>
	);
}

export default App;
