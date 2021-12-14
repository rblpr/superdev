import React from 'react';
import styled from 'styled-components';
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import { registerToken } from 'utils/wallet';

// components
import ViewPortfolio from './ViewPortfolio';

const Container = styled.div`
	filter: ${({ theme }) => theme.card.dropShadow};
	width: 100%;
	margin: 0px 0px 42px;
	padding: 0;

	${({ theme }) => theme.mediaQueries.lg} {
		padding: 0;
		margin: 0;
	}
`;

const Title = styled.p`
	font-size: 15px;
	font-weight: 700;
	color: var(--color-text);
	margin-bottom: 10px;
`;

const TokenLink = styled.a`
	font-size: 14px;
	text-decoration: none;
	color: ${(props) => props.theme.colors.primary};
	cursor: pointer;
`;

const Content = styled.div`
	display: block;
	margin-top: 30px;
	position: relative;

	& > div:first-child {
		width: 100%;
		position: relative;
		box-shadow: 0px 0px 25px 2px rgba(0, 0, 0, 0.05);
	}

	& > div:last-child {
		width: 100%;
		height: auto;
		margin-top: 15px;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		display: flex;
		& > div:first-child {
			width: 50%;
		}
		& > div:last-child {
			width: 50%;
			height: 300px;
			margin-top: 0;
		}
	}
`;

interface RewardProps {
	sum?: string;
	balance?: string;
}

const Reward: React.FC<RewardProps> = ({ sum, balance }) => {
	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	return (
		<Container>
			<Title>Your Reward Summary</Title>{' '}
			<Content>
				{' '}
				<div style={{ boxShadow: 'unset' }}>
					{' '}
					{isMobile ? (
						<img
							src="/images/card_earned_super_warden_mobile.svg"
							width="100%"
							height="200px"
							alt="reward"
						/>
					) : (
						<img src="/images/card_earned_super_warden.svg" width="100%" height="auto" alt="reward" />
					)}
					<div
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: isMobile ? '50%' : '70%',
							height: '100%',
							display: 'grid',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<p
							style={{
								color: '#fff',
								fontSize: isMobile ? '14px' : '18px',
								alignSelf: 'flex-end',
								textAlign: 'center',
							}}
						>
							WAD earned :
						</p>
						<p
							style={{
								color: '#fff',
								fontSize: isMobile ? '24px' : '48px',
								fontWeight: 'bold',
								alignSelf: 'flex-start',
								marginTop: isMobile ? '15px' : '25px',
								textAlign: 'center',
							}}
						>
							{sum}
						</p>
					</div>
				</div>
				<div
					style={
						!isMobile
							? {
									alignSelf: 'center',
									fontSize: '18px',
									color: 'rgb(32, 34, 81)',
									textAlign: 'center',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
							  }
							: {}
					}
				>
					<p
						style={{
							alignSelf: 'center',
							fontSize: isMobile ? '14px' : '18px',
							color: 'var(--color-text-2)',
							textAlign: 'center',
						}}
					>
						Your WAD wallet balance :
					</p>
					<div
						style={{
							margin: isMobile ? '20px 0' : '10px 0',
							alignSelf: 'center',
							alignItems: 'center',
							justifyContent: 'center',
							color: 'var(--color-text)',
							display: 'flex',
							fontSize: isMobile ? '24px' : '48px',
							fontWeight: 'bold',
						}}
					>
						{balance}
						<div
							style={{
								width: '25px',
								height: '25px',
								borderRadius: '25px',
								marginLeft: '17px',
								background: '#FFB703',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<TokenLink
								onClick={() =>
									registerToken(
										'0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc',
										'WAD',
										18,
										'https://image.wardenswap.finance/WAD-Token.png',
									)
								}
							>
								<img src="/images/plus.png" width="11px" height="11px" alt="plus" />
							</TokenLink>
						</div>
					</div>
					<div style={{ display: 'flex', alignSelf: 'center', justifyContent: 'center' }}>
						<p
							style={{
								alignSelf: 'flex-end',
								fontSize: isMobile ? '12px' : '14px',
								color: 'var(--color-text-navbar-disabled)',
							}}
						>
							Warden Tokens
						</p>
						<a href="https://medium.com/wardenofficial/warden-tokens-wad-7e5216ba15c6">
							<p
								style={{
									alignSelf: 'flex-end',
									fontSize: isMobile ? '12px' : '14px',
									color: '#23B0FF',
									marginLeft: '7px',
								}}
							>
								Detail here
							</p>
						</a>
					</div>
					<ViewPortfolio />
				</div>
			</Content>
		</Container>
	);
};

export default Reward;
