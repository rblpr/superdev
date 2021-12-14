export default function getBscScanLink(data: string, type: 'transaction' | 'token' | 'address'): string {
	const prefix = `https://bscscan.com`;

	switch (type) {
		case 'transaction': {
			return `${prefix}/tx/${data}`;
		}
		case 'token': {
			return `${prefix}/token/${data}`;
		}
		case 'address':
		default: {
			return `${prefix}/address/${data}`;
		}
	}
}
