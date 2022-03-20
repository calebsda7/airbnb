import { useEffect, useState } from "react";
import * as api from "./yelpAPI";

export function useBusiness() {
	const [businesses, setBuisnesses] = useState([]);
	const [amountResults, setAmountResults] = useState();

	useEffect(() => {
		// setBuisnesses([]);
		const fetchData = async () => {
			try {
				const rawData = await api.get("/businesses/search");
				const resp = await rawData.json();
				setBuisnesses(resp.buisnesses);
				setAmountResults(resp.total);
			} catch (e) {
				console.error(e);
			}
		};
		fetchData();
	});
	return [businesses, amountResults];
}
