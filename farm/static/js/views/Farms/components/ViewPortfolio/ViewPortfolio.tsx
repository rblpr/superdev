import React from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';

// components
import IconApe from 'components/Icon/IconApe';
import IconDebank from 'components/Icon/IconDebank';
import PortfolioLink from './PortfolioLink';

const Wrapper = styled.div`
	width: 100%;
	margin: 60px auto auto;

	@media (min-width: 768px) {
		width: 180px;
		margin: auto;
	}
`;

const Title = styled.h4`
	font-size: 15px;
	font-weight: 500;
	color: var(--color-text-2);
	text-align: center;
	margin-bottom: 18px;

	@media (min-width: 768px) {
		font-size: 18px;
		text-align: left;

		margin-bottom: 15px;
	}
`;

const PortfolioWrapper = styled.div`
	display: flex;
	justify-content: center;

	.portfolio-item {
		margin-right: 30px;

		&:last-child {
			margin-right: 0;
		}
	}

	@media (min-width: 768px) {
		justify-content: flex-start;
	}
`;

const ViewPortfolio: React.FC = () => {
	const { account } = useWeb3React();

	const apeUrl = account ? `https://apeboard.finance/dashboard/${account}?chain=BSC` : 'https://apeboard.finance/';
	const debankUrl = account ? `https://debank.com/profile/${account}?chain=bsc` : 'https://debank.com/';

	return (
		<Wrapper>
			<Title>View your portfolio</Title>
			<PortfolioWrapper>
				<PortfolioLink to={apeUrl} className="portfolio-item">
					<IconApe />
				</PortfolioLink>
				<PortfolioLink to={debankUrl} className="portfolio-item">
					<IconDebank />
				</PortfolioLink>
			</PortfolioWrapper>
		</Wrapper>
	);
};

export default ViewPortfolio;
