import React, { useEffect, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import BigNumber from 'bignumber.js';
import useEagerConnect from 'hooks/useEagerConnect';
import { useFetchPriceList, useFetchProfile, useFetchPublicData, useSetting } from 'state/hooks';

import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice';
import SuspenseWithChunkError from './components/SuspenseWithChunkError';
import ToastListener from './components/ToastListener';
import PageLoader from './components/PageLoader';
import EasterEgg from './components/EasterEgg';
import GlobalCheckBullHiccupClaimStatus from './views/Collectibles/components/GlobalCheckBullHiccupClaimStatus';

import './assets/scss/main.scss';
import './assets/main.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'));
const Farms = lazy(() => import('./views/Farms'));

// This config is required for number formating
BigNumber.config({
	EXPONENTIAL_AT: 1000,
	DECIMAL_PLACES: 80,
});

const App: React.FC = () => {
	// Monkey patch warn() because of web3 flood
	// To be removed when web3 1.3.5 is released
	useEffect(() => {
		console.warn = () => null;
	}, []);

	useEagerConnect();
	useFetchPublicData();
	useFetchProfile();
	useFetchPriceList();
	useGetDocumentTitlePrice();
	useSetting();

	return (
		<HashRouter>
			{/* <ResetCSS /> */}
			{/* <GlobalStyle /> */}
			<SuspenseWithChunkError fallback={<PageLoader />}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact strict path="/farm" component={Farms} />
				</Switch>
			</SuspenseWithChunkError>
			<EasterEgg iterations={2} />
			<ToastListener />
			<GlobalCheckBullHiccupClaimStatus />
		</HashRouter>
	);
};

export default React.memo(App);
