import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client';
import { useSetting } from 'state/hook';
import Web3ReactManager from '../components/Web3ReactManager';
import ToastListener from '../components/ToastListener';
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects';
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects';
import AddLiquidity from './AddLiquidity';
import RemoveLiquidity from './RemoveLiquidity';
import { RedirectPathToSwapOnly } from './Swap/redirects';
import { EN, allLanguages } from '../constants/localisation/languageCodes';
import { LanguageContext } from '../hooks/LanguageContext';

import '../assets/scss/main.scss';
import '../assets/main.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function App() {
	const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined);
	const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined);
	const [translations, setTranslations] = useState<Array<any>>([]);
	const apiKey = `${process.env.REACT_APP_CROWDIN_APIKEY}`;
	const projectId = parseInt(`${process.env.REACT_APP_CROWDIN_PROJECTID}`);
	const fileId = 6;

	useSetting();

	const credentials: Credentials = {
		token: apiKey,
	};

	const stringTranslationsApi = new StringTranslations(credentials);

	const getStoredLang = (storedLangCode: string) => {
		return allLanguages.filter((language) => {
			return language.code === storedLangCode;
		})[0];
	};

	useEffect(() => {
		const storedLangCode = localStorage.getItem('pancakeSwapLanguage');
		if (storedLangCode) {
			const storedLang = getStoredLang(storedLangCode);
			setSelectedLanguage(storedLang);
		} else {
			setSelectedLanguage(EN);
		}
	}, []);

	const fetchTranslationsForSelectedLanguage = async () => {
		stringTranslationsApi
			.listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
			.then((translationApiResponse) => {
				if (translationApiResponse.data.length < 1) {
					setTranslations(['error']);
				} else {
					setTranslations(translationApiResponse.data);
				}
			})
			.then(() => setTranslatedLanguage(selectedLanguage))
			.catch((error) => {
				setTranslations(['error']);
				console.error(error);
			});
	};

	useEffect(() => {
		if (selectedLanguage) {
			fetchTranslationsForSelectedLanguage();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedLanguage]);

	return (
		<Suspense fallback={null}>
			<HashRouter>
				<LanguageContext.Provider
					value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}
				>
					<Web3ReactManager>
						<Switch>
							<Route exact path="/" component={AddLiquidity} />
							<Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
							<Route exact path="/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
							<Route exact path="/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
							<Route
								exact
								strict
								path="/remove/:tokens"
								component={RedirectOldRemoveLiquidityPathStructure}
							/>
							<Route component={RedirectPathToSwapOnly} />
						</Switch>
					</Web3ReactManager>
				</LanguageContext.Provider>
				<ToastListener />
			</HashRouter>
		</Suspense>
	);
}
