import express from "express";
import NodeGeocoder from "node-geocoder";

const app = express();
const port = 3001;

const options = {
	// Use your desired geocoder provider and options here
	provider: "openstreetmap",
};

const geocoder = NodeGeocoder(options);

app.get("/geocode", async (req, res) => {
	try {
		const address = req.query.address;
		const geoResults = await geocoder.geocode(address);
		res.json(geoResults[0]);
	} catch (error) {
		res.status(500).send("Geocoding error");
	}
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
