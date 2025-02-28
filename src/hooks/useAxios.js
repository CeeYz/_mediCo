import axios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				if (!response.ok) throw Error("Could not fetch the data from the resource...");
				return response.json();
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
				setError(false);
			})
			.catch((err) => {
				setIsPending(true);
				setError(err.message);
			});
	}, [url]);

	return { data, isPending, error };
};
