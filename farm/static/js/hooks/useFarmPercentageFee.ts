import { useEffect, useState } from 'react';

const WARDEN_FARM_API_URL = 'https://storage.googleapis.com/warden-pools-statistics'

export interface ApiStatResponse {
	[address: string]: {
		daily: number,
		yearly: number
	}
}

export const useFarmPercentageFee = () => {
	const [data, setData] = useState<ApiStatResponse | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${WARDEN_FARM_API_URL}/fees.json`);
				const responsedata: ApiStatResponse = await response.json();

				setData(responsedata);
			} catch (error) {
				console.error('Unable to fetch data:', error);
			}
		};

		fetchData();
	}, [setData]);

	return data;
}