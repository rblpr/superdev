import Rollbar, { Level } from 'rollbar';

export const rollbar = new Rollbar({
	accessToken: process.env.REACT_APP_ROLLBAR_POST_CLIENT_ITEM_TOKEN,
	environment: process.env.REACT_APP_ROLLBAR_ENV || 'production',
});

export function logToRollbar(level: Level, message: string | null, args?: any) {
	try {
		const argsExpected = [];
		message ? argsExpected.push(message) : null;
		args ? argsExpected.push(args) : null;
		rollbar[level](...argsExpected);
	} catch {
		console.log('rollbar error');
	}
}
