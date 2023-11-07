export type Shipment = {
	id: number;
	from: string;
	to: string;
	date: string;
	status: string;
	coordinates: [number, number];
};
